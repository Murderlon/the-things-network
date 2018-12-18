import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'

import Introduction from '../chapters/Introduction'
import Protocols from '../chapters/Protocols'
import TheThingsNetwork from '../chapters/TheThingsNetwork'
import HowItWorks from '../chapters/HowItWorks/HowItWorks'

import Header from '../components/Header'
import Layout from '../components/Layout'
import TableOfContents from '../components/TableOfContents'
import Quote from '../components/Quote'

import fonts from '../styles/global/fonts'
import base from '../styles/global/base'
import typography from '../styles/global/typography'

import Logo from '../assets/ttn-stacked.svg'

let GlobalStyle = createGlobalStyle`
  ${fonts};
  ${base};
  ${typography};
`

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
          The story of a free and open Internet of Things network, powered by a
          new technology, and created by the people.
        </p>
      </Header>
      <TableOfContents />
      <Introduction />
      <Protocols />
      <Quote />
      <TheThingsNetwork />
      <HowItWorks />
    </Layout.RootGrid>
  </>
)

export default index
