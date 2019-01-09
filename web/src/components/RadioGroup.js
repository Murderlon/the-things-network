import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { rgba } from 'polished'

import randomHash from '../helpers/generateRandomHash'
import variables from '../styles/variables'

let Wrapper = styled('div')`
  display: flex;
`

let Label = styled('label')`
  flex: 1;
  font-size: 0.8em;
  font-family: ${variables.monoTypo};
  text-align: center;
  color: ${variables.green};
  padding: ${variables.spacing.small};
`

let Radio = styled('input')`
  position: absolute;
  clip: rect(0, 0, 0, 0);

  &:checked + label {
    background: ${variables.green};
    color: ${variables.secondaryBlue};
  }

  &:not(:checked) + label {
    border: 1px solid ${variables.green};
  }
  &:not(:checked):hover + label,
  &:not(:checked):focus + label {
    background: ${rgba(variables.green, 0.1)};
  }
`

/** An Wrapper with multiple radio buttons with a callback to change state */
class RadioGroup extends Component {
  randomId = randomHash()

  render() {
    let { options, selectedOption, onChange } = this.props
    return (
      <Wrapper onChange={onChange}>
        {options.map(({ label, name, value, backgroundSrc }, i) => {
          let id = `${this.randomId}_${value}`
          return (
            <Fragment key={value}>
              <Radio
                type="radio"
                name={name}
                value={value}
                id={id}
                checked={selectedOption === value && selectedOption}
                onChange={onChange}
              />
              <Label htmlFor={id} backgroundSrc={backgroundSrc}>
                {label}
              </Label>
            </Fragment>
          )
        })}
      </Wrapper>
    )
  }
}

export default RadioGroup
