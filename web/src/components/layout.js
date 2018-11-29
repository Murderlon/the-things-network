import styled, { css } from 'styled-components'

import vars from '../styles/variables'

let ParentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);

  @media screen and (min-width: 60rem) {
    grid-template-columns: repeat(12, 1fr);
  }
`

let SubGrid = styled.div`
  grid-column: 1 / 7;
  ${({ fullWidth }) => (fullWidth ? one : two)}
`

let one = css`
  margin: 0 ${vars.spacing.medium};

  @media screen and (min-width: 60rem) {
    margin: 0;
    grid-column: 2 / 12;
  }
`

let two = css`
  .context {
    background: ${vars.backgroundBlue};
  }

  div:not(.context) {
    height: 100vw;
    background: ${vars.sectionBlue};
  }

  @media screen and (min-width: 60rem) {
    grid-column: 2 / 13;
    display: grid;
    grid-template-columns: repeat(11, 1fr);

    .context {
      grid-column: 7 / 13;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        width: 25vw;
      }
    }

    div:not(.context) {
      height: 50vw;
      grid-column: 1 / 7;
    }
  }
`

export default { ParentGrid, SubGrid }
