import React from 'react'

import Arrow from '../../icons/arrow.svg'
import { Nav, List, Link } from './SecondaryNavigation.style'

const SecondaryNavigation = ({ currentStep, steps }) => {
  const previous = steps.findIndex(step => step.link === currentStep.link) - 1
  const next = previous + 2

  return (
    <Nav>
      <List>
        <li>
          {steps[previous] && (
            <Link to={`/how-it-works/${steps[previous].link}`}>
              <span>
                <Arrow />
                {steps[previous].label}
              </span>
            </Link>
          )}
        </li>
        <li>{currentStep.label}</li>
        <li>
          {steps[next] && (
            <Link to={`/how-it-works/${steps[next].link}`}>
              <span>
                {steps[next].label}
                <Arrow />
              </span>
            </Link>
          )}
        </li>
      </List>
    </Nav>
  )
}

export default SecondaryNavigation
