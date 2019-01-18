import React, { Component } from 'react'
import styled from 'styled-components'
import modularScale from '../styles/modular-scale'

import Logo from 'assets/ttn-stacked.svg'

let Header = styled.header`
  height: 100vh;
  grid-column: 2 / 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1em;
  }

  p {
    font-size: ${modularScale(1)};
  }

  svg {
    display: inline-block;
    width: 100%;
    height: inherit;
  }

  @media screen and (min-width: 60rem) {
    grid-column: 2 / 12;
    display: grid;
    grid-template-columns: repeat(10, 1fr);

    h1 {
      grid-column: 1 / 7;

      div {
        width: 100%;
      }
    }
    p {
      margin: 0;
      grid-column: 8 / 11;
    }
  }

  @media screen and (min-width: 90rem) {
    grid-column: 4 / 16;
    grid-template-columns: repeat(12, 1fr);

    h1 {
      grid-column: 1 / 7;
    }

    p {
      margin: 0;
      grid-column: 10 / 13;
    }
  }
`

export default class HeaderClass extends Component {
  render() {
    return (
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
    )
  }
}
