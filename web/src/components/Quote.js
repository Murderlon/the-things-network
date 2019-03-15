import React from 'react'
import styled from 'styled-components'

import variables from '../styles/variables'
import modularScale from '../styles/modular-scale'

let Section = styled.section`
  grid-column: 1 / 7;
  align-self: center;
  text-align: center;
  position: relative;
  margin-bottom: ${variables.spacing.enormous};

  @media screen and (min-width: 60rem) {
    grid-column: 9 / 12;
  }

  @media screen and (min-width: 90rem) {
    grid-column: 11 / 16;
  }

  div span {
    display: inline-block;
    width: 4rem;
    height: 4rem;
    background: ${variables.primaryBlue};
    border-radius: 50%;
    font-size: ${modularScale(7)};
    color: ${variables.green};

    &:before {
      content: '”'
    }
  }

  blockquote {
    padding: 0;
    margin: 0;
  }

  p {
    font-size: ${modularScale(1)};
    font-style: italic;
    max-width: 40rem;
    padding 0 ${variables.spacing.small};
    margin: ${variables.spacing.medium} auto;
  }

  cite {
    color: ${variables.green};
    position: relative;

    span {
      font-style: normal;
      display: block;
    }
  }
`

let Quote = () => (
  <Section>
    <div>
      <span />
    </div>
    <blockquote cite="https://thenextweb.com/insider/2015/08/19/the-things-network-wants-to-make-every-city-smart-starting-with-amsterdam/">
      <p>
        <a href="https://thenextweb.com/insider/2015/08/19/the-things-network-wants-to-make-every-city-smart-starting-with-amsterdam/">
          Traditional connectivity methods are like a pager, LoRaWAN is like the
          first mobile phone.
        </a>
      </p>
    </blockquote>
    <cite>
      <span>Wienke Giezeman </span>Founder, The Things Network
    </cite>
  </Section>
)

export default Quote
