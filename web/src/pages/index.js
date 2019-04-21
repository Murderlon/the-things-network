import React from 'react'

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
import HelmetMetaTags from 'components/MetaTags'

let index = () => (
  <>
    <HelmetMetaTags />
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
