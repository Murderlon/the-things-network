const { createReadStream, createWriteStream } = require('fs');
const { pipe, through, to } = require('mississippi');
const { performance } = require('perf_hooks');
const csv = require('csv-parser');
const isSameDay = require('date-fns/is_same_day');
const delve = require('dlv');
const merge = require('lodash.merge');

const writeStream = createWriteStream('./data.json');
const readStream = createReadStream('./biyearly.gateway_counters.csv', {
  encoding: 'utf8',
});

const memory = {};

let tStart, tEnd;
let currentDate;
let dayTotal = {
  time: null,
  downlink_bytes: 0,
  downlink_count: 0,
  uplink_bytes: 0,
  uplink_count: 0,
  bandwidths: [],
  frequencies: [],
};

tStart = performance.now();

pipe(
  readStream,
  csv(),
  through.obj(parse),
  through.obj(cumulativeDay),
  to.obj(write),
  async err => {
    if (err) {
      return console.error(err);
    }
    tEnd = performance.now();
    console.log(`Total time spent: ${(tEnd - tStart) / 1000} seconds`);
    await writeStream.write(JSON.stringify(memory));
    writeStream.end();
  },
);

function parse(chunk, enc, cb) {
  // Use correct types for needed values, throw out redundant keys.
  cb(null, {
    time: new Date(Number(chunk.time) / 1000000),
    downlink_bytes: Number(chunk.downlink_bytes) || null,
    downlink_count: Number(chunk.downlink_count) || null,
    uplink_bytes: Number(chunk.uplink_bytes) || null,
    uplink_count: Number(chunk.uplink_count) || null,
    bandwidth: Number(chunk['lorawan.bandwidth']) || null,
    frequency: Number(chunk['lorawan.frequency']) || null,
    spreading_factor: Number(chunk['lorawan.spreading_factor']) || null,
  });
}

async function cumulativeDay(chunk, enc, cb) {
  let copy;

  if (typeof currentDate === 'undefined') {
    currentDate = chunk.time;
  }

  // The incoming chunk is no longer from the same day.
  // Pass on `dayTotal` and then reset it.
  if (!isSameDay(chunk.time, currentDate)) {
    // Create a copy of dayTotal
    copy = Object.assign({}, dayTotal);

    // Reset dayTotal
    dayTotal.time = null;
    dayTotal.downlink_bytes = 0;
    dayTotal.downlink_count = 0;
    dayTotal.uplink_bytes = 0;
    dayTotal.uplink_count = 0;
    dayTotal.bandwidths = [];
    dayTotal.frequencies = [];

    // Set the new date
    currentDate = chunk.time;
  }

  await Promise.all([
    updateStaticProperties(dayTotal, chunk),
    updateBandwidth(dayTotal, chunk),
    updateFrequency(dayTotal, chunk),
  ]);
  // Pass the copy to the next Transform stream
  copy ? cb(null, copy) : cb(null);
}

async function write(chunk, enc, cb) {
  const day = memory[chunk.time];
  if (day) {
    const [staticChunk, bandwidths, frequencies] = await Promise.all([
      updateStaticProperties(day, chunk),
      updateBandwidth(day, chunk),
      updateFrequency(day, chunk),
    ]);
    merge(memory[chunk.time], {
      ...staticChunk,
      bandwidths,
      frequencies,
    });
  } else {
    memory[chunk.time] = chunk;
  }
  console.log(`processed ${chunk.time}`);
  cb();
}

function updateStaticProperties(day, chunk) {
  const sum = key => day[key] + chunk[key] || 0;
  return new Promise((res, rej) => {
    try {
      day.time = chunk.time;
      day.downlink_bytes = sum('downlink_bytes');
      day.downlink_count = sum('downlink_count');
      day.uplink_bytes = sum('uplink_bytes');
      day.uplink_count = sum('uplink_count');
      res({
        time: day.time,
        downlink_bytes: day.downlink_bytes,
        downlink_count: day.downlink_count,
        uplink_bytes: day.uplink_bytes,
        uplink_count: day.uplink_count,
      });
    } catch (err) {
      rej(err);
    }
  });
}

function updateBandwidth(day, chunk) {
  const bw = day.bandwidths.find(bw => bw && chunk.bandwidth === bw.mhz);
  return new Promise((res, rej) => {
    try {
      // The current bandwidth ISN'T in `day` yet.
      if (!bw && chunk.bandwidth !== null) {
        day.bandwidths.push({
          mhz: chunk.bandwidth,
          spreading_factors: [
            {
              spreading_factor: chunk.spreading_factor,
              uplinks: chunk.uplink_count,
              downlinks: chunk.downlink_count,
            },
          ],
        });
        // The current bandwidth IS in `day`.
      } else if (chunk.bandwidth !== null && chunk.spreading_factor !== null) {
        const hasSF = bw.spreading_factors.some(
          sf => chunk.spreading_factor === delve(sf, 'spreading_factor'),
        );
        // The current spreading factor DOESN'T exist yet
        // in the current bandwidth
        if (!hasSF) {
          bw.spreading_factors.push({
            spreading_factor: chunk.spreading_factor,
            uplinks: chunk.uplink_count || 0,
            downlinks: chunk.downlink_count || 0,
          });
          // The current spreading factor DOES exist
          // in the current bandwidth so we apply addition.
        } else {
          const sf = bw.spreading_factors.find(
            sf => chunk.spreading_factor === sf.spreading_factor,
          );
          sf.uplinks = sf.uplinks + (chunk.uplink_count || 0);
          sf.downlinks = sf.downlinks + (chunk.downlink_count || 0);
        }
      }
      res(day.bandwidths);
    } catch (err) {
      rej(err);
    }
  });
}

function updateFrequency(day, chunk) {
  return new Promise((res, rej) => {
    try {
      const freq = day.frequencies.find(
        f => f && chunk.frequency === f.frequency,
      );

      // The current frequency ISN'T in `day` yet.
      if (!freq && chunk.frequency !== null) {
        day.frequencies.push({
          frequency: chunk.frequency,
          uplinks: chunk.uplink_count || 0,
          downlinks: chunk.downlink_count || 0,
        });
        // The current frequency IS in `dayTotal` so we apply addition.
      } else if (chunk.frequency !== null) {
        freq.uplinks = freq.uplinks + (chunk.uplink_count || 0);
        freq.downlinks = freq.downlinks + (chunk.downlink_count || 0);
      }
      res(day.frequencies);
    } catch (err) {
      rej(err);
    }
  });
}
