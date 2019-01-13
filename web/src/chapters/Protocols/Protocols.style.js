import styled from 'styled-components'

import Layout from 'components/Layout'

import variables from 'styles/variables'
import { Heading } from 'styles/base-components'

export let H2 = styled(Heading)`
  &::after {
    content: '1';
  }
`

export let Step = styled.div`
  .range {
    color: ${variables.green};
    display: flex;
    align-items: center;

    span {
      display: inline-block;
      width: 0.8em;
      height: 0.8em;
      border-radius: 50%;
      background: ${variables.green};
      margin-right: ${variables.spacing.small};
    }
  }

  h5 {
    font-family: ${variables.mainTypo};
    color: ${variables.highlightBlue};
    font-size: 1em;
    margin: 0;
    margin-top: ${variables.spacing.small};
  }
  ul {
    margin: 0;
  }
`

export let SubGrid = styled(Layout.SubGrid)`
  position: relative;

  .step-protocol:first-of-type {
    margin-top: ${variables.spacing.huge};
  }

  .step-protocol:last-of-type {
    height: auto !important;
    margin-bottom: ${variables.spacing.xxlarge};
  }

  .scroll-protocol__graphic {
    position: sticky;
    z-index: 1;
  }
  .scroll-protocol__text {
    position: relative;
    z-index: 0;
  }
`
