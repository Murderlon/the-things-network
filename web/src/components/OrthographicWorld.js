import React, { Component, createRef } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import versor from 'versor'
import * as topoJSON from 'topojson-client'
import { drag } from 'd3-drag'
import { geoOrthographic, geoPath } from 'd3-geo'
import { select, mouse } from 'd3-selection'
import world from 'world-atlas/world/110m.json'

import variables from '../styles/variables'

let Canvas = styled.canvas`
  display: block;
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

  componentDidMount() {
    let land = topoJSON.feature(world, world.objects.land)
    let sphere = { type: 'Sphere' }
    let width = 700
    let height = 700
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

    function dragging(projection) {
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

    select(context.canvas)
      .call(dragging(projection).on('drag.render', render))
      .call(render)
      .node()
  }

  render() {
    return <Canvas width={700} height={700} ref={this.canvasRef} />
  }
}
