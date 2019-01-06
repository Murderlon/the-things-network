import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled, { css } from 'styled-components'

import variables from 'styles/variables'
import Arrow from 'assets/arrow.svg'

let primary = css`
  background: ${variables.green};
  color: ${variables.secondaryBlue};
  padding: ${variables.spacing.small};
`

let Link = styled.a`
  display: block;
  color: ${variables.green};
  text-transform: uppercase;
  font-family: ${variables.monoTypo};
  padding: ${variables.spacing.small} 0;
  ${({ asPrimary }) => (asPrimary ? primary : null)}
  svg {
    transform: ${({ iconLeft }) => (iconLeft ? 'scaleX(-1)' : null)};
  }
`

export default ({ children, to, asPrimary, iconLeft }) => {
  let internal = /^\/(?!\/)/.test(to)
  let IconWithChildren = iconLeft ? (
    <>
      <Arrow /> {children}
    </>
  ) : (
    <>
      {children} <Arrow />
    </>
  )

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <Link iconLeft={iconLeft} as={GatsbyLink} asPrimary={asPrimary} to={to}>
        {IconWithChildren}
      </Link>
    )
  }
  return (
    <Link href={to} asPrimary={asPrimary}>
      {IconWithChildren}
    </Link>
  )
}
