import MapboxGL from 'mapbox-gl'
import { geoPath, geoTransform } from 'd3-geo'

export default ({ map, data, svg, color }) => {
  const self = map
  const transform = geoTransform({
    point: function(lon, lat) {
      const point = self.project(new MapboxGL.LngLat(lon, lat))
      this.stream.point(point.x, point.y)
    }
  })
  const path = geoPath().projection(transform)

  const line = svg
    .selectAll('path')
    .data(data)
    .enter()
    .append('path')
    .attr('d', geoPath().projection(transform))
    .attr('stroke', color)
    .attr('stroke-width', 4)
    .attr('stroke-dasharray', (d, i) => (i > 0 ? null : [10, 14]))
    .attr('stroke-opacity', (d, i) => (i > 0 ? 0.2 : null))
    .attr('stroke-linecap', 'round')
    .attr('stroke-join', 'round')
    .classed('marching_ants_animation', (d, i) => i < 1)

  function update() {
    line.attr('d', path)
  }

  map.on('zoom', update)
  map.on('move', update)
}
