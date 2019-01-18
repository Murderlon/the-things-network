import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import modularScale from '../styles/modular-scale'

import Logo from 'assets/ttn-stacked.svg'

import vars from '../styles/variables'

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

// const Downlink = styled.div`
//   position: absolute;
//   display: flex;
//   top: calc(100vw / 6 * 3);
//   /* right: 0vw; */
//   right: -116.666666667vw;
//   animation: ${fly} 5s infinite steps(6);
//   z-index: -10;

//   div {
//     background: ${vars.red};
//     width: calc(100vw / 6);
//     height: calc(100vw / 6);

//     &:first-of-type {
//       opacity: 0.8;
//     }
//     &:nth-of-type(2) {
//       opacity: 0.7;
//     }
//     &:nth-of-type(3) {
//       opacity: 0.6;
//     }
//     &:nth-of-type(4) {
//       opacity: 0.5;
//     }
//     &:nth-of-type(5) {
//       opacity: 0.4;
//     }
//     &:nth-of-type(6) {
//       opacity: 0.3;
//     }
//     &:nth-of-type(7) {
//       opacity: 0.2;
//     }
//   }
// `

// const Uplink = styled(Downlink)`
//   animation-delay: 2000ms;
//   right: 0vw;
//   top: calc(100vw / 18 * ${p => p.position});
//   flex-direction: row-reverse;

//   div {
//     background: ${vars.green};
//   }
// `

let randomPosition = () => Math.floor(Math.random() * (9 - 1 + 1) + 1)

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
