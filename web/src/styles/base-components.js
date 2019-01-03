import styled from 'styled-components'

import variables from './variables'
import modularScale from 'styles/modular-scale'

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

export let Table = styled.table`
  margin-top: ${variables.spacing.large};
  border-spacing: 0 0.5em;

  thead th {
    font-family: ${variables.monoTypo};
    font-weight: normal;
    font-size: ${modularScale(1)};
  }

  tr {
    padding: ${variables.spacing.small} 0;
  }

  td:first-of-type {
    color: ${variables.purple};
    text-align: right;
    padding-right: ${variables.spacing.small};
    min-width: 50%;
  }

  td {
    vertical-align: top;
  }
`
