import React, { Component } from 'react'
import styled from 'styled-components'
import { select, selectAll } from 'd3-selection'

import GridSVG from 'assets/transparent-grid.svg'
import variables from '../styles/variables'

let TransparentGrid = styled(GridSVG)`
  position: absolute;
  z-index: -10;
  width: 100%;
  height: inherit;
  grid-column: 1 / 19;
`

class AnimatedGrid extends Component {
  componentDidMount() {
    let rects = select('#transparent-grid').selectAll('rect[y="480"]')
      ._groups[0]

    this.timeout = setTimeout(() => this.animateCubes(rects), 1000)
  }

  animateCubes = rects => {
    let index = 0
    let slice = 0

    this.interval = setInterval(() => {
      if (index + 7 === 24) {
        index = 0
        slice = 0
        selectAll(rects).style('fill-opacity', 0)
      } else {
        selectAll(
          Array.from(rects).slice(index, index + (slice < 7 ? slice++ : slice))
        )
          .style('fill', variables.green)
          .style('fill-opacity', (_, i) => i / 10)
      }
      index++
    }, 150)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    clearTimeout(this.timeout)
  }

  render() {
    return <TransparentGrid />
  }
}

export default AnimatedGrid
