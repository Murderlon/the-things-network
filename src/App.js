import React, { Component } from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import { Router } from '@reach/router'

import HowItWorks from './pages/HowItWorks'
import Page from './components/Page'

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
          <Page path="/">
            <HowItWorks path="how-it-works" />
          </Page>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
