import React from 'react'
import styled from 'styled-components'

import variables from '../styles/variables'

import Layout from '../components/layout'
import TableOfContents from '../components/TableOfContents'
import modularScale from '../styles/modular-scale'

const Header = styled.header`
  grid-column-start: 2;
  grid-column-end: 6;

  h1 {
    color: ${variables.backgroundBlue};
    text-shadow: -2px 0 ${variables.green}, 0 2px ${variables.green},
      2px 0 ${variables.green}, 0 -2px ${variables.green};
  }

  @media screen and (min-width: 40rem) {
    grid-column-start: 2;
    grid-column-end: 12;
    display: grid;
    grid-template-columns: repeat(10, 1fr);

    h1 {
      grid-column-start: 1;
      grid-column-end: 7;
      font-size: ${`calc(${modularScale(5)} + 5vw)`};
    }
    p {
      grid-column-start: 8;
      grid-column-end: 11;
      font-size: ${modularScale(2)};
    }
  }
`

const IndexPage = () => (
  <Layout>
    <Header>
      <h1>The Things Network</h1>
      <p>
        The story of a free and open Internet of Things network, powered by a
        new technology, and created by the people.
      </p>
    </Header>
    <section>
      <TableOfContents />
    </section>
    <section>
      <h2>0 Introduction</h2>
      <h3>
        Internet of Things is transforming the everyday physical objects that
        surround us into an ecosystem of information that will enrich our lives.{' '}
      </h3>
    </section>
  </Layout>
)

export default IndexPage
