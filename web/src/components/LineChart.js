import React, { Component } from 'react'
import styled from 'styled-components'
import { scaleLinear } from 'd3-scale'
import { line, curveCardinal } from 'd3-shape'
import { extent } from 'd3-array'
import { format } from 'd3-format'

import variables from '../styles/variables'

let ParentGroup = styled.g`
  .overlay {
    fill: none;
    pointer-events: all;
  }
  .label {
    font-family: ${variables.monoTypo};
    font-size: 1rem;
    fill: ${variables.purple};
  }

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

  .focus {
  }
`

class LineChart extends Component {
  state = {
    tracker: { year: 2018, value: 23140000000 }
  }

  render() {
    let data = this.props.data
    let margin = { top: 60, right: 60, bottom: 60, left: 60 }
    let width = this.props.width - margin.left - margin.right
    let height = this.props.height - margin.top - margin.bottom
    let currentYear = data.findIndex(
      ({ year }) => year === new Date().getFullYear()
    )

    this.x = scaleLinear()
      .domain(extent(data.map(({ year }) => year)))
      .range([0, width])

    this.y = scaleLinear()
      .domain([0, 100000000000])
      .range([height, 0])

    let lineGenerator = line()
      .x(({ year }) => this.x(year))
      .y(({ value }) => this.y(value))
      .curve(curveCardinal)

    return (
      <ParentGroup transform={`translate(${margin.left}, ${margin.top})`}>
        <text
          transform={`translate(${width / 2}, ${-margin.top / 3})`}
          textAnchor="middle"
          className="label"
        >
          IoT global market (billions)
        </text>
        <g
          className="focus"
          transform={`translate(${this.x(this.state.tracker.year)}, ${this.y(
            this.state.tracker.value
          )})`}
        >
          <circle fill={variables.red} r={7.5} />
          <text x={15} y={5} fill={variables.red}>
            {format('.2s')(this.state.tracker.value).replace(/G/, 'B')}
          </text>
        </g>
        <g
          className="x axis"
          transform={`translate(0, ${height})`}
          textAnchor="end"
        >
          {this.x.ticks(10, '').map((tick, i) => (
            <g
              key={tick}
              className="tick"
              transform={`translate(${this.x(tick)}, 0)`}
            >
              <line stroke="currentColor" y2={-width} />
              <text fill="currentColor" y="30">
                {i === 0 ? tick : `'${tick - 2000}`}
              </text>
            </g>
          ))}
        </g>
        <g className="y axis">
          {this.y.ticks().map(tick => (
            <g
              key={tick}
              className="tick"
              transform={`translate(0, ${this.y(tick)})`}
              textAnchor="end"
            >
              <line stroke="currentColor" x2={height} />
              <text fill="currentColor" x="-15">
                {format('.2s')(tick).replace(/G/, 'B')}
              </text>
            </g>
          ))}
        </g>
        <path
          className="line present"
          d={lineGenerator(data.slice(0, currentYear + 1))}
        />
        <path
          className="line future"
          d={lineGenerator(data.slice(currentYear))}
        />
        <rect
          width={width}
          height={height}
          className="overlay"
          onMouseMove={({ pageX }) => {
            let year = Math.round(this.x.invert(pageX) - 3)
            let value = data.find(d => d.year === year).value

            this.setState({
              tracker: { year, value }
            })
          }}
        />
      </ParentGroup>
    )
  }
}

export default LineChart
