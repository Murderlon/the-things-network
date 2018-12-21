import styled from 'styled-components'
import Layout from 'components/Layout'
import variables from 'styles/variables'
import { Heading } from 'styles/base-components'
import modularScale from 'styles/modular-scale'

import TheThingsUnoSVG from 'assets/the-things-uno.svg'

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

export let LineGreen = styled.path`
  fill: none;
  stroke: ${variables.green};
  stroke-width: 5;
`
export let LineRed = styled(LineGreen)`
  stroke: ${variables.red};
`

export let TheThingsUno = styled(TheThingsUnoSVG)`
  display: block;
  margin: 0 auto;
`

export let ContextHeading = styled.h4`
  text-align: center;

  span {
    font-family: ${variables.monoTypo};
    font-weight: normal;
    display: block;
  }
  span:nth-of-type(1) {
    font-size: ${modularScale(-1)};
    font-family: ${variables.mainTypo};
    color: ${variables.purple};
  }
`

export let Title = styled.text`
  font-family: ${variables.monoTypo};
  font-size: 1rem;
  fill: ${variables.purple};
`

export let TickText = styled.text`
  font-family: ${variables.monoTypo};
  font-size: 0.8rem;
  fill: ${variables.highlightBlue};
`

export let TickLine = styled.line`
  stroke: ${variables.purple};
  stroke-opacity: 0.4;
`
