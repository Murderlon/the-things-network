import React from 'react'
import styled from 'styled-components'

import variables from '../styles/variables'
import modularScale from '../styles/modular-scale'

let Section = styled.section`
  grid-column: 1 / 7;
  text-align: center;
  position: relative;
  padding: ${variables.spacing.huge} 0;
  margin: ${variables.spacing.enormous} 0;

  @media screen and (min-width: 60rem) {
    grid-column: 2 / 12;
  }

  @media screen and (min-width: 120rem) {
    grid-column: 4 / 16;
  }

  div span {
    display: inline-block;
    width: 5rem;
    height: 5rem;
    background: ${variables.primaryBlue};
    border-radius: 50%;
    font-size: ${modularScale(8)};
    color: ${variables.green};
  }

  blockquote {
    padding: 0;
    margin: 0;
  }

  p {
    font-size: ${modularScale(2)};
    font-style: italic;
    max-width: 40rem;
    margin: ${variables.spacing.medium} auto;
  }

  cite {
    color: ${variables.green};
    position: relative;

    span {
      font-style: normal;
      font-size: ${modularScale(1)};
      display: block;
    }
  }
`

const Quote = () => (
  <Section>
    <div>
      <span>”</span>
    </div>
    <blockquote cite="https://thenextweb.com/insider/2015/08/19/the-things-network-wants-to-make-every-city-smart-starting-with-amsterdam/">
      <p>
        Traditional connectivity methods are like a pager, LoRaWAN is like the
        first mobile phone.
      </p>
    </blockquote>
    <cite>
      <span>Wienke Giezeman </span>Founder, The Things Network
    </cite>
  </Section>
)

export default Quote
