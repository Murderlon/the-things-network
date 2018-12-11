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
import { rgba } from 'polished'

import TTNLogo from '../assets/ttn-logo.svg'

import variables from '../styles/variables'

let Root = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  display: block;
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
  background: ${rgba(variables.secondaryBlue, 0.3)};
  border-radius: 50%;
  padding: ${variables.spacing.medium};

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
    render={({ gatewaysJson }) => (
      <OrthographicWorld gateways={gatewaysJson} {...props} />
    )}
  />
)

class OrthographicWorld extends Component {
  canvasRef = createRef()
  rootRef = createRef()
  state = {
    width: 0,
    height: 0
  }

  componentDidMount() {
    this.setupCanvas()

    window.addEventListener('resize', this.handleWindowResize)
    // Call once to set the correct dimensions
    this.handleWindowResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  handleWindowResize = schedule(() => {
    let { width, height } = this.rootRef.current.getBoundingClientRect()

    this.setState({ width, height })
    this.setupCanvas()
  })

  setupCanvas = () => {
    let land = topoJSON.feature(world, world.objects.land)
    let sphere = { type: 'Sphere' }
    let width = this.state.width
    let height = this.state.height
    let projection = geoOrthographic()
      .fitExtent([[1, 1], [width - 1, height - 1]], sphere)
      .translate([width / 2, height / 2])
      .precision(1)
    let canvas = this.canvasRef.current
    let gateways = this.props.gateways
    let context = canvas.getContext('2d')
    let path = geoPath(projection, context)

    function render() {
      context.clearRect(0, 0, width, height)

      context.beginPath()
      path(sphere)
      context.fillStyle = '#1F2033'
      context.fill()

      context.beginPath()
      path(land)
      context.fillStyle = '#292B44'
      context.fill()

      context.beginPath()
      path(sphere)
      context.stroke()

      context.beginPath()
      path(gateways)
      context.fillStyle = variables.green
      context.fill()
    }

    select(context.canvas)
      .call(this.dragging(projection).on('drag.render', render))
      .call(render)
      .node()
  }

  dragging = projection => {
    let v0, q0, r0

    function dragstarted() {
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
