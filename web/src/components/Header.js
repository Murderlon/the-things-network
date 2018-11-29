import styled from 'styled-components'
import modularScale from '../styles/modular-scale'

import vars from '../styles/variables'

export default styled.header`
  margin: ${vars.spacing.huge} 0;
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

  @media screen and (min-width: 60rem) {
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
