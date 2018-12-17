import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { scaleLinear } from 'd3-scale'
import { line, curveCardinal } from 'd3-shape'
import { extent, bisector } from 'd3-array'
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
`

export default props => (
  <StaticQuery
    query={graphql`
      query {
        ioTJson {
          years {
            year
            value
          }
        }
      }
    `}
    render={({ ioTJson }) => {
      let presentIndex = ioTJson.years.findIndex(
        ({ year }) => year === new Date().getFullYear()
      )
      let data = ioTJson.years
      let margin = { top: 60, right: 60, bottom: 60, left: 60 }
      let width = props.width - margin.left - margin.right
      let height = props.height - margin.top - margin.bottom

      return (
        <LineChart
          data={data}
          presentIndex={presentIndex}
          width={width}
          height={height}
          margin={margin}
        />
      )
    }}
  />
)

class LineChart extends Component {
  state = {
    tracker: this.props.data[this.props.presentIndex]
  }

  onMouseMove = e => {
    let x = scaleLinear()
      .domain(extent(this.props.data.map(({ year }) => year)))
      .range([0, this.props.width])
    let year = Math.round(x.invert(e.pageX) - 3)

    if (this.state.tracker.year !== year) {
      let data = this.props.data
      let bisectYear = bisector(d => d.year).left
      let yearIndex = bisectYear(data, year)
      let value = data[yearIndex].value

      this.setState({
        tracker: { year, value }
      })
    }
  }

  render() {
    let { data, width, height, margin } = this.props

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
        <text
          transform={`translate(${width / 2}, ${-margin.top / 3})`}
          textAnchor="middle"
          className="label"
        >
          IoT global market (billions)
        </text>
        <g
          className="x axis"
          transform={`translate(0, ${height})`}
          textAnchor="end"
        >
          {x.ticks(10, '').map((tick, i) => (
            <g
              key={tick}
              className="tick"
              transform={`translate(${x(tick)}, 0)`}
            >
              <line stroke="currentColor" y2={-width} />
              <text fill="currentColor" y="30">
                {i === 0 ? tick : `'${tick - 2000}`}
              </text>
            </g>
          ))}
        </g>
        <g className="y axis">
          {y.ticks().map(tick => (
            <g
              key={tick}
              className="tick"
              transform={`translate(0, ${y(tick)})`}
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
          d={lineGenerator(data.slice(0, this.props.presentIndex + 1))}
        />
        <path
          className="line future"
          d={lineGenerator(data.slice(this.props.presentIndex))}
        />
        <rect
          width={width}
          height={height}
          className="overlay"
          onMouseMove={this.onMouseMove}
          onTouchMove={this.onMouseMove}
        />
        <g
          className="focus"
          height={height}
          transform={`translate(${x(this.state.tracker.year)}, 0)`}
        >
          <rect
            height={height}
            width={15}
            fill={variables.secondaryBlue}
            fillOpacity="0.5"
            x={-7}
          />
          <g transform={`translate(0, ${y(this.state.tracker.value)})`}>
            <rect
              fill={variables.secondaryBlue}
              fillOpacity="0.5"
              width={35}
              x={8}
              y={-10}
              height={20}
            />
            <circle fill={variables.red} r={7.5} />
            <text x={15} y={5} fill={variables.red}>
              {format('.2s')(this.state.tracker.value).replace(/G/, 'B')}
            </text>
          </g>
        </g>
      </ParentGroup>
    )
  }
}
