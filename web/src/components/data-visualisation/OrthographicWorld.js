import React, { useRef, useState, useEffect, useCallback } from 'react'
import versor from 'versor'
import * as topoJSON from 'topojson-client'
import { drag } from 'd3-drag'
import { geoOrthographic, geoPath, geoInterpolate, geoCentroid } from 'd3-geo'
import { mouse, select } from 'd3-selection'
import world from 'world-atlas/world/110m.json'
import schedule from 'raf-schd'
import { format } from 'd3-format'
import { transition } from 'd3-transition'
import { interpolate } from 'd3-interpolate'
import { useSpring } from 'react-spring'

import TTNLogo from 'assets/ttn-logo.svg'
import variables from 'styles/variables'
import data from 'data/gateway-locations.json'
import usePrevious from 'hooks/usePrevious'

import POCGateways from '../../geoJSON/poc-gateways.json'

import { Root, LogoWrapper, Canvas } from './OrthographicWorld.style'

let useMedia
if (typeof window !== 'undefined') {
  useMedia = require('hooks/useMedia')
}

let projection = geoOrthographic().scale(2300)
let land = topoJSON.feature(world, world.objects.countries)
let focusPoints = [
  {
    type: 'Point',
    coordinates: [4.88969, 52.37403],
    location: 'Amsterdam'
  },
  {
    type: 'Point',
    coordinates: [-41.773632, 35.276114],
    location: 'Random ocean spot'
  }
]

function OrthographicWorld(props) {
  let { currentStep } = props

  let [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  let [isDragging, setIsDragging] = useState(false)
  let rootRef = useRef()
  let canvasRef = useRef()
  let previousStep = usePrevious(currentStep)
  let isLargeScreen = useMedia && useMedia('(min-width: 60rem)')
  let animatedStyles = useSpring({
    to: {
      opacity: currentStep === 3 ? 1 : 0,
      transform: currentStep === 3 ? 'scale(1.0)' : 'scale(1.2)'
    },
    from: {
      opacity: currentStep === 3 ? 0 : 1,
      transform: currentStep === 3 ? 'scale(1.2)' : 'scale(1.0)'
    },
    delay: previousStep === 2 ? 1400 : 0
  })

  let renderCanvas = useCallback(() => {
    let { width, height } = dimensions
    let context = canvasRef.current.getContext('2d')
    let path = geoPath(projection, context)

    context.clearRect(0, 0, width, height)
    context.save()

    context.beginPath()
    path({ type: 'Sphere' })
    context.shadowColor = variables.green
    context.shadowBlur = 10
    context.stroke()

    context.restore()

    context.beginPath()
    path({ type: 'Sphere' })
    context.fillStyle = variables.secondaryBlue
    context.stroke()
    context.fill()

    context.beginPath()
    path(land)
    context.fillStyle = variables.primaryBlue
    context.strokeStyle = variables.secondaryBlue
    context.fill()
    context.stroke()
  }, [dimensions])

  let renderAllGateways = useCallback(path => {
    let context = canvasRef.current.getContext('2d')

    context.save()

    context.beginPath()
    path(data.geoJSON)
    context.fillStyle = variables.green
    context.shadowColor = variables.green
    context.shadowBlur = 2
    context.fill()

    context.restore()
  }, [])

  let renderFirstGateways = useCallback(animateIn => {
    let context = canvasRef.current.getContext('2d')
    let r = interpolate(animateIn ? 0 : 6, animateIn ? 6 : 0)

    transition()
      .duration(1000)
      .tween('pointRadius', tween)

    function tween() {
      return function(t) {
        let path = geoPath(projection, context).pointRadius([r(t)])

        context.save()

        context.beginPath()
        path(POCGateways)
        context.fillStyle = variables.green
        context.shadowColor = variables.green
        context.shadowBlur = 10
        context.fill()

        context.restore()
      }
    }
  }, [])

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
    let [long, lat] = geoCentroid(focusPoints[0])
    let path = geoPath(projection, context)
    let canvas = select(context.canvas)

    projection
      .fitExtent([[1, 1], [width / 1.2, height / 1.2]], { type: 'Sphere' })
      .translate([width / 2, height / 2])
      .precision(1)
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

    canvas.call(renderCanvas).node()

    if (isLargeScreen) {
      canvas.call(
        dragging().on('drag.render', () => {
          renderCanvas()
          renderAllGateways(path)
        })
      )
    }
  }, [dimensions, renderCanvas, renderAllGateways, isLargeScreen])

  useEffect(() => {
    if (currentStep === 1 && previousStep === 0) {
      renderFirstGateways(true)
    }

    if (currentStep === 0 && previousStep === 1) {
      renderFirstGateways(false)
    }
  }, [currentStep, previousStep, renderFirstGateways])

  useEffect(() => {
    function tween() {
      let animateIn = previousStep < currentStep
      let initialScale = animateIn ? 2300 : 460
      let nextScale = animateIn ? 460 : 2300
      let [long, lat] = geoCentroid(focusPoints[animateIn ? 1 : 0])
      let s = interpolate(initialScale, nextScale)
      let r = geoInterpolate(projection.rotate(), [-long, -lat])
      let p = interpolate(animateIn ? 0 : 4, animateIn ? 4 : 0)
      let context = canvasRef.current.getContext('2d')

      return function(t) {
        let path = geoPath(projection, context).pointRadius([p(t)])

        projection.rotate(r(t)).scale(s(t))
        renderCanvas()
        if (currentStep > 0) {
          renderAllGateways(path)
        }
      }
    }

    if (
      (currentStep === 3 && previousStep !== 3) ||
      (currentStep === 2 && previousStep === 3)
    ) {
      transition()
        .duration(2000)
        .tween('scale', tween)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep, renderCanvas, renderAllGateways])

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
      <LogoWrapper style={animatedStyles}>
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
