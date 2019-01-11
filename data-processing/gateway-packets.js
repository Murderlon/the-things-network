const {createReadStream, createWriteStream} = require('fs')
const {pipe, through, to} = require('mississippi')
const csv = require('csv-parser')
const isSameDay = require('date-fns/is_same_day')
const delve = require('dlv')
const mergeObjects = require('lodash.merge')

const writeStream = createWriteStream('./output/gateway-packets.json')
const readStream = createReadStream('./input/gateway-one-week.csv', {
  encoding: 'utf8',
})

const days = []

let currentDate
let dayTotal = {
  time: null,
  downlink_bytes: 0,
  downlink_count: 0,
  uplink_bytes: 0,
  uplink_count: 0,
}

pipe(
  readStream,
  csv(),
  through.obj(parse),
  through.obj(cumulativeDay),
  to.obj(merge),
  done,
)

function parse(chunk, enc, cb) {
  // Use correct types for needed values, throw out redundant keys.
  cb(null, {
    time: new Date(Number(chunk.time) / 1000000),
    downlink_bytes: Number(chunk.downlink_bytes) || null,
    downlink_count: Number(chunk.downlink_count) || null,
    uplink_bytes: Number(chunk.uplink_bytes) || null,
    uplink_count: Number(chunk.uplink_count) || null,
  })
}

async function cumulativeDay(chunk, enc, cb) {
  let copy

  if (typeof currentDate === 'undefined') {
    currentDate = chunk.time
  }

  // The incoming chunk is no longer from the same day.
  // Pass on `dayTotal` and then reset it.
  if (!isSameDay(chunk.time, currentDate)) {
    // Create a copy of dayTotal
    copy = Object.assign({}, dayTotal)

    // Reset dayTotal
    dayTotal.time = null
    dayTotal.downlink_bytes = 0
    dayTotal.downlink_count = 0
    dayTotal.uplink_bytes = 0
    dayTotal.uplink_count = 0

    // Set the new date
    currentDate = chunk.time
  }

  try {
    await updateDay(dayTotal, chunk)
  } catch (err) {
    if (err) {
      console.error(err)
      process.exit(1)
    }
  }

  // Pass the copy to the next Transform stream
  copy ? cb(null, copy) : cb(null)
}

function updateDay(day, chunk) {
  const sum = key => day[key] + chunk[key] || 0
  return new Promise((res, rej) => {
    try {
      day.time = chunk.time
      day.downlink_bytes = sum('downlink_bytes')
      day.downlink_count = sum('downlink_count')
      day.uplink_bytes = sum('uplink_bytes')
      day.uplink_count = sum('uplink_count')
      res({
        time: day.time,
        downlink_bytes: day.downlink_bytes,
        downlink_count: day.downlink_count,
        uplink_bytes: day.uplink_bytes,
        uplink_count: day.uplink_count,
      })
    } catch (err) {
      rej(err)
    }
  })
}

async function merge(chunk, enc, cb) {
  const index = days.findIndex(day => day && isSameDay(day.time, chunk.time))
  if (index > 0) {
    let day
    try {
      day = await updateDay(days[index], chunk)
    } catch (err) {
      if (err) {
        console.error(err)
        process.exit(1)
      }
    }
    mergeObjects(days[index], day)
  } else {
    days.push(chunk)
  }
  cb()
}

function done(err) {
  if (err) console.error(err)

  writeStream.write(JSON.stringify({days}))
  writeStream.end()

  console.log(`successfully created ${days.length} days of data`)
}
