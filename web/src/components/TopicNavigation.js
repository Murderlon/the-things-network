import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import { rgba } from 'polished'

import variables from 'styles/variables'
import modularScale from 'styles/modular-scale'

import DeviceIcon from 'assets/device-icon.svg'
import GatewayIcon from 'assets/gateway-icon.svg'
import TTNIcon from 'assets/ttn-icon.svg'
import AppIcon from 'assets/app-icon.svg'

let Link = styled(GatsbyLink)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover,
  &:focus {
    background: ${rgba(variables.green, 0.1)};
  }
  &:active {
    background: ${rgba(variables.green, 0.4)};
  }
`

let Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ul {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
  }

  li {
    background: ${variables.secondaryBlue};
    border: 1px solid ${variables.green};
    flex: 1;
    margin: ${variables.spacing.medium};

    p,
    div {
      text-align: center;
    }
    svg {
      width: auto;
      height: 5em;
    }
    &:nth-of-type(3) svg {
      width: 5em;
      height: auto;
    }
    p {
      font-family: ${variables.monoTypo};

      &:first-of-type {
        color: ${variables.green};
        font-size: ${modularScale(1)};
      }
    }
  }
`

let activeStyle = {
  background: rgba(variables.green, 0.2),
  'pointer-events': 'none',
  cursor: 'default'
}

export default () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/how-it-works/device/" activeStyle={activeStyle}>
            <p>.01</p>
            <div>
              <DeviceIcon />
            </div>
            <p>Device</p>
          </Link>
        </li>
        <li>
          <Link to="/how-it-works/gateway/" activeStyle={activeStyle}>
            <p>.02</p>
            <div>
              <GatewayIcon />
            </div>
            <p>Gateway</p>
          </Link>
        </li>
        <li>
          <Link
            to="/how-it-works/the-things-network/"
            activeStyle={activeStyle}
          >
            <p>.03</p>
            <div>
              <TTNIcon />
            </div>
            <p>The Things Network</p>
          </Link>
        </li>
        <li>
          <Link to="/how-it-works/application/" activeStyle={activeStyle}>
            <p>.04</p>
            <div>
              <AppIcon />
            </div>
            <p>Application</p>
          </Link>
        </li>
      </ul>
    </Nav>
  )
}
