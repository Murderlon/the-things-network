import styled from 'styled-components'

import { Heading } from 'styles/base-components'

export let H2 = styled(Heading)`
  &::after {
    content: '3';
  }
`
