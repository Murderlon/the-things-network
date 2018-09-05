import React, { Component } from 'react'
import ReactMapboxGl, { Marker, Layer, GeoJSONLayer } from 'react-mapbox-gl'
import styled, { css, withTheme } from 'styled-components'

import Gateway from '../icons/gateway.svg'
import Device from '../icons/device.svg'

const skurt = {
  type: 'FeatureCollection',
  features: [
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

const createGeoJSONCircle = (center, radiusInKm, points = 64) => {
  const coords = { latitude: center[1], longitude: center[0] }
  let ret = []
  let distanceX =
    radiusInKm / (111.32 * Math.cos((coords.latitude * Math.PI) / 180))
  let distanceY = radiusInKm / 110.574
  let theta, x, y

  for (var i = 0; i < points; i++) {
    theta = (i / points) * (2 * Math.PI)
    x = distanceX * Math.cos(theta)
    y = distanceY * Math.sin(theta)

    ret.push([coords.longitude + x, coords.latitude + y])
  }
  ret.push(ret[0])

  return {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [ret]
        }
      }
    ]
  }
}
const coverage = css`
  opacity: 0.2;
  transition: transform 300ms;
  transition-timing-function: cubic-bezier(0.5, 0, 0.58, 1.66);
  transform: scale(50);
`

const GatewayCoverage = styled.div`
  position: absolute;
  z-index: -1;
  background: ${({ theme }) => `radial-gradient(${theme.green}, #7BA7FD)`};
  border-radius: 50%;
  width: 2em;
  height: 2em;
  top: 1.1em;
  left: 0.6em;
  opacity: 0;
  transition: all 200ms;
  transition-timing-function: ${({ theme }) => theme.timingFunction};
  ${({ showCoverage }) => showCoverage && coverage};
`

const MapBox = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN
})

class Map extends Component {
  state = {
    showCoverage: false
  }

  handleMarkerClick = () => {
    this.setState({ showCoverage: !this.state.showCoverage })
  }

  render() {
    return (
      <MapBox
        // eslint-disable-next-line react/style-prop-object
        style={process.env.REACT_APP_MAPBOX_STYLE_URL}
        center={[4.888, 52.372]}
        zoom={[13.5]}
        // maxBounds={[
        //   // Southwest coordinates
        //   [4.946478383254487, 52.29948930759633],
        //   // Northeast coordinates
        //   [4.815325463385619, 52.41871067473167]
        // ]}
        containerStyle={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '100%'
        }}
      >
        <Layer type="fill" />
        <Marker
          coordinates={[4.8927703, 52.366764]}
          anchor="center"
          onClick={this.handleMarkerClick}
        >
          <Gateway />
          <GatewayCoverage showCoverage={this.state.showCoverage} />
        </Marker>

        <Marker coordinates={[4.8761694, 52.3683326]} anchor="center">
          <Device />
        </Marker>

        <GeoJSONLayer
          data={createGeoJSONCircle([4.8927703, 52.366764], 2)}
          fillPaint={{
            'fill-color': '#3bb2d0',
            'fill-opacity': 0.2
          }}
        />

        <GeoJSONLayer
          data={skurt}
          lineLayout={{
            'line-cap': 'round'
          }}
          linePaint={{
            'line-width': 4,
            'line-dasharray': [0.2, 2],
            'line-color': this.props.theme.green
          }}
        />

        <GeoJSONLayer
          data={skurt}
          lineLayout={{
            'line-cap': 'round'
          }}
          linePaint={{
            'line-width': 4,
            'line-opacity': 0.2,
            'line-color': this.props.theme.green
          }}
        />
      </MapBox>
    )
  }
}

export default withTheme(Map)
