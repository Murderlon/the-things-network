import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { Router } from '@reach/router'

import colors from './styles/themes/colors'
import variables from './styles/themes/variables'

import Map from './components/Map'

let Home = () => <Map />

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ ...colors, ...variables }}>
        <Router>
          <Home path="/" />
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
