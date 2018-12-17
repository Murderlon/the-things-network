import styled from 'styled-components'

import variables from './variables'

export let Heading = styled.h2`
  position: relative;

  &::after {
    color: ${variables.highlightBlue};
    text-align: right;
    position: absolute;
    left: -3rem;
    top: 0;
  }
`
