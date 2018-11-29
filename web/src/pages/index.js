import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Introduction from '../chapters/Introduction'

import Header from '../components/Header'
import Layout from '../components/Layout'
import TableOfContents from '../components/TableOfContents'

import fonts from '../styles/global/fonts'
import base from '../styles/global/base'
import typography from '../styles/global/typography'

import TheThingsNetwork from '../assets/ttn.svg'

let GlobalStyle = createGlobalStyle`
  ${fonts};
  ${base};
  ${typography};
`

const index = () => (
  <>
    <GlobalStyle />
    <Layout.ParentGrid>
      <Header>
        <h1>
          <TheThingsNetwork />
        </h1>
        <p>
          The story of a free and open Internet of Things network, powered by a
          new technology, and created by the people.
        </p>
      </Header>
      <TableOfContents />
      <Introduction />
    </Layout.ParentGrid>
  </>
)

export default index
