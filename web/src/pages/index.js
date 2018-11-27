import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import TableOfContents from '../components/TableOfContents'
import modularScale from '../styles/modular-scale'
import Section from '../components/Section'

import variables from '../styles/variables'
import TheThingsNetwork from '../assets/ttn.svg'
import Zero from '../assets/zero.svg'

const Header = styled.header`
  margin: ${variables.spacing.huge} 0;
  grid-column: 2 / 6;
  align-items: flex-end;

  h1 {
    font-size: 1em;
  }

  svg {
    display: inline-block;
    width: 100%;
    height: inherit;
  }

  @media screen and (min-width: 45rem) {
    grid-column: 2 / 12;
    display: grid;
    grid-template-columns: repeat(10, 1fr);

    h1 {
      grid-column: 1 / 7;
    }
    p {
      margin: 0;
      grid-column: 8 / 11;
      font-size: ${modularScale(2)};
    }
  }
`

const IndexPage = () => (
  <Layout>
    <Header>
      <h1>
        <TheThingsNetwork />
      </h1>
      <p>
        The story of a free and open Internet of Things network, powered by a new technology, and
        created by the people.
      </p>
    </Header>
    <TableOfContents />
    <section>
      <h2><Zero/> Introduction</h2>
      <h3>
        Internet of Things is transforming the everyday physical objects that surround us into an
        ecosystem of information that will enrich our lives.{' '}
      </h3>
    </section>
    <Section />
  </Layout>
)

export default IndexPage
