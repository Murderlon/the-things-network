import { Link as Routerlink } from '@reach/router'
import styled from 'styled-components'

import { boxShadow } from '../../styles/base-classes'

export const Nav = styled.nav`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xxlarge};
  left: 0;
  right: 0;
  z-index: 1;
  background: ${({ theme }) => theme.backgroundBlue};
  ${boxShadow};

  @media screen and (min-width: 42rem) {
    top: 63px;
  }
`

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  li {
    flex: 1 1 33%;
    font-family: ${({ theme }) => theme.monoTypo};
    text-transform: uppercase;
    text-align: center;

    svg {
      width: 17px;
      height: 17px;
      margin-right: ${({ theme }) => theme.spacing.small};
    }

    &:last-of-type svg {
      transform: scaleX(-1);
      margin-left: ${({ theme }) => theme.spacing.small};
    }
  }
`

export const Link = styled(Routerlink)`
  display: block;
  color: ${({ theme }) => theme.green};
  padding: ${({ theme }) => theme.spacing.small} 0;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
