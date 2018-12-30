import React from 'react'

import Layout from 'components/Layout'
import Link from 'components/Link'

import CFLogo from 'assets/cf.svg'
import TTNLogo from 'assets/ttn-footer.svg'

import {
  Background,
  H2,
  BlockLeft,
  BlockRight,
  BlockCenter,
  Footer
} from './YouAreTheNetwork.style.js'

export default () => (
  <Background>
    <Layout.ParentGrid>
      <Layout.SubGrid fullWidth>
        <H2>You are the network</H2>
      </Layout.SubGrid>
    </Layout.ParentGrid>
    <Layout.ParentGrid as="section">
      <BlockLeft>
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
        <h4>Spread the word, share the knowledge.</h4>
        <p>... </p>
        <Link to="https://www.thethingsnetwork.org/community">
          start or join a community
        </Link>
      </BlockRight>
    </Layout.ParentGrid>

    <Footer as="footer">
      <BlockLeft as="p">
        In collaboration with:
        <span>
          <CFLogo />
        </span>
        <span>
          <TTNLogo />
        </span>
      </BlockLeft>

      <BlockCenter as="p">
        CMD graduation project by Merlijn Vos (@Murderlon)
      </BlockCenter>

      <BlockRight as="p">© Merlijn Vos, all rights reserved</BlockRight>
    </Footer>
  </Background>
)
