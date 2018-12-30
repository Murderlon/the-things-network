import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

import variables from 'styles/variables'
import Arrow from 'assets/arrow.svg'

let Link = styled.a`
  display: block;
  color: ${variables.green};
  text-transform: uppercase;
  font-family: ${variables.monoTypo};
  margin-bottom: ${variables.spacing.small};
`

export default ({ children, to }) => {
  let internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <Link as={GatsbyLink} to={to}>
        {children} <Arrow />
      </Link>
    )
  }
  return (
    <Link href={to}>
      {children} <Arrow />
    </Link>
  )
}
