import { css } from 'styled-components'
import colors from '../themes/colors'

const base = css`
  html {
    box-sizing: border-box;
    background: ${colors.backgroundBlue};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    color: white;
  }

  /**
 * Add the correct display in browsers that don't support HTML5 elements by default.
 */

  article,
  aside,
  footer,
  header,
  nav,
  figcaption,
  figure,
  main,
  section {
    display: block;
  }

  ul,
  dl {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  dt,
  dd {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    height: auto;
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    background: none;
    border: 0;
    color: inherit;
  }

  @keyframes marching_ants {
    from {
      stroke-dashoffset: 24px;
    }

    to {
      stroke-dashoffset: 0px;
    }
  }

  .marching_ants_animation {
    animation: marching_ants 0.7s linear infinite running;
  }
`

export default base
