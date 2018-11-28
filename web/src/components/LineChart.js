import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import { scaleLinear } from 'd3-scale'
import { axisBottom, axisLeft } from 'd3-axis'
import { line, curveMonotoneX } from 'd3-shape'
import { select } from 'd3-selection'
import { extent } from 'd3-array'

import variables from '../styles/variables'

const SVG = styled.svg`
  .line {
    fill: none;
    stroke: ${variables.red};
    stroke-width: 5;
  }

  .overlay {
    fill: none;
    pointer-events: all;
  }

  /* Style the dots by assigning a fill and stroke */
  .dot {
    fill: #ffab00;
    stroke: #fff;
  }

  .focus circle {
    fill: none;
    stroke: steelblue;
  }

  .tick text {
    font-family: ${variables.monoTypo};
    font-size: 0.8rem;
  }
`

class LineChart extends Component {
  constructor (props) {
    super(props)
    this.svgRef = createRef()
  }

  componentDidMount () {
    this.renderLineChart()
  }

  renderLineChart = () => {
    let svg = select(this.svgRef.current)
    let margin = { top: 50, right: 50, bottom: 50, left: 50 }
    let width = 700 - margin.left - margin.right
    let height = 700 - margin.top - margin.bottom
    let data = this.props.data

    let xScale = scaleLinear()
      .domain(extent(data.map(({ year }) => year)))
      .range([0, width])

    let yScale = scaleLinear()
      .domain([0, 100000000000])
      .range([height, 0])

    let lineGenerator = line()
      .x(({ year }) => xScale(year))
      .y(({ value }) => yScale(value))
      .curve(curveMonotoneX)

    // svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`)

    svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(0,${height})`)
      .call(
        axisBottom(xScale)
          .ticks(10, '')
          .tickSize([0])
          .tickPadding([10])
      )

    svg
      .append('g')
      .attr('class', 'y axis')
      .attr('transform', `translate(${width}, 0)`)
      .call(
        axisLeft(yScale)
          .ticks(10, 's')
          .tickSize([0])
          .tickPadding([10])
      )

    svg
      .append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', lineGenerator)
  }

  render () {
    const { parentWidth, parentHeight } = this.props

    return <SVG width={parentWidth} height={parentHeight} ref={this.svgRef} />
  }
}

export default LineChart
