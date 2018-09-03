import React, { Component } from 'react'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl'
import Gateway from '../icons/gateway.svg'

const MapBox = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibXVyZGVybG9uIiwiYSI6ImNqamVhMnJ6bjQ4b2IzcXFnOHI5aWRucmQifQ.2hgQshmEmE2buT-Lqf3KgA'
})

class Map extends Component {
  render() {
    return (
      <MapBox
        // eslint-disable-next-line react/style-prop-object
        style="mapbox://styles/murderlon/cjl6bvgn50mzl2rp2v8p3ut35"
        center={[4.9, 52.378]}
        zoom={[13]}
        containerStyle={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '100%'
        }}
      >
        <Marker coordinates={[4.8927703, 52.366764]} anchor="center">
          <Gateway />
        </Marker>
      </MapBox>
    )
  }
}

export default Map
