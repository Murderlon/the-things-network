import styled, { css } from 'styled-components'

import variables from 'styles/variables'

let alignPrimaryLeft = css`
  @media screen and (min-width: 60rem) {
    grid-column: 6 / 13;
  }

  @media screen and (min-width: 100rem) {
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

  @media screen and (min-width: 100rem) {
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

let Primary = styled.div`
  ${({ alignLeft }) => (alignLeft ? alignPrimaryLeft : alignPrimaryRight)}
  background: ${variables.primaryBlue};
  ${({ asSecondary }) => (asSecondary ? secondaryStyles : null)};
`

let Secondary = styled.div`
  ${({ alignLeft }) => (alignLeft ? alignSecondaryLeft : alignSecondaryRight)};
  ${({ centerContent }) => (centerContent ? center : null)};
  ${secondaryStyles};
`

export default { Primary, Secondary }
