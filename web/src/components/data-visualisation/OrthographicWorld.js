import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import versor from 'versor'
import * as topoJSON from 'topojson-client'
import { drag } from 'd3-drag'
import { geoOrthographic, geoPath } from 'd3-geo'
import { mouse, select } from 'd3-selection'
import world from 'world-atlas/world/110m.json'
import schedule from 'raf-schd'
import { Spring } from 'react-spring'
import { format } from 'd3-format'

import TTNLogo from 'assets/ttn-logo.svg'
import variables from 'styles/variables'

import data from 'data/gateway-locations.json'

let Root = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: block;
  top: 0;
  z-index: 1;
  pointer-events: ${({ currentStep }) =>
    currentStep < 3 ? 'none' : 'initial'};
`

let LogoWrapper = styled.div`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 30%;
  max-width: 15rem;
  height: 30%;
  max-height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;

  svg {
    width: 100%;
  }

  p {
    font-family: ${variables.monoTypo};
    text-align: center;
    margin-bottom: 0;

    span {
      background: ${variables.secondaryBlue};
      padding: 3px 0;
    }
  }
`

let Canvas = styled.canvas`
  display: inline-block;
  margin: 0 auto;
  cursor: move;
`

export default class OrthographicWorld extends Component {
  projection = geoOrthographic()
  sphere = { type: 'Sphere' }
  land = topoJSON.feature(world, world.objects.land)
  canvasRef = createRef()
  rootRef = createRef()
  state = {
    width: 0,
    height: 0,
    isDragging: false,
    isRendered: false
  }

  componentDidMount() {
    this.handleResize()

    window.addEventListener('resize', this.handleResize)
  }

  shouldComponentUpdate(nextProps, nextState) {
    let { isInsideContainer, currentStep } = this.props
    let { isDragging } = this.state

    if (
      !isInsideContainer &&
      currentStep === 3 &&
      nextProps.isInsideContainer
    ) {
      return false
    }

    if (
      isInsideContainer &&
      currentStep === 3 &&
      isDragging &&
      !nextState.isDragging
    ) {
      return false
    }

    return true
  }

  componentDidUpdate(prevProps, prevState) {
    let { isDragging, width, height } = this.state
    let { currentStep, isInsideContainer } = this.props
    let isVisible = currentStep === 3 && isInsideContainer

    if ((this.rotateInterval && !isVisible) || isDragging) {
      this.rotateInterval = null
      clearInterval(this.rotateInterval)
    }

    if (
      isVisible &&
      !isDragging &&
      width === prevState.width &&
      height === prevState.height &&
      currentStep !== prevProps.currentStep
    ) {
      this.start = Date.now()
      this.revealCanvas()
    }

    if (
      isVisible &&
      !isDragging &&
      currentStep === prevProps.currentStep &&
      (width !== prevState.width || height !== prevState.height)
    ) {
      this.projection
        .fitExtent([[1, 1], [width / 1.5, height / 1.5]], this.sphere)
        .translate([width / 2, height / 2])
        .precision(1)

      this.renderCanvas()
    }

    if (currentStep === 2 && currentStep !== prevProps.currentStep) {
      this.clearCanvas()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    clearInterval(this.scaleInterval)
    clearInterval(this.rotateInterval)
    this.scaleInterval = null
    this.rotateInterval = null
  }

  handleResize = schedule(() => {
    if (this.rootRef.current) {
      let { width, height } = this.rootRef.current.getBoundingClientRect()
      this.setState({ width, height })
    }
  })

  revealCanvas = () => {
    let scale = 3
    let { width, height } = this.state
    let context = this.canvasRef.current.getContext('2d')
    this.projection
      .fitExtent([[1, 1], [width / 1.5, height / 1.5]], this.sphere)
      .translate([0, 0])
      .precision(1)

    this.scaleInterval = setInterval(
      schedule(() => {
        if (scale >= 1) {
          scale -= 0.05
          this.projection.rotate([-1e-2 * (Date.now() - this.start), 0])
          context.clearRect(0, 0, width, height)
          context.save()
          context.translate(width / 2, height / 2)

          context.save()
          context.scale(scale, scale)
          this.renderCanvas()
          context.restore()

          context.save()
          context.scale(scale, scale)
          context.restore()
          context.restore()
          return
        }
        clearInterval(this.scaleInterval)
        this.scaleInterval = null
        this.projection
          .fitExtent([[1, 1], [width / 1.5, height / 1.5]], this.sphere)
          .translate([width / 2, height / 2])
          .precision(1)
        this.rotateInterval = setInterval(
          schedule(() => {
            if (this.rotateInterval) {
              return this.rotate()
            }
          })
        )
        select(context.canvas).call(
          this.dragging().on('drag.render', this.renderCanvas)
        )
      }).bind(this)
    )
  }

  clearCanvas = () => {
    let context = this.canvasRef.current.getContext('2d')
    context.clearRect(0, 0, this.state.width, this.state.height)
  }

  renderCanvas = () => {
    if (!this.canvasRef.current) return
    let { width, height } = this.state
    let context = this.canvasRef.current.getContext('2d')

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
    path(data.geoJSON)
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
      let v1 = versor.cartesian(projection.rotate(r0).invert(mouse(this)))
      let q1 = versor.multiply(q0, versor.delta(v0, v1))
      projection.rotate(versor.rotation(q1))
    }

    function dragended() {
      self.setState({ isDragging: false })
    }

    return drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended)
  }

  render() {
    let { width, height } = this.state
    let { currentStep } = this.props
    let isVisible = currentStep === 3

    return (
      <Root ref={this.rootRef} currentStep={currentStep}>
        <Canvas width={width} height={height} ref={this.canvasRef} />
        <Spring
          immediate={!isVisible}
          delay={1000}
          from={{
            opacity: isVisible ? 0 : 1,
            transform: isVisible ? 'scale(1.2)' : 'scale(1)'
          }}
          to={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(1.2)'
          }}
        >
          {props => (
            <LogoWrapper style={props}>
              <TTNLogo />
              <p>
                <span>
                  <span className="highlight">
                    {format(',')(data.gatewayTotal)}
                  </span>{' '}
                  gateways placed by the people
                </span>
              </p>
            </LogoWrapper>
          )}
        </Spring>
      </Root>
    )
  }
}
