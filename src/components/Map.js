import React, { Component, createRef } from 'react'
import { withTheme } from 'styled-components'
import MapboxGL from 'mapbox-gl'
import { select } from 'd3-selection'
import { geoPath, geoTransform } from 'd3-geo'
// import debounce from 'lodash.debounce'

import Device from '../icons/device.svg'
import Gateway from '../icons/gateway.svg'

MapboxGL.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const signal = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: [[4.8761694, 52.3683326], [4.8927703, 52.366764]]
      }
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: [[4.8761694, 52.3683326], [4.8927703, 52.366764]]
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
  }

  componentDidMount() {
    this.map = new MapboxGL.Map({
      container: this.mapRef.current,
      center: [4.888, 52.372],
      zoom: [13],
      style: process.env.REACT_APP_MAPBOX_STYLE_URL
    })

    this.map.on('load', () => {
      this.renderMarkers()
      this.renderSignal()
    })
  }

  componentWillUnmount() {
    this.map.remove()
  }

  renderMarkers = () => {
    new MapboxGL.Marker(this.deviceRef.current, { anchor: 'center' })
      .setLngLat([4.8761694, 52.3683326])
      .addTo(this.map)

    new MapboxGL.Marker(this.gatewayRef.current, { anchor: 'center' })
      .setLngLat([4.8927703, 52.366764])
      .addTo(this.map)
  }

  renderSignal = () => {
    const container = this.map.getCanvasContainer()
    const svg = select(container)
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

    const line = svg
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

    update()
  }

  render() {
    const style = {
      width: '100vw',
      height: '100vh',
      position: 'relative'
    }

    return (
      <div style={style} ref={this.mapRef}>
        <div ref={this.deviceRef}>
          <Device />
        </div>
        <div ref={this.gatewayRef}>
          <Gateway />
        </div>
      </div>
    )
  }
}
export default withTheme(Map)
