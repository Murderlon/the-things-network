import styled from 'styled-components'

import Layout from 'components/Layout'
import { Heading } from 'styles/base-components'
import variables from 'styles/variables'

import background from 'assets/world.jpg'

export let Background = styled(Layout.RootGrid)`
  position: relative;
  min-height: 70vh;
  padding: ${variables.spacing.large} 0;
  margin-bottom: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${`url(${background})`};
    background-size: cover;
    opacity: 0.4;
    z-index: -1;
  }
  grid-column: 1 / 7;

  @media screen and (min-width: 60rem) {
    grid-column: 1 / 13;
  }
  @media screen and (min-width: 90rem) {
    grid-column: 1 / 19;
  }
`

export let H2 = styled(Heading)`
  &::after {
    content: '4';
  }
`

export let BlockLeft = styled.article`
  grid-column: 2 / 6;
  margin: ${variables.spacing.medium} 0;

  @media screen and (min-width: 60rem) {
    grid-column: 2 / 5;
  }
  @media screen and (min-width: 90rem) {
    grid-column: 1 / 4;
  }
`

export let BlockCenter = styled.article`
  grid-column: 2 / 6;
  margin: ${variables.spacing.medium} 0;

  @media screen and (min-width: 60rem) {
    grid-column: 6 / 8;
  }
  @media screen and (min-width: 90rem) {
    grid-column: 5 / 9;
  }
`

export let BlockRight = styled.article`
  grid-column: 2 / 6;
  margin: ${variables.spacing.medium} 0;

  @media screen and (min-width: 60rem) {
    grid-column: 9 / 12;
  }
  @media screen and (min-width: 90rem) {
    grid-column: 10 / 14;
  }
`

export let Footer = styled(Layout.ParentGrid)`
  margin: 0;
  font-size: 0.8em;

  p {
    color: rgb(185, 185, 185);
    a {
      transition: 100ms;

      &:hover {
        color: white;
      }
    }

    span {
      margin: ${variables.spacing.small} 0;
      display: block;

      svg {
        width: 70%;
        max-width: 14em;
        height: auto;
      }
    }
  }
`
