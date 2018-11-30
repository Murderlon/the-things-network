/* eslint-disable max-len */
import { css } from 'styled-components'
import modularScale from '../modular-scale'
import variables from '../variables'

let typography = css`
  @media screen and (min-width: 80rem) {
    html {
      font-size: calc(1.125em + 0.1vw);
    }
  }
  body {
    font-family: 'Fira Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-variant: common-ligatures lining-nums contextual;
    line-height: 1.4;
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
  }
  h1 {
    font-size: ${modularScale(5)};
  }
  h2 {
    font-size: ${modularScale(3)};

    span {
      color: ${variables.highlightBlue};
    }
  }
  h3 {
    font-size: ${modularScale(2)};
    font-weight: normal;
  }
  h4 {
    font-size: ${modularScale(1)};
  }
  a {
    text-decoration-skip: ink;
  }
`

export default typography
