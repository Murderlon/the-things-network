import React from 'react'
import { geoPath, geoMercator } from 'd3-geo'

let padding = 20

let MapBaseGroup = ({
  width,
  height,
  extent,
  children,
  topPadding = 0,
  bottomPadding = 0,
  rightPadding = 0
}) => {
  let projection = geoMercator().fitExtent(
    [
      [padding, Math.round(Math.max(height * topPadding, padding))],
      [
        width - Math.round(Math.max(width * rightPadding, padding)),
        height - Math.max(bottomPadding, padding)
      ]
    ],
    extent
  )
  let path = geoPath(projection)

  return <g>{children({ projection, path })}</g>
}

export default MapBaseGroup
