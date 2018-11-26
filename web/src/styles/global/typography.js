import { css } from 'styled-components'

import modularScale from '../modular-scale'

const typography = css`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,700');
  @import url('//cloud.typenetwork.com/projects/2762/fontface.css/');
  @media screen and (min-width: 110em) {
    html {
      font-size: calc(1.125em + 0.05vw);
    }
  }
  body {
    font-family: 'Fira Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
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
    font-size: ${modularScale(5)};
  }
  h2 {
    font-size: ${modularScale(4)};
  }
  h3 {
    font-size: ${modularScale(3)};
  }
  h4 {
    font-size: ${modularScale(2)};
  }
  a {
    text-decoration-skip: ink;
  }
`

export default typography
