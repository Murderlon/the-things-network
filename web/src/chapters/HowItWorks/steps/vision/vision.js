import React from 'react'
import styled from 'styled-components'

import Layout from 'components/Layout'

import variables from 'styles/variables'
import modularScale from 'styles/modular-scale'

let Vision = styled.div`
  max-width: 30em;
  margin: ${modularScale(10)} auto;

  p {
    font-family: ${variables.monoTypo};
    font-size: ${modularScale(1)};
  }
`

export default () => (
  <Layout.SubGrid fullWidth>
    <Vision>
      <p>
        We believe in enabling businesses and applications to{' '}
        <span className="highlight">flourish to their potential</span>, by
        creating abundant connectivity.
      </p>
      <p>
        We enable this through a{' '}
        <span className="highlight"> open and distributed network</span> with
        low battery usage, long range, and low bandwidth.
      </p>
    </Vision>
  </Layout.SubGrid>
)
