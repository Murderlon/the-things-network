import React from 'react'
import Helmet from 'react-helmet'

import Introduction from 'chapters/Introduction/Introduction'
import Protocols from 'chapters/Protocols/Protocols'
import TheThingsNetwork from 'chapters/TheThingsNetwork/TheThingsNetwork'
import HowItWorks from 'chapters/HowItWorks/HowItWorks'
import YouAreTheNetwork from 'chapters/YouAreTheNetwork/YouAreTheNetwork'

import GlobalStyle from 'components/GlobalStyle'
import Header from 'components/Header'
import Layout from 'components/Layout'
import TableOfContents from 'components/TableOfContents'
import Quote from 'components/Quote'

import Logo from 'assets/ttn-stacked.svg'

let index = () => (
  <>
    <Helmet>
      {/* eslint-disable-next-line max-len */}
      <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,Intl.~locale.en,Array.prototype.find,Array.prototype.findIndex,Array.prototype.includes,IntersectionObserver,Object.values,Number.parseFloat" />
    </Helmet>
    <GlobalStyle />
    <Layout.RootGrid>
      <Header>
        <h1>
          <Logo />
        </h1>
        <p>
          An interactive experience. Learn about{' '}
          <span className="highlight">LoRaWAN</span>, a new protocol for the
          Internet of Things and how{' '}
          <span className="highlight">The Things Network</span>, a
          community-powered and distributed network,{' '}
          <span className="highlight">can help you leverage it.</span>
        </p>
      </Header>
      <TableOfContents />
      <Introduction />
      <Protocols />
      <Quote />
      <TheThingsNetwork />
      <HowItWorks />
      <YouAreTheNetwork />
    </Layout.RootGrid>
  </>
)

export default index
