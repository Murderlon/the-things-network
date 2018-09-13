import { geoPath } from 'd3-geo'
import debounce from 'lodash.debounce'

export default ({ map, svg, transform }) => ({ data, color }) => {
  const path = geoPath().projection(transform)

  const line = svg
    .selectAll('path.ants')
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

  map.on('zoom', debounce(update, 10))
  map.on('move', debounce(update, 10))
}
