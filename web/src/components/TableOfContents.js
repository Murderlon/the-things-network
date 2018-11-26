import React from 'react'
import styled from 'styled-components'

import modularScale from '../styles/modular-scale'

const List = styled.ol`
  font-size: ${modularScale(2)};
`

const TableOfContents = () => {
  return (
    <List>
      <li>
        <a href="#introduction">Introduction</a>
      </li>
      <li>
        <a href="#protocols">Protocols</a>
      </li>
      <li>
        <a href="#the-things-network">The Things Network</a>
      </li>
      <li>
        <a href="#how-it-works">How it works</a>
      </li>
      <li>
        <a href="#you-are-the-network">You are the network</a>
      </li>
    </List>
  )
}

export default TableOfContents
