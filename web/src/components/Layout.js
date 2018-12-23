import styled, { css } from 'styled-components'

import vars from '../styles/variables'

let basicGrid = css`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  @media screen and (min-width: 60rem) {
    grid-template-columns: repeat(12, 1fr);
  }
`

let RootGrid = styled.div`
  ${basicGrid};

  @media screen and (min-width: 100rem) {
    grid-template-columns: repeat(18, 1fr);
  }
`

let ParentGrid = styled.div`
  ${basicGrid};

  @media screen and (min-width: 100rem) {
    grid-column: 4 / 16;
  }
`

let SubGrid = styled.div`
  margin-bottom: ${vars.spacing.huge};
  grid-column: 1 / 7;
  ${({ fullWidth }) => (fullWidth ? one : two)}
`

let one = css`
  margin: 0 ${vars.spacing.medium};

  @media screen and (min-width: 60rem) {
    margin: 0;
    grid-column: 2 / 12;
  }

  @media screen and (min-width: 100rem) {
    grid-column: 1 / 13;
  }
`

let two = css`
  @media screen and (min-width: 60rem) {
    grid-column: 2 / 13;
    display: grid;
    grid-template-columns: repeat(11, 1fr);
  }

  @media screen and (min-width: 100rem) {
    grid-column: 1 / 13;
    grid-template-columns: repeat(12, 1fr);
  }
`

export default { RootGrid, ParentGrid, SubGrid }
