import React, { Component } from 'react'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl'
import styled, { css } from 'styled-components'

import Gateway from '../icons/gateway.svg'
import Device from '../icons/device.svg'

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
  accessToken:
    'pk.eyJ1IjoibXVyZGVybG9uIiwiYSI6ImNqamVhMnJ6bjQ4b2IzcXFnOHI5aWRucmQifQ.2hgQshmEmE2buT-Lqf3KgA'
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
        style="mapbox://styles/murderlon/cjl6bvgn50mzl2rp2v8p3ut35"
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
      </MapBox>
    )
  }
}

export default Map
