/* eslint-disable max-len */
import { css } from 'styled-components'
import modularScale from '../modular-scale'
import variables from '../variables'

let typography = css`
  @media screen and (min-width: 80rem) {
    html {
      font-size: calc(1.125em + 0vw);
    }
  }
  body {
    font-family: 'Fira Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-variant: common-ligatures lining-nums contextual;
    line-height: 1.4;
    text-rendering: geometricPrecision;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.75em;
    font-family: ${variables.monoTypo};
    font-weight: normal;
  }
  h1 {
    font-size: ${modularScale(5)};
  }
  h2 {
    font-size: ${modularScale(2)};
    font-weight: 500;

    span {
      color: ${variables.highlightBlue};
    }
  }
  h3 {
    font-size: ${modularScale(1)};
  }
  h4 {
    font-size: ${modularScale(0)};
  }
  a {
    text-decoration-skip: ink;
  }
  @media screen and (min-width: 60rem) {
    h2 {
      font-size: ${modularScale(3)};
    }
    h3 {
      font-size: ${modularScale(2)};
    }
    h4 {
      font-size: ${modularScale(1)};
    }
  }
`

export default typography
