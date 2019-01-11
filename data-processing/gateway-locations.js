const fs = require('fs')
const fetch = require('isomorphic-fetch')
const clusterDbscan = require('@turf/clusters-dbscan').default
const tc = require('@turf/clusters')

const input = 'http://noc.thethingsnetwork.org:8085/api/v2/gateways'
const output = './output/gateway-locations.json'

let gatewayTotal
let clusterTotal

fetch(input)
  .then(blob => blob.json())
  .then(json => createGeoJSON(json, ttnTransform))
  .then(geoJSON => cluster(geoJSON))
  .then(clustered => createGeoJSON(clustered, turfTransform))
  .then(data => write(data))
  .catch(err => console.error(err))

function createGeoJSON(data, fn) {
  return {
    type: 'FeatureCollection',
    features: fn(data),
  }
}

function ttnTransform(data) {
  return Object.values(data.statuses).reduce((acc, {location}) => {
    if (
      typeof location.longitude !== 'undefined' &&
      typeof location.latitude !== 'undefined'
    ) {
      acc.push({
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [location.longitude, location.latitude],
        },
      })
    }
    return acc
  }, [])
}

function cluster(geoJSON) {
  gatewayTotal = geoJSON.features.length
  return clusterDbscan(geoJSON, 20, {mutate: true})
}

function turfTransform(data) {
  return tc.clusterReduce(
    data,
    'cluster',
    (acc, cluster, clusterValue) => {
      acc.push({
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: cluster.features[0].geometry.coordinates,
        },
      })
      return acc
    },
    [],
  )
}

function write(data) {
  clusterTotal = data.features.length
  fs.writeFile(
    output,
    JSON.stringify({gatewayTotal, geoJSON: data}),
    'utf8',
    done,
  )
}

function done(err) {
  if (err) return console.error(err)

  console.log(`successfully created with ${clusterTotal} clusters`)
}
