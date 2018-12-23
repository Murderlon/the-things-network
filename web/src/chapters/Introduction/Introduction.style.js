import styled from 'styled-components'

import { Heading } from 'styles/base-components'
import variables from 'styles/variables'

export let H2 = styled(Heading)`
  &::after {
    content: '0';
  }
`

export let LinePresent = styled.path`
  fill: none;
  stroke: ${variables.red};
  stroke-width: 5;
`

export let LineFuture = styled(LinePresent)`
  stroke-dasharray: 10;
  stroke-opacity: 0.4;
`
