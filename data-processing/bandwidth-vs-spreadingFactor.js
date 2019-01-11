const {createReadStream, createWriteStream} = require('fs')
const {pipe, through, to} = require('mississippi')
const csv = require('csv-parser')
const delve = require('dlv')

const writeStream = createWriteStream(
  './output/bandwidth-vs-spreadingFactor.json'
)
const readStream = createReadStream('./input/gateway-one-week.csv', {
  encoding: 'utf8'
})

const bandwidths = []

pipe(
  readStream,
  csv(),
  through.obj(parse),
  through.obj(accumulate),
  done
)

function parse(chunk, enc, cb) {
  // Use correct types for needed values, throw out redundant keys.
  cb(null, {
    uplinks: Number(chunk.uplink_count) || null,
    downlinks: Number(chunk.downlink_count) || null,
    bandwidth: Number(chunk['lorawan.bandwidth']) || null,
    spreadingFactor: Number(chunk['lorawan.spreading_factor']) || null
  })
}

function accumulate(chunk, enc, cb) {
  const bw = bandwidths.find(bw => bw && chunk.bandwidth === bw.mhz)

  if (!bw && chunk.bandwidth !== null) {
    bandwidths.push({
      mhz: chunk.bandwidth,
      spreadingFactors: [
        {
          value: chunk.spreadingFactor,
          uplinks: chunk.uplinks,
          downlinks: chunk.downlinks
        }
      ]
    })
    // The current bandwidth IS in `bandwidths`.
  } else if (chunk.bandwidth !== null && chunk.spreadingFactor !== null) {
    const hasSF = bw.spreadingFactors.some(
      sf => chunk.spreadingFactor === delve(sf, 'value')
    )
    // The current spreading factor DOESN'T exist yet
    // in the current bandwidth
    if (!hasSF) {
      bw.spreadingFactors.push({
        value: chunk.spreadingFactor,
        uplinks: chunk.uplinks || 0,
        downlinks: chunk.downlinks || 0
      })
      // The current spreading factor DOES exist
      // in the current bandwidth so we apply addition.
    } else {
      const sf = bw.spreadingFactors.find(
        sf => chunk.spreadingFactor === sf.value
      )
      sf.uplinks = sf.uplinks + (chunk.uplinks || 0)
      sf.downlinks = sf.downlinks + (chunk.downlinks || 0)
    }
  }
  cb(null)
}

function done(err) {
  if (err) console.error(err)

  bandwidths
    .sort((a, b) => a.mhz - b.mhz)
    .map(({spreadingFactors}) =>
      spreadingFactors.sort((a, b) => a.value - b.value)
    )

  writeStream.write(JSON.stringify({bandwidths}))
  writeStream.end()
}
