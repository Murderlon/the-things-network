import React, { Component } from 'react'
import { Link as Routerlink } from '@reach/router'
import styled from 'styled-components'

const Nav = styled.nav`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xxlarge};
  left: 0;
  right: 0;
  z-index: 1;
  background: ${({ theme }) => theme.backgroundBlue};

  h1 {
    margin: 0;
  }
`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Link = styled(Routerlink)`
  display: block;
  color: ${({ theme }) => theme.green};
  padding: ${({ theme }) => theme.spacing.medium};
`

class SecondaryNavigation extends Component {
  state = {
    currentStep: { label: 'Device', link: 'device' },
    steps: [
      { label: 'Intro', link: 'intro' },
      { label: 'Device', link: 'device' },
      { label: 'Gateway', link: 'gateway' },
      { label: 'The Things Network', link: 'the-things-network' },
      { label: 'Application', link: 'application' }
    ]
  }

  render() {
    const { currentStep, steps } = this.state
    const previous = steps.findIndex(step => step.link === currentStep.link) - 1
    const next = steps.findIndex(step => step.link === currentStep.link) + 1

    return (
      <Nav>
        <List>
          <li>
            <Link to={steps[previous].link}>{steps[previous].label}</Link>
          </li>
          <li>
            <h1>{currentStep.label}</h1>
          </li>
          <li>
            <Link to={steps[next].link}>{steps[next].label}</Link>
          </li>
        </List>
      </Nav>
    )
  }
}

export default SecondaryNavigation
