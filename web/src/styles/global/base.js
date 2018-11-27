/* eslint-disable max-len */
import { css } from 'styled-components'
import variables from '../variables'

const base = css`
  html {
    box-sizing: border-box;
    background: ${variables.backgroundBlue};
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNzUiIGhlaWdodD0iNjMiIHZpZXdCb3g9IjAgMCAzNzUgNjMiPiAgPHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNkQ2REI1IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2Utd2lkdGg9Ii43IiBkPSJNMCA1LjU1MTExNTEyZS0xN0wzNzQuOTk5Nzk3LjM5MDYyNDc4OE02Mi41IDBMNjIuNSA2Mi41TTEyNSAwTDEyNSA2Mi41TTE4Ny41IDBMMTg3LjUgNjIuNU0yNTAgMEwyNTAgNjIuNU0zMTIuNSAwTDMxMi41IDYyLjUiIG9wYWNpdHk9Ii4zIi8+PC9zdmc+);
    background-repeat: no-repeat repeat;
    background-position: center top;
    background-size: 100%;

    @media screen and (min-width: 45rem) {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDQwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDE0NDAgMTIwIj4gIDxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZENkRCNSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIuOSIgZD0iTTAgODZMMTQ0MCA4Ny41TTI0MCA4NkwyNDAgMjA4LjQwNjMzMk0xMjAgODZMMTIwIDIwOC40MDYzMzJNMzYwIDg2TDM2MCAyMDguNDA2MzMyTTQ4MCA4Nkw0ODAgMjA4LjQwNjMzMk02MDAgODZMNjAwIDIwOC40MDYzMzJNNzIwIDg2TDcyMCAyMDguNDA2MzMyTTg0MCA4Nkw4NDAgMjA4LjQwNjMzMk05NjAgODZMOTYwIDIwOC40MDYzMzJNMTA4MCA4NkwxMDgwIDIwOC40MDYzMzJNMTIwMCA4NkwxMjAwIDIwOC40MDYzMzJNMTMyMCA4NkwxMzIwIDIwOC40MDYzMzIiIG9wYWNpdHk9Ii4zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC04NikiLz48L3N2Zz4=);
    }
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
  section {
    grid-column: 1 / 7;
    margin: ${variables.spacing.huge} 0;

    @media screen and (min-width: 45rem) {
      grid-column: 1 / 13;
    }
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
  a:focus,
  button:focus {
    outline: 2px dotted ${variables.green};
  }
`

export default base
