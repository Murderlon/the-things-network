import React, { Component, createRef } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import versor from 'versor'
import * as topoJSON from 'topojson-client'
import { drag } from 'd3-drag'
import { geoOrthographic, geoPath } from 'd3-geo'
import { select, mouse } from 'd3-selection'
import world from 'world-atlas/world/110m.json'
import schedule from 'raf-schd'

import TTNLogo from '../assets/ttn-logo.svg'

import variables from '../styles/variables'

let Root = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  top: 0;
  z-index: 1;
`

let LogoWrapper = styled.div`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 15rem;
  height: 15rem;
  display: flex;
  align-items: center;

  svg {
    width: 100%;
  }
`

let Canvas = styled.canvas`
  display: inline-block;
  margin: 0 auto;
  cursor: move;
`

export default props => (
  <StaticQuery
    query={graphql`
      query {
        gatewaysJson {
          type
          features {
            type
            geometry {
              type
              coordinates
            }
          }
        }
      }
    `}
    render={({ gatewaysJson }) => {
      return <OrthographicWorld gateways={gatewaysJson} {...props} />
    }}
  />
)

class OrthographicWorld extends Component {
  projection = geoOrthographic()
  sphere = { type: 'Sphere' }
  land = topoJSON.feature(world, world.objects.land)
  canvasRef = createRef()
  rootRef = createRef()
  state = {
    width: 0,
    height: 0,
    isDragging: false
  }

  componentDidMount() {
    this.handleResize()

    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate() {
    if (
      this.props.isVisible &&
      !this.state.isDragging &&
      !this.rotateInterval
    ) {
      this.start = Date.now()
      this.rotateInterval = setInterval(schedule(() => this.rotate()))
    } else {
      clearInterval(this.rotateInterval)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    clearInterval(this.rotateInterval)
  }

  handleResize = schedule(() => {
    if (this.rootRef.current) {
      let { width, height } = this.rootRef.current.getBoundingClientRect()
      this.setState({ width, height }, this.setupCanvas)
    }
  })

  setupCanvas = () => {
    let { width, height } = this.state
    this.projection
      .fitExtent([[1, 1], [width / 1.5, height / 1.5]], this.sphere)
      .translate([width / 2, height / 2])
      .precision(1)

    let context = this.canvasRef.current.getContext('2d')

    select(context.canvas)
      .call(this.dragging().on('drag.render', this.renderCanvas))
      .call(this.renderCanvas)
      .node()
  }

  renderCanvas = () => {
    let { width, height } = this.state
    let { gateways } = this.props
    let context = this.canvasRef.current.getContext('2d')

    this.projection
      .fitExtent([[1, 1], [width / 1.5, height / 1.5]], this.sphere)
      .translate([width / 2, height / 2])
      .precision(1)

    let path = geoPath(this.projection, context)

    context.clearRect(0, 0, width, height)

    context.beginPath()
    path(this.sphere)
    context.fillStyle = '#1F2033'
    context.fill()

    context.beginPath()
    path(this.land)
    context.fillStyle = '#292B44'
    context.fill()

    context.beginPath()
    path(this.sphere)
    context.stroke()

    context.beginPath()
    path(gateways)
    context.fillStyle = variables.green
    context.fill()
  }

  rotate = () => {
    this.projection.rotate([-1e-2 * (Date.now() - this.start), 0])
    this.renderCanvas()
  }

  dragging = () => {
    let { projection } = this
    let v0, q0, r0
    let self = this

    function dragstarted() {
      self.setState({ isDragging: true })
      v0 = versor.cartesian(projection.invert(mouse(this)))
      q0 = versor((r0 = projection.rotate()))
    }

    function dragged() {
      const v1 = versor.cartesian(projection.rotate(r0).invert(mouse(this)))
      const q1 = versor.multiply(q0, versor.delta(v0, v1))
      projection.rotate(versor.rotation(q1))
    }

    return drag()
      .on('start', dragstarted)
      .on('drag', dragged)
  }

  render() {
    return (
      <Root ref={this.rootRef}>
        <Canvas
          width={this.state.width}
          height={this.state.height}
          ref={this.canvasRef}
          style={this.props.style}
        />
        <LogoWrapper style={this.props.style}>
          <TTNLogo />
        </LogoWrapper>
      </Root>
    )
  }
}
