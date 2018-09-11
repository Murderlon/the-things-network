import React, { Component } from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import { Router } from '@reach/router'

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
            <HowItWorks default path="how-it-works" />
          </PageWrapper>
        </Router>
      </ThemeProvider>
    )
  }
}

export default App
