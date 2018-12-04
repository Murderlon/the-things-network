import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import { scaleLinear, scaleSqrt } from 'd3-scale'
import { extent } from 'd3-array'
import { Spring } from 'react-spring'

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

  text {
    font-family: ${variables.monoTypo};
  }

  .tick text {
    font-size: 0.8rem;
    color: ${variables.highlightBlue};

    tspan:not(:first-of-type) {
      color: ${variables.purple};
    }
  }

  .tick line {
    color: ${variables.purple};
    stroke-opacity: 0.4;
  }
`

class LineChart extends Component {
  overlayRef = createRef()

  onMouseMove = () => {}

  render() {
    let data = this.props.data
    let margin = { top: 60, right: 60, bottom: 60, left: 60 }
    let width = this.props.width - margin.left - margin.right
    let height = this.props.height - margin.top - margin.bottom

    let x = scaleLinear()
      .domain([0, 1])
      .range([0, width])

    let y = scaleLinear()
      .domain([0, 1])
      .range([height, 0])

    let r = scaleSqrt()
      .domain(extent(data.map(({ range }) => range)))
      .range([10, width / 4])

    let xLabels = ['Cheap', 'Mid', 'Expensive']
    let yLabels = ['Low', 'Mid', 'High ']
    let textAnchors = ['start', 'middle', 'end']

    return (
      <ParentGroup transform={`translate(${margin.left}, ${margin.top})`}>
        <text
          transform={`translate(${width / 2}, ${-margin.top / 3})`}
          textAnchor="middle"
          className="label"
        >
          Technology range and power usage vs. cost
        </text>
        <g className="x axis" transform={`translate(0, ${height})`}>
          {x.ticks(3).map((tick, i) => (
            <g
              key={tick}
              className="tick"
              transform={`translate(${x(tick)}, 0)`}
              textAnchor={textAnchors[i]}
            >
              <line stroke="currentColor" y2={-width} />
              <text fill="currentColor" y="30">
                <tspan>{xLabels[i]} </tspan>
                {i === 0 && <tspan>cost</tspan>}
              </text>
            </g>
          ))}
        </g>
        <g className="y axis">
          {y.ticks(3).map((tick, i) => (
            <g
              key={tick}
              className="tick"
              transform={`translate(0, ${y(tick)})`}
              textAnchor="end"
            >
              <line stroke="currentColor" x2={height} />
              <text fill="currentColor" x="-10">
                <tspan x="-10" y="0">
                  {yLabels[i]}
                </tspan>
                {i === 2 && (
                  <>
                    <tspan x="-10" y="20">
                      power
                    </tspan>
                    <tspan x="-10" y="40">
                      usage
                    </tspan>
                  </>
                )}
              </text>
            </g>
          ))}
        </g>
        {data.map(({ protocol, cost, powerUsage, range }, i) =>
          this.props.currentStep >= i ? (
            <g
              key={protocol}
              fillOpacity={this.props.currentStep > i ? 0.3 : 1}
            >
              <Spring from={{ r: 0 }} to={{ r: r(range) }}>
                {props => (
                  <circle
                    {...props}
                    cx={x(cost)}
                    cy={y(powerUsage)}
                    fill={variables.green}
                  />
                )}
              </Spring>
              {i <= 1 ? (
                <text
                  fill="white"
                  transform={`translate(${x(cost) + r(range) + 10}, ${y(
                    powerUsage
                  ) + 8})`}
                >
                  {protocol}
                </text>
              ) : (
                <text
                  fill={variables.secondaryBlue}
                  transform={`translate(${x(cost) - r(range) / 3}, ${y(
                    powerUsage
                  ) + 8})`}
                >
                  {protocol}
                </text>
              )}
            </g>
          ) : null
        )}
      </ParentGroup>
    )
  }
}

export default LineChart
