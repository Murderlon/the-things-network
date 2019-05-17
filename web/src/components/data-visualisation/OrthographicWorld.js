import React, { useRef, useState, useEffect, useCallback } from 'react'
import versor from 'versor'
import * as topoJSON from 'topojson-client'
import { drag } from 'd3-drag'
import { geoOrthographic, geoPath, geoInterpolate, geoCentroid } from 'd3-geo'
import { mouse, select, event } from 'd3-selection'
import world from 'world-atlas/world/110m.json'
import schedule from 'raf-schd'
import { format } from 'd3-format'
import { zoom } from 'd3-zoom'
import { transition } from 'd3-transition'
import { interpolate } from 'd3-interpolate'

import TTNLogo from 'assets/ttn-logo.svg'
import variables from 'styles/variables'
import data from 'data/gateway-locations.json'
import { Root, LogoWrapper, Canvas } from './OrthographicWorld.style'

let projection = geoOrthographic()
let land = topoJSON.feature(world, world.objects.countries)
let colorGlobe = '#1F2033'
let colorLand = '#292B44'
let points = [
  {
    type: 'Point',
    coordinates: [4.88969, 52.37403],
    location: 'Amsterdam ',
    icon: '\uF015'
  },
  {
    type: 'Point',
    coordinates: [34.8887969, 32.4406351],
    location: 'Caribe Royale Orlando',
    icon: '\uF236'
  }
]

function focusGlobeOnPoint(point, scale) {
  let editablePoint = [point[0], point[1]]
  projection.rotate(point).scale(scale)
  editablePoint[1] += 10
}

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
    context.fillStyle = colorGlobe
    context.fill()

    context.beginPath()
    path(land)
    context.fillStyle = colorLand
    context.strokeStyle = colorGlobe
    context.fill()
    context.stroke()

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
    let p = geoCentroid(points[0])
    let r = geoInterpolate(projection.rotate(), [-p[0], -p[1]])
    let startEndScale = width * 2
    let middleScale = width / 3
    let s = interpolate(0.0000001, Math.PI)

    projection
      .fitExtent([[1, 1], [width / 1.2, height / 1.2]], { type: 'Sphere' })
      .translate([width / 2, height / 2])
      .precision(1)
      .rotate(r(0))
      .scale(
        (1 - Math.abs(Math.sin(s(0)))) * startEndScale +
          Math.abs(Math.sin(s(0))) * middleScale
      )

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

    select(context.canvas)
      .call(dragging().on('drag.render', renderCanvas))
      // .call(
      //   zoom()
      //     .on('zoom', () => {
      //       console.log(initialScale * event.transform.k)
      //       projection.scale(initialScale * event.transform.k)
      //       renderCanvas()
      //     })
      //     .on('end', () => {
      //       renderCanvas()
      //     })
      // )
      .call(renderCanvas)
      .node()
  }, [dimensions, renderCanvas])

  useEffect(() => {
    let { width } = dimensions

    function tween() {
      let p = geoCentroid(points[0])
      let r = geoInterpolate(projection.rotate(), [-p[0], -p[1]])
      let startEndScale = width * 2
      let middleScale = width / 3
      let s = interpolate(0.0000001, Math.PI)

      return function(t) {
        focusGlobeOnPoint(
          r(t),
          (1 - Math.abs(Math.sin(s(t)))) * startEndScale +
            Math.abs(Math.sin(s(t))) * middleScale
        )
        renderCanvas()
      }
    }

    if (isVisible) {
      transition()
        .duration(4000)
        .tween('rotate', tween)
    }
  }, [isVisible, dimensions, renderCanvas])

  // useEffect(() => {
  //   let rotateInterval
  //   let startTime = Date.now()

  //   function rotate() {
  //     projection.rotate([-1e-2 * (Date.now() - startTime), 0])
  //     renderCanvas()
  //   }

  //   if (isVisible && !isDragging) {
  //     rotateInterval = setInterval(schedule(rotate))
  //   }

  //   return function onUnmount() {
  //     clearInterval(rotateInterval)
  //   }
  // }, [isVisible, renderCanvas, isDragging])

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
      {/* <LogoWrapper>
        <TTNLogo />
        <p>
          <span>
            <span className="highlight">{format(',')(data.gatewayTotal)}</span>{' '}
            gateways placed by the people
          </span>
        </p>
      </LogoWrapper>*/}
    </Root>
  )
}

export default OrthographicWorld
