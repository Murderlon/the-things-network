import styled, { keyframes } from 'styled-components'
import modularScale from '../styles/modular-scale'

import vars from '../styles/variables'

let bounce = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(8px);
  }
`

export default styled.header`
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

      path {
        animation: ${bounce} 0.5s infinite alternate;
        transition-timing-function: ${vars.timingFunction};
      }
      path:nth-of-type(2) {
        animation-delay: 50ms;
      }
      path:nth-of-type(3) {
        animation-delay: 100ms;
      }
    }
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

  @media screen and (min-width: 100rem) {
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
