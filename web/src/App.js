import React, { Component } from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import { Router, Redirect } from '@reach/router'

import HowItWorks from './pages/HowItWorks'
import PageWrapper from './components/PageWrapper'

import colors from './styles/themes/colors'
import variables from './styles/themes/variables'
import base from './styles/global/base'
import typography from './styles/global/typography'

injectGlobal`
  ${base}
  ${typography}
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={{ ...colors, ...variables }}>
        <Router>
          <PageWrapper path="/">
            <Redirect noThrow from="/" to="how-it-works/device" />
            <Redirect noThrow from="how-it-works" to="how-it-works/device" />
            <HowItWorks path="how-it-works/:step" />
          </PageWrapper>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
