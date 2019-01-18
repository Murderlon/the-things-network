import styled, { css } from 'styled-components'

import variables from 'styles/variables'

let alignPrimaryLeft = css`
  @media screen and (min-width: 60rem) {
    grid-column: 6 / 13;
  }

  @media screen and (min-width: 90rem) {
    grid-column: 6 / 14;
  }
`

let alignPrimaryRight = css`
  @media screen and (min-width: 60rem) {
    grid-column: 1 / 7;
  }
`

let secondaryStyles = css`
  background: ${variables.secondaryBlue};
  padding: 12.5%;
`

let alignSecondaryLeft = css`
  @media screen and (min-width: 60rem) {
    grid-column: 1 / 6;
  }
`

let alignSecondaryRight = css`
  @media screen and (min-width: 60rem) {
    grid-column: 7 / 13;
  }

  @media screen and (min-width: 90rem) {
    grid-column: 7 / 14;
  }
`
let center = css`
  @media screen and (min-width: 60rem) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

let padding = css`
  padding: 6.25% 12.5%;
`

let Primary = styled.div`
  background: ${variables.primaryBlue};
  align-self: start;
  ${({ alignLeft }) => (alignLeft ? alignPrimaryLeft : alignPrimaryRight)}
  ${({ asSecondary }) => (asSecondary ? secondaryStyles : null)};
  ${({ withPadding }) => (withPadding ? padding : null)};
`

let Secondary = styled.div`
  ${({ alignLeft }) => (alignLeft ? alignSecondaryLeft : alignSecondaryRight)};
  ${({ centerContent }) => (centerContent ? center : null)};
  ${secondaryStyles};
`

export default { Primary, Secondary }
