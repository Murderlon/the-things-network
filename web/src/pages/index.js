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
import AnimatedGrid from 'components/AnimatedGrid'

let index = () => (
  <>
    <Helmet>
      {/* eslint-disable-next-line max-len */}
      <script src="https://cdn.polyfill.io/v2/polyfill.js?features=default,Intl.~locale.en,Array.prototype.find,Array.prototype.findIndex,Array.prototype.includes,IntersectionObserver,Object.values,Number.parseFloat" />
    </Helmet>
    <GlobalStyle />
    <Layout.RootGrid css={{ overflow: 'hidden', position: 'relative' }}>
      <AnimatedGrid />
      <Header />
    </Layout.RootGrid>
    <Layout.RootGrid>
      <TableOfContents />
      <Introduction />
      <Protocols />
      <TheThingsNetwork />
      <HowItWorks />
      <YouAreTheNetwork />
    </Layout.RootGrid>
  </>
)

export default index
