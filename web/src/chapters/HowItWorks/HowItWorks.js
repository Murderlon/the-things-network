import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from 'components/Layout'

import { H2, Vision } from './HowItWorks.style'

export default class HowItWorks extends Component {
  render() {
    return (
      <Layout.ParentGrid as="section">
        <Layout.SubGrid fullWidth>
          <H2>How it works</H2>
          <nav>
            <ul>
              <li>
                <Link to="/how-it-works/device">Device</Link>
              </li>
              <li>
                <Link to="/how-it-works/gateway">Gateway</Link>
              </li>
            </ul>
          </nav>
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
