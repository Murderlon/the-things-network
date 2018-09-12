import styled, { css } from 'styled-components'
import { Link as RouterLink } from '@reach/router'
import { boxShadow } from '../../styles/base-classes'

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background: ${({ theme }) => theme.overlayBlue};

  @media screen and (min-width: ${p => p.breakpoint}) {
    padding-top: ${({ theme }) => theme.spacing.medium};
  }
`

export const List = styled.ul`
  @media screen and (min-width: ${p => p.breakpoint}) {
    display: flex;
  }
`

const activeStyles = css`
  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 10px;
    left: 0;
    bottom: -5px;
    background: ${({ theme }) => theme.green};
    border-radius: 3px;
    ${boxShadow};
  }
`

export const ListItem = styled.li`
  text-align: center;
`

export const Link = styled(RouterLink)`
  font-family: ${({ theme }) => theme.monoTypo};
  text-transform: uppercase;
  position: relative;
  display: block;
  padding: ${({ theme }) => theme.spacing.small};
  margin: 0 ${({ theme }) => theme.spacing.small};

  @media screen and (min-width: ${p => p.breakpoint}) {
    ${({ active }) => active && activeStyles};
  }
`

export const ToggleButton = styled.button`
  font-family: ${({ theme }) => theme.monoTypo};
  text-transform: uppercase;
  display: block;
  width: 100%;
  text-align: center;

  &:focus {
    outline: none;
  }

  &[aria-expanded='true'] {
    svg {
      transform: rotate(180deg);
    }
  }

  div {
    padding: ${({ theme }) => theme.spacing.small};
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: inherit;
  }

  svg {
    margin-left: ${({ theme }) => theme.spacing.small};
    transition: transform 200ms;
    width: 13px;
    height: 13px;
  }
`
