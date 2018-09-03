import { css } from 'styled-components'

import modularScale from '../helpers/modular-scale'

const typography = css`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:500|IBM+Plex+Sans:400,500,700');

  @media screen and (min-width: 110em) {
    html {
      font-size: calc(1.125em + 0.05vw);
    }
  }

  body {
    font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-variant: common-ligatures lining-nums contextual;
    line-height: 1.6;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: 0.75em;
    font-weight: 500;
  }

  h1 {
    font-size: ${modularScale(3)};

    @media only screen and (min-width: 40rem) {
      font-size: ${modularScale(6)};
    }
  }

  h2 {
    font-size: ${modularScale(2)};
  }

  h3 {
    font-size: ${modularScale(1)};
  }

  a {
    text-decoration-skip: ink;
  }
`

export default typography
