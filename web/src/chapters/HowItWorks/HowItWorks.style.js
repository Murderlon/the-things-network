import styled from 'styled-components'

import { Heading } from 'styles/base-components'
import variables from 'styles/variables'
import modularScale from 'styles/modular-scale'

export let H2 = styled(Heading)`
  &::after {
    content: '3';
  }
`

export let Vision = styled.div`
  max-width: 30em;
  margin: ${modularScale(14)} auto;

  p {
    font-family: ${variables.monoTypo};
    font-size: ${modularScale(1)};
  }
`
