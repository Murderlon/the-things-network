import React, { Component } from 'react'
import styled from 'styled-components'
import { select, selectAll } from 'd3-selection'

import grid from 'assets/transparent-grid.svg'
import variables from '../styles/variables'

let TransparentGrid = styled(grid)`
  position: absolute;
  z-index: -10;
  width: 100%;
  height: inherit;
  grid-column: 1 / 19;
`

// Beware, is an ugly
class AnimatedGrid extends Component {
  state = {
    hasLargeScreen: null
  }

  componentDidMount() {
    this.mq = window.matchMedia(`(min-width: 90rem)`)

    this.setState({ hasLargeScreen: this.mq.matches })
    this.mq.addListener(this.update)

    if (this.mq.matches) {
      this.setupAnimatedGrid()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.hasLargeScreen === null) return
    let { hasLargeScreen } = this.state
    console.log('didupdate')

    if (hasLargeScreen && !prevState.hasLargeScreen) {
      console.log('resstart')
      this.setupAnimatedGrid()
    }
    if (!hasLargeScreen && prevState.hasLargeScreen) {
      this.svg.selectAll('rect').style('fill-opacity', 0)
      this.removeListeners()
    }
  }

  componentWillUnmount() {
    this.removeListeners()
  }

  update = ({ matches }) => {
    this.setState({ hasLargeScreen: matches })
  }

  setupAnimatedGrid() {
    this.svg = select('#transparent-grid')

    this.rows = Array.from(
      new Set(
        Array.from(this.svg.selectAll('rect')._groups[0]).map(rect =>
          rect.getAttribute('y')
        )
      )
    ).filter(Boolean)

    this.timeoutOne = setTimeout(() => this.animateCubes('intervalOne'), 1000)
    this.timeoutTwo = setTimeout(() => this.animateCubes('intervalTwo'), 2000)
  }

  random = () => {
    let randomIndex = Math.floor(Math.random() * (this.rows.length - 1 + 1) + 1)
    return Array.from(
      this.svg.selectAll(`rect[y="${this.rows[randomIndex]}"]`)._groups[0]
    ).reverse()
  }

  animateCubes = name => {
    let index = 0
    let slice = 0
    let rects = this.random()

    this[name] = setInterval(() => {
      if (index + 7 === 24) {
        index = 0
        slice = 0
        selectAll(rects).style('fill-opacity', 0)
        rects = this.random()
      } else {
        if (slice < 7) slice++
        selectAll(rects.slice(index, index + slice))
          .style('fill', variables.green)
          .style('fill-opacity', (_, i) => i / 10)
      }
      index++
    }, 100)
  }

  removeListeners = () => {
    clearInterval(this.intervalOne)
    clearInterval(this.intervalTwo)
    clearTimeout(this.timeoutOne)
    clearTimeout(this.timeoutTwo)

    this.mq.removeListener(this.update)
  }

  render() {
    return <TransparentGrid />
  }
}

export default AnimatedGrid
