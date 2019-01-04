import styled from 'styled-components'

import Layout from 'components/Layout'

import variables from 'styles/variables'
import modularScale from 'styles/modular-scale'
import { Heading } from 'styles/base-components'

export let H2 = styled(Heading)`
  grid-column: 1 / 7;

  @media screen and (min-width: 60rem) {
    grid-column: 2 / 11;
  }

  @media screen and (min-width: 100rem) {
    grid-column: 3 / 12;
  }

  &::after {
    content: '0';
  }
`

export let ContentWrapper = styled(Layout.ParentGrid)`
  @media screen and (min-width: 100rem) {
    grid-column: 1 / 19;
  }

  > div {
    position: relative;
  }

  .mapGraphic {
    position: sticky;
    height: 100vh;
  }
  .chart {
    height: 100vh;
    z-index: -1;
  }

  .mapScrollText {
    pointer-events: none;
    position: relative;
  }

  .step {
    z-index: 0;

    p {
      margin: 0 auto;
      max-width: 30em;
      background: ${variables.secondaryBlue};
      padding: ${variables.spacing.medium};
      font-size: ${modularScale(1)};
    }
  }
`

export let LayoutWrapper = styled.div`
  width: 100%;
  grid-column: 1 / 7;

  @media screen and (min-width: 60rem) {
    grid-column: 1 / 13;
  }

  @media screen and (min-width: 100rem) {
    grid-column: 1 / 18;
  }
`

export let MapGraphic = styled.div`
  position: relative;
`

export let Legend = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  background: ${variables.secondaryBlue};
  margin: ${variables.spacing.large};
  padding: ${variables.spacing.small};
  display: flex;
  align-items: center;
  max-width: 12em;

  p {
    margin: 0;
  }

  span {
    display: inline-block;
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background: ${variables.green};
  }
`
