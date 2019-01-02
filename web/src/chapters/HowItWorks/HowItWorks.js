import React, { Component } from 'react'

import Layout from 'components/Layout'
import TopicNavigation from 'components/TopicNavigation'

import { H2, Vision } from './HowItWorks.style'

export default class HowItWorks extends Component {
  render() {
    return (
      <Layout.ParentGrid as="section">
        <Layout.SubGrid fullWidth>
          <H2 id="how-it-works">How it works</H2>
          <h3>A closer look into the components that make up the network.</h3>
          <p>
            Sed elementum tempus egestas sed sed. Felis donec et odio
            pellentesque diam volutpat commodo. In fermentum et sollicitudin ac
            orci phasellus. Arcu odio ut sem nulla.{' '}
          </p>
          <TopicNavigation />
        </Layout.SubGrid>
        <Layout.SubGrid fullWidth>
          <Vision>
            <p>
              We believe in enabling businesses and applications to{' '}
              <span className="highlight">flourish to their potential</span>, by
              creating abundant connectivity.
            </p>
            <p>
              We enable this through a{' '}
              <span className="highlight">
                free, open, and distributed network
              </span>{' '}
              with low battery usage, long range, and low bandwidth.
            </p>
          </Vision>
        </Layout.SubGrid>
      </Layout.ParentGrid>
    )
  }
}
