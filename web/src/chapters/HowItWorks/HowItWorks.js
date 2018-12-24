import React, { Component } from 'react'
import { Link } from 'gatsby'

import Layout from 'components/Layout'

import { H2 } from './HowItWorks.style'

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
      </Layout.ParentGrid>
    )
  }
}
