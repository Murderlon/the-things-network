import React, { Component } from 'react'
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
  render() {
    let { currentStep, data } = this.props
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
          Range and power usage vs. recurring costs
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
        {data.map(({ protocol, cost, powerUsage, range }, i) => (
          <g
            key={protocol}
            fillOpacity={currentStep > i ? 0.3 : 1}
            transform={`translate(${x(cost)}, ${y(powerUsage)})`}
          >
            <Spring
              from={{ r: currentStep >= i ? 0 : r(range) }}
              to={{ r: currentStep >= i ? r(range) : 0 }}
            >
              {props => <circle {...props} fill={variables.green} />}
            </Spring>
            <Spring
              from={{ opacity: currentStep >= i ? 0 : 1 }}
              to={{ opacity: currentStep >= i ? 1 : 0 }}
            >
              {props => (
                <text
                  textAnchor={i <= 1 ? 'start' : 'middle'}
                  dx={i <= 1 ? r(range) + 10 : null}
                  dy={5}
                  fill={i <= 1 ? 'white' : variables.secondaryBlue}
                  style={props}
                >
                  {protocol}
                </text>
              )}
            </Spring>
          </g>
        ))}
      </ParentGroup>
    )
  }
}

export default LineChart
