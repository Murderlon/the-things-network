import styled from 'styled-components'
import { Heading } from 'styles/base-components'
import variables from 'styles/variables'

export let Label = styled.p`
  text-align: center;
  font-family: ${variables.monoTypo};
  color: ${variables.green};
`

export let H3 = styled(Heading)`
  &::after {
    content: '.01';
    left: -4rem;
  }
`

export let Form = styled.form`
  margin: ${variables.spacing.medium} 0;
  > div {
    text-align: center;
  }
`
