import React from 'react'
import styled from 'styled-components'

import Quote from 'components/Quote'

import modularScale from '../styles/modular-scale'
import variables from '../styles/variables'

import Zero from '../assets/zero.svg'
import One from '../assets/one.svg'
import Two from '../assets/two.svg'
import Three from '../assets/three.svg'
import Four from '../assets/four.svg'

let Section = styled.section`
  margin-bottom: ${variables.spacing.enormous};
  grid-column: 1 / 7;
  @media screen and (min-width: 60rem) {
    grid-column: 2 / 8;
  }

  @media screen and (min-width: 90rem) {
    grid-column: 4 / 10;
  }
`

let List = styled.ol`
  font-family: ${variables.monoTypo};
  font-size: ${modularScale(1)};
  list-style: none;
  background: ${variables.secondaryBlue};
  margin: 0;
  padding: 0;

  a {
    display: flex;
    align-items: center;

    svg {
      color: ${variables.highlightBlue};
    }

    &:hover svg,
    &:focus svg {
      color: ${variables.green};
    }
  }

  svg {
    width: 0.7em;
    margin: ${variables.spacing.small};
  }

  @media screen and (min-width: 60rem) {
    font-size: ${modularScale(2)};
  }
`

let TableOfContents = () => {
  return (
    <>
      <Section>
        <List>
          <li>
            <a href="#introduction">
              <Zero /> Introduction
            </a>
          </li>
          <li>
            <a href="#protocols">
              <One />
              Protocols
            </a>
          </li>
          <li>
            <a href="#the-things-network">
              <Two />
              The Things Network
            </a>
          </li>
          <li>
            <a href="#how-it-works">
              <Three />
              How it works
            </a>
          </li>
          <li>
            <a href="#you-are-the-network">
              <Four />
              You are the network
            </a>
          </li>
        </List>
      </Section>
      <Quote />
    </>
  )
}

export default TableOfContents
