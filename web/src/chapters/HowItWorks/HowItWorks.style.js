import styled from 'styled-components'
import Layout from 'components/Layout'
import variables from 'styles/variables'
import { Heading } from 'styles/base-components'
import modularScale from 'styles/modular-scale'

export let H2 = styled(Heading)`
  &::after {
    content: '3';
  }
`

export let Deviceheading = styled(Heading)`
  &::after {
    content: '.01';
    left: -4rem;
  }
`

export let GatewayHeading = styled(Heading)`
  &::after {
    content: '.02';
    left: -4rem;
  }
`

export let Label = styled.p`
  text-align: center;
  font-family: ${variables.monoTypo};
  color: ${variables.green};
`

export let Form = styled.form`
  display: flex;
  justify-content: center;
`

export let Table = styled.table`
  margin-top: ${variables.spacing.large};
  border-spacing: 0 0.5em;

  thead th {
    height: 5em;

    span {
      font-family: ${variables.monoTypo};
      font-weight: normal;
      font-size: ${modularScale(1)};
      display: block;
    }
    span:nth-of-type(1) {
      font-size: ${modularScale(0)};
      font-family: inherit;
      color: ${variables.purple};
    }
  }
  tr {
    padding: ${variables.spacing.small} 0;
  }

  td:first-of-type {
    color: ${variables.purple};
    text-align: right;
    padding-right: ${variables.spacing.small};
    min-width: 35%;
  }

  td {
    vertical-align: top;
  }
`

export let AlteredLayout = styled(Layout.SubGrid)`
  margin-bottom: ${variables.spacing.huge};

  .context {
    justify-content: ${({ isStatic }) => (isStatic ? 'center' : 'flex-start')};
  }

  .context,
  > div:not(.context) {
    height: auto;
    padding: ${`${variables.spacing.xxlarge} ${variables.spacing.medium}`};
  }

  > div:not(.context) {
    background: ${({ isStatic }) => isStatic && variables.secondaryBlue};
  }
`

export let Div = styled.div`
  margin: ${variables.spacing.medium} auto;

  @media screen and (min-width: 60rem) {
    width: 30vw;
  }

  ul {
    list-style: inside;
  }
`

export let GatewayImage = styled.img`
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  margin: 0 auto;
  object-fit: cover;
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
