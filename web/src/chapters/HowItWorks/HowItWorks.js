import React, { Component } from 'react'

import Layout from 'components/Layout'

import Device from './steps/device/device'
import Gateway from './steps/gateway/gateway'
import TheThingsNetwork from './steps/the-things-network/the-things-network'
import Application from './steps/application/application'

import { H2 } from './HowItWorks.style'

export default class HowItWorks extends Component {
  render() {
    return (
      <Layout.ParentGrid as="section">
        <Layout.SubGrid fullWidth>
          <H2 id="how-it-works">How it works</H2>
        </Layout.SubGrid>
        <Device />
        <Gateway />
        <TheThingsNetwork />
        <Application />
      </Layout.ParentGrid>
    )
  }
}
