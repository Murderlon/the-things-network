import React, { Component, Fragment, createRef } from 'react'
import styled, { css, withTheme, keyframes } from 'styled-components'
import MapboxGL from 'mapbox-gl'
import debounce from 'lodash.debounce'
import { select } from 'd3-selection'
import { geoPath, geoTransform, geoCircle } from 'd3-geo'
import { interpolatePath } from 'd3-interpolate-path'
import { easeCubicInOut } from 'd3-ease'
import 'd3-transition'

import * as createGeoJSON from '../lib/createGeoJSON'
import marchingAnts from '../lib/marchingAnts'

import Device from '../icons/device.svg'
import Gateway from '../icons/gateway.svg'
import TTN from '../icons/ttn.svg'

MapboxGL.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

// const Device = styled.div`
//   width: 3em;
//   height: 3em;
//   border-radius: 50%;
//   background: white;
// `

const pulse = keyframes`
  to {
    box-shadow: 0 0 0 45px rgba(120, 254, 224, 0);
  }
`

const active = css`
  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 0.1em;
    height: 0.1em;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    box-shadow: 0 0 0 0 rgba(120, 254, 224, 0.7);
    border-radius: 50%;
    animation: ${pulse} 3s infinite cubic-bezier(0.66, 0, 0, 1);
  }
`

const MarkerButton = styled.button`
  padding: 0;
  position: relative;
  cursor: help;

  span {
    position: absolute;
    top: 3em;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 1.2em;
    font-weight: 500;
    font-family: ${({ theme }) => theme.mainTypo};
    color: ${({ color = 'white' }) => color};
  }

  div {
    position: relative;
    width: 3.3em;
    height: 3.3em;
  }
`

class Map extends Component {
  constructor(props) {
    super(props)
    this.mapRef = createRef()
    this.deviceRef = createRef()
    this.gatewayRef = createRef()
    this.TTNRef = createRef()

    this.deviceCoords = [4.8761694, 52.3683326]
    this.gatewayCoords = [4.8927703, 52.3667641]
    this.TTNCoords = [6.857646, 53.4240285]

    this.state = { showGatewayContext: false }
  }

  componentDidMount() {
    const { link } = this.props.currentStep
    this.map = new MapboxGL.Map({
      container: this.mapRef.current,
      style: process.env.REACT_APP_MAPBOX_STYLE_URL,
      center: link === 'the-things-network' ? [6, 53] : [4.888, 52.372],
      zoom: link === 'the-things-network' ? [6.5] : [13],
      interactive: true
    })

    this.map.on('load', () => {
      const container = this.map.getCanvasContainer()
      this.svg = select(container)
        .append('svg')
        .style('position', 'absolute')
        .style('z-index', '0')
        .style('width', '100%')
        .style('height', '100%')

      const self = this.map
      this.transform = geoTransform({
        point: function(lon, lat) {
          const { x, y } = self.project(new MapboxGL.LngLat(lon, lat))
          this.stream.point(x, y)
        }
      })
      this.marchingAnts = marchingAnts({
        map: this.map,
        svg: this.svg,
        transform: this.transform
      })
      this.update()
    })
  }

  componentDidUpdate() {
    this.update()
  }

  componentWillUnmount() {
    this.map.remove()
  }

  update = () => {
    switch (this.props.currentStep.link) {
      case 'device':
        this.renderDevice()
        break
      case 'gateway':
        this.renderDevice()
        this.renderGateway()
        break
      case 'the-things-network':
        this.renderTTN()
        break
      case 'application':
        this.renderApplication()
        break
      default:
        this.renderDevice()
        break
    }
  }

  toggleGateway = () => {
    const { showGatewayContext } = this.state
    const { deviceCoords, gatewayCoords, svg, map, transform } = this
    const path = geoPath().projection(transform)
    const circumference = 6371000 * Math.PI * 2

    const prevPathString = geoCircle()
      .center(gatewayCoords)
      .radius((10 / circumference) * 360)

    const pathString = geoCircle()
      .center(gatewayCoords)
      .radius((2000 / circumference) * 360)

    this.setState({ showGatewayContext: !showGatewayContext })

    if (showGatewayContext) {
      this.marchingAnts({
        data: createGeoJSON.Line({
          from: deviceCoords,
          to: gatewayCoords
        }),
        color: this.props.theme.green
      })

      svg
        .append('path')
        .classed('coverage', true)
        .transition()
        .duration(300)
        .ease(easeCubicInOut)
        .attr('fill', '#3bb2d0')
        .attr('fill-opacity', 0.2)
        .attrTween('d', () =>
          interpolatePath(path(prevPathString()), path(pathString()))
        )

      function update() {
        svg.selectAll('path.coverage').attr('d', path(pathString()))
      }

      map.on('zoom', debounce(update, 10))
      map.on('move', debounce(update, 10))
    } else {
      svg
        .selectAll('path.coverage')
        .transition()
        .duration(300)
        .ease(easeCubicInOut)
        .attrTween('d', () =>
          interpolatePath(path(pathString()), path(prevPathString()))
        )
        .delay(300)
        .remove()

      svg.selectAll('path.ants').remove()
    }
  }

  renderMarker = (ref, coords) => {
    return new MapboxGL.Marker(ref.current, { anchor: 'center' })
      .setLngLat(coords)
      .addTo(this.map)
  }

  renderDevice = () => {
    const { gatewayMarker, svg, deviceRef, deviceCoords } = this

    if (gatewayMarker && this.props.currentStep.link !== 'gateway') {
      gatewayMarker.remove()
      svg.selectAll('path').remove()
    }

    this.deviceMarker = this.renderMarker(deviceRef, deviceCoords)
  }

  renderGateway = () => {
    const { TTNMarker, svg, map, gatewayRef, gatewayCoords } = this

    if (TTNMarker) {
      TTNMarker.remove()
      svg.selectAll('path').remove()
      map.flyTo({
        center: [4.888, 52.372],
        zoom: [13]
      })
    }

    this.gatewayMarker = this.renderMarker(gatewayRef, gatewayCoords)
  }

  renderTTN = () => {
    let {
      deviceMarker,
      gatewayMarker,
      svg,
      gatewayRef,
      gatewayCoords,
      map,
      TTNRef,
      TTNCoords
    } = this

    deviceMarker && deviceMarker.remove()
    gatewayMarker
      ? svg.selectAll('path').remove()
      : (gatewayMarker = this.renderMarker(gatewayRef, gatewayCoords))

    map.flyTo({
      center: [6, 53],
      zoom: [6.5]
    })

    this.TTNMarker = this.renderMarker(TTNRef, TTNCoords)

    this.marchingAnts({
      data: createGeoJSON.Line({
        from: gatewayCoords,
        to: TTNCoords
      }),
      color: this.props.theme.red
    })

    map.fitBounds([gatewayMarker.getLngLat(), this.TTNMarker.getLngLat()], {
      padding: { top: 200, bottom: 50, left: 50, right: 50 }
    })
  }

  render() {
    return (
      <Fragment>
        <div
          style={{
            width: '100vw',
            height: '100vh',
            position: 'relative'
          }}
          ref={this.mapRef}
        />
        <div ref={this.deviceRef}>
          <MarkerButton>
            <div>
              <Device />
            </div>
            <span>Device</span>
          </MarkerButton>
        </div>
        <div ref={this.gatewayRef}>
          <MarkerButton
            color={this.props.theme.green}
            onClick={this.toggleGateway}
          >
            <div>
              <Gateway />
            </div>
            <span>Gateway</span>
          </MarkerButton>
        </div>
        <div ref={this.TTNRef}>
          <MarkerButton>
            <TTN />
            <span>The Things Network</span>
          </MarkerButton>
        </div>
      </Fragment>
    )
  }
}
export default withTheme(Map)
