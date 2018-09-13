export default ([longitude, latitude], radiusInKm, points = 64) => {
  let ret = []
  let distanceX = radiusInKm / (111.32 * Math.cos((latitude * Math.PI) / 180))
  let distanceY = radiusInKm / 110.574
  let theta, x, y
  let index = -1

  while (++index < points) {
    theta = (index / points) * (2 * Math.PI)
    x = distanceX * Math.cos(theta)
    y = distanceY * Math.sin(theta)

    ret.push([longitude + x, latitude + y])
  }
  ret.push(ret[0])

  return {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [ret]
        }
      }
    ]
  }
}
