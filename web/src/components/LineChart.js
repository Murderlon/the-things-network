import React, { Component } from 'react'
import styled from 'styled-components'
import { scaleLinear } from 'd3-scale'
import { line, curveCardinal } from 'd3-shape'
import { extent } from 'd3-array'
import { format } from 'd3-format'

import variables from '../styles/variables'

const ParentGroup = styled.g`
  .line {
    fill: none;
    stroke: ${variables.red};
    stroke-width: 5;
  }

  .future {
    stroke-dasharray: 10;
    stroke-opacity: 0.4;
  }

  .tick text {
    font-family: ${variables.monoTypo};
    font-size: 0.8rem;
    color: ${variables.highlightBlue};
  }

  .tick line {
    color: ${variables.purple};
    stroke-opacity: 0.4;
  }
`

class LineChart extends Component {
  render () {
    let data = this.props.data
    let margin = { top: 65, right: 65, bottom: 65, left: 65 }
    let width = this.props.width - margin.left - margin.right
    let height = this.props.height - margin.top - margin.bottom
    let currentYear = data.findIndex(({ year }) => year === new Date().getFullYear())

    let x = scaleLinear()
      .domain(extent(data.map(({ year }) => year)))
      .range([0, width])

    let y = scaleLinear()
      .domain([0, 100000000000])
      .range([height, 0])

    let lineGenerator = line()
      .x(({ year }) => x(year))
      .y(({ value }) => y(value))
      .curve(curveCardinal)

    return (
      <ParentGroup transform={`translate(${margin.left}, ${margin.top})`}>
        <g className="x axis" transform={`translate(0, ${height})`}>
          {x.ticks(10, '').map(tick => (
            <g key={tick} className="tick" transform={`translate(${x(tick)}, 0)`}>
              <line stroke="currentColor" y2={-width} />
              <text fill="currentColor" y="30">
                {tick}
              </text>
            </g>
          ))}
        </g>
        <g className="y axis">
          {y.ticks().map(tick => (
            <g key={tick} className="tick" transform={`translate(0, ${y(tick)})`} text-anchor="end">
              <line stroke="currentColor" x2={height} />
              <text fill="currentColor" x="-15">
                {format('.2s')(tick).replace(/G/, 'B')}
              </text>
            </g>
          ))}
        </g>
        <path className="line present" d={lineGenerator(data.slice(0, currentYear + 1))} />
        <path className="line future" d={lineGenerator(data.slice(currentYear))} />
      </ParentGroup>
    )
  }
}

export default LineChart
