import React, { Component, Fragment, createRef } from 'react'
import { withTheme } from 'styled-components'
import MapboxGL from 'mapbox-gl'
import { select } from 'd3-selection'
import { geoPath, geoTransform } from 'd3-geo'
// import debounce from 'lodash.debounce'

import Device from '../icons/device.svg'
import Gateway from '../icons/gateway.svg'
import TTN from '../icons/ttn.svg'

MapboxGL.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const signal = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: [[4.8761694, 52.3683326], [4.8927703, 52.3667641]]
      }
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: [[4.8761694, 52.3683326], [4.8927703, 52.3667641]]
      }
    }
  ]
}

class Map extends Component {
  constructor(props) {
    super(props)
    this.mapRef = createRef()
    this.deviceRef = createRef()
    this.gatewayRef = createRef()
    this.TTNRef = createRef()
  }

  componentDidMount() {
    const { link } = this.props.currentStep
    this.map = new MapboxGL.Map({
      container: this.mapRef.current,
      style: process.env.REACT_APP_MAPBOX_STYLE_URL,
      center: link === 'the-things-network' ? [5.5, 53] : [4.888, 52.372],
      zoom: link === 'the-things-network' ? [6] : [13]
    })

    this.map.on('load', () => this.update())
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

  renderDevice = () => {
    if (this.gatewayMarker) {
      this.gatewayMarker.remove()
      this.svg.selectAll('path').remove()
    }
    this.deviceMarker = new MapboxGL.Marker(this.deviceRef.current, {
      anchor: 'center'
    })
      .setLngLat([4.8761694, 52.3683326])
      .addTo(this.map)
  }

  renderGateway = () => {
    if (this.TTNMarker) {
      this.TTNMarker.remove()
      this.map.flyTo({
        center: [4.888, 52.372],
        zoom: [13]
      })
    }
    this.gatewayMarker = new MapboxGL.Marker(this.gatewayRef.current, {
      anchor: 'center'
    })
      .setLngLat([4.8927703, 52.3667641])
      .addTo(this.map)

    const container = this.map.getCanvasContainer()
    this.svg = select(container)
      .append('svg')
      .style('position', 'absolute')
      .style('z-index', '0')
      .style('width', '100%')
      .style('height', '100%')

    const self = this.map
    const transform = geoTransform({
      point: function(lon, lat) {
        const point = self.project(new MapboxGL.LngLat(lon, lat))
        this.stream.point(point.x, point.y)
      }
    })
    const path = geoPath().projection(transform)

    const line = this.svg
      .selectAll('path')
      .data(signal.features)
      .enter()
      .append('path')
      .attr('d', geoPath().projection(transform))
      .attr('stroke', this.props.theme.green)
      .attr('stroke-width', 4)
      .attr('stroke-dasharray', (d, i) => (i > 0 ? null : [10, 14]))
      .attr('stroke-opacity', (d, i) => (i > 0 ? 0.2 : null))
      .attr('stroke-linecap', 'round')
      .attr('stroke-join', 'round')
      .classed('marching_ants_animation', (d, i) => i < 1)

    function update() {
      line.attr('d', path)
    }

    this.map.on('zoom', update)
    this.map.on('move', update)
  }

  renderTTN = () => {
    if (this.gatewayMarker) {
      this.svg.selectAll('path').remove()
    } else {
      this.gatewayMarker = new MapboxGL.Marker(this.gatewayRef.current, {
        anchor: 'center'
      })
        .setLngLat([4.8927703, 52.3667641])
        .addTo(this.map)
    }
    if (this.deviceMarker) {
      this.deviceMarker.remove()
    }
    this.map.flyTo({
      center: [5.5, 53],
      zoom: [6]
    })
    this.TTNMarker = new MapboxGL.Marker(this.TTNRef.current, {
      anchor: 'center'
    })
      .setLngLat([6.857646, 53.4240285])
      .addTo(this.map)
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
          <Device />
        </div>
        <div ref={this.gatewayRef}>
          <Gateway />
        </div>
        <div ref={this.TTNRef}>
          <TTN />
        </div>
      </Fragment>
    )
  }
}
export default withTheme(Map)
