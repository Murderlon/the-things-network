import React from 'react'
import styled from 'styled-components'

import Layout from 'components/Layout'
import Link from 'components/Link'

import CFLogo from 'assets/cf-logo.svg'
import TTNLogo from 'assets/ttn-footer.svg'
import coverage from 'assets/coverage.svg'
import cloud from 'assets/cloud.svg'
import wench from 'assets/wench.svg'

import {
  Background,
  H2,
  BlockLeft,
  BlockRight,
  BlockCenter,
  Footer
} from './YouAreTheNetwork.style.js'

let Icon = styled(wench)`
  height: 6em;
  width: auto;
`

let Coverage = styled(coverage)`
  height: 6em;
  width: auto;
`

export default () => (
  <Background>
    <Layout.ParentGrid>
      <Layout.SubGrid fullWidth>
        <H2>You are the network</H2>
        <p>
          We believe in enabling businesses and applications to{' '}
          <span className="highlight">flourish to their potential</span>, by
          creating abundant connectivity. We enable this through a{' '}
          <span className="highlight"> open and distributed network</span> with
          low battery usage, long range, and low bandwidth.
        </p>
      </Layout.SubGrid>
    </Layout.ParentGrid>
    <Layout.ParentGrid as="section">
      <BlockLeft>
        <Coverage />
        <h4>Provide up to 10km of abundant connectivity yourself.</h4>
        <p>
          Small, easy to install router between the LoRa-enabeled things and the
          internet. Help build a global Internet of Things Network!
        </p>
        {/* eslint-disable-next-line max-len */}
        <Link to="https://www.thethingsnetwork.org/marketplace/product/the-things-gateway">
          get the things gateway
        </Link>
      </BlockLeft>
      <BlockCenter>
        <Icon />
        <h4>Build your proof of concept in a day.</h4>
        <p>The fastest way to get started with LoRaWAN. </p>
        {/* eslint-disable-next-line max-len */}
        <Link to="https://www.thethingsnetwork.org/marketplace/product/the-things-uno">
          get the things uno
        </Link>
        {/* eslint-disable-next-line max-len */}
        <Link to="https://www.thethingsnetwork.org/docs/devices/uno/quick-start.html">
          quick start
        </Link>
      </BlockCenter>
      <BlockRight>
        <Icon as={cloud} />
        <h4>Spread the word, share the knowledge.</h4>
        <p>
          The Things Network has a strong close knit communities present around
          the world who partake in meetups and network expansion together.
        </p>
        <Link to="https://www.thethingsnetwork.org/community">
          start or join a community
        </Link>
      </BlockRight>
    </Layout.ParentGrid>

    <Footer as="footer">
      <BlockLeft as="p">
        In collaboration with:
        <span>
          <a href="http://cleverfranke.com/">
            <CFLogo />
          </a>
        </span>
      </BlockLeft>

      <BlockCenter as="p">
        Story and data from:
        <span>
          <a href="http://thethingsnetwork.org/">
            <TTNLogo />
          </a>
        </span>
      </BlockCenter>

      <BlockRight as="p">
        <a href="https://github.com/Murderlon/the-things-network">
          CMD graduation project by Merlijn Vos (@Murderlon)
        </a>
      </BlockRight>
    </Footer>
  </Background>
)
