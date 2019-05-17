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
import usePrevious from 'hooks/usePrevious'

import { Root, LogoWrapper, Canvas } from './OrthographicWorld.style'

let projection = geoOrthographic()
let land = topoJSON.feature(world, world.objects.countries)
let points = [
  {
    type: 'Point',
    coordinates: [4.88969, 52.37403],
    location: 'Amsterdam '
  },
  {
    type: 'Point',
    coordinates: [34.8887969, 32.4406351],
    location: 'Caribe Royale Orlando'
  }
]

function OrthographicWorld(props) {
  let { currentStep } = props

  let [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  let [isDragging, setIsDragging] = useState(false)
  let rootRef = useRef()
  let canvasRef = useRef()
  let previousStep = usePrevious(currentStep)

  let renderCanvas = useCallback(() => {
    let { width, height } = dimensions
    let context = canvasRef.current.getContext('2d')
    let path = geoPath(projection, context)

    context.clearRect(0, 0, width, height)

    context.beginPath()
    path({ type: 'Sphere' })
    context.fillStyle = variables.secondaryBlue
    context.fill()

    context.beginPath()
    path(land)
    context.fillStyle = variables.primaryBlue
    context.strokeStyle = variables.secondaryBlue
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
    let [long, lat] = geoCentroid(points[0])

    projection
      .fitExtent([[1, 1], [width / 1.2, height / 1.2]], { type: 'Sphere' })
      .translate([width / 2, height / 2])
      .precision(1)
      .scale(2300)
      .rotate([-long, -lat])

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
    function tween() {
      let animateIn = previousStep < currentStep
      let initialScale = projection.scale()
      let nextScale = animateIn ? initialScale / 5 : initialScale * 5
      let [long, lat] = geoCentroid(points[animateIn ? 1 : 0])
      let s = interpolate(initialScale, nextScale)
      let r = geoInterpolate(projection.rotate(), [-long, -lat])

      return function(t) {
        projection.rotate(r(t)).scale(s(t))
        renderCanvas()
      }
    }

    if (currentStep === 3 || (currentStep === 2 && previousStep === 3)) {
      transition()
        .duration(2000)
        .tween('scale', tween)
    }
  }, [currentStep, renderCanvas])

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
