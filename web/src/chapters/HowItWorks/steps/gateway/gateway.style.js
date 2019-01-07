import styled from 'styled-components'
import { Heading } from 'styles/base-components'
import variables from 'styles/variables'
import modularScale from 'styles/modular-scale'

export let H3 = styled(Heading)`
  &::after {
    content: '.02';
    left: -4rem;
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
