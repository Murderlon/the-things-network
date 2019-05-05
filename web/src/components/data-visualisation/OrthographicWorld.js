import React, { useRef, useState, useEffect, useCallback } from 'react'
import versor from 'versor'
import * as topoJSON from 'topojson-client'
import { drag } from 'd3-drag'
import { geoOrthographic, geoPath } from 'd3-geo'
import { mouse, select, event } from 'd3-selection'
import world from 'world-atlas/world/110m.json'
import schedule from 'raf-schd'
import { format } from 'd3-format'
import { zoom } from 'd3-zoom'

import TTNLogo from 'assets/ttn-logo.svg'
import variables from 'styles/variables'
import data from 'data/gateway-locations.json'
import { Root, LogoWrapper, Canvas } from './OrthographicWorld.style'

let projection = geoOrthographic()
let land = topoJSON.feature(world, world.objects.land)

function OrthographicWorld(props) {
  let { isVisible } = props

  let [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  let [isDragging, setIsDragging] = useState(false)
  let rootRef = useRef()
  let canvasRef = useRef()

  let renderCanvas = useCallback(() => {
    let { width, height } = dimensions
    let context = canvasRef.current.getContext('2d')
    let path = geoPath(projection, context)

    context.clearRect(0, 0, width, height)

    context.beginPath()
    path({ type: 'Sphere' })
    context.fillStyle = '#1F2033'
    context.fill()

    context.beginPath()
    path(land)
    context.fillStyle = '#292B44'
    context.fill()

    context.beginPath()
    path({ type: 'Sphere' })
    context.stroke()

    context.beginPath()
    path(data.geoJSON)
    context.fillStyle = variables.green
    context.fill()
  }, [dimensions])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', schedule(handleResize))

    return function onUnmount() {
      window.removeEventListener('resize', schedule(handleResize))
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let { width, height } = dimensions
    let context = canvasRef.current.getContext('2d')
    let initialScale = projection.scale()

    projection
      .fitExtent([[1, 1], [width / 1.5, height / 1.5]], { type: 'Sphere' })
      .translate([width / 2, height / 2])
      .precision(1)

    function dragging() {
      let v0, q0, r0

      function dragstarted() {
        setIsDragging(true)
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

    function zooming() {
      function onZoom() {
        projection.scale(initialScale * 1.5)
      }

      return zoom().on('zoom', onZoom)
    }

    select(context.canvas)
      .call(dragging().on('drag.render', renderCanvas))
      .call(renderCanvas)
      .node()
  }, [dimensions, renderCanvas])

  useEffect(() => {
    let rotateInterval
    let startTime = Date.now()

    function rotate() {
      projection.rotate([-1e-2 * (Date.now() - startTime), 0])
      renderCanvas()
    }

    if (isVisible && !isDragging) {
      rotateInterval = setInterval(schedule(rotate))
    }

    return function onUnmount() {
      clearInterval(rotateInterval)
    }
  }, [isVisible, renderCanvas, isDragging])

  function handleResize() {
    let { width, height } = rootRef.current.getBoundingClientRect()
    setDimensions({ width, height })
  }

  return (
    <Root ref={rootRef}>
      <Canvas
        width={dimensions.width}
        height={dimensions.height}
        ref={canvasRef}
      />
      <LogoWrapper>
        <TTNLogo />
        <p>
          <span>
            <span className="highlight">{format(',')(data.gatewayTotal)}</span>{' '}
            gateways placed by the people
          </span>
        </p>
      </LogoWrapper>
    </Root>
  )
}

export default OrthographicWorld
