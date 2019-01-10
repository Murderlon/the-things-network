import styled from 'styled-components'
import { Heading } from 'styles/base-components'
import variables from 'styles/variables'

export let H3 = styled(Heading)`
  &::after {
    content: '.02';
    left: -4rem;
  }
`

export let LineGreen = styled.path`
  fill: none;
  stroke: ${variables.green};
  stroke-width: 5;
`

export let LineRed = styled(LineGreen)`
  stroke: ${variables.red};
`

export let Context = styled.div`
  padding: 0 6.25%;
`
