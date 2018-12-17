import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { hideText } from 'polished'

import randomHash from '../helpers/generateRandomHash'
import variables from '../styles/variables'

const Fieldset = styled('div')``

const Label = styled('label')`
  ${hideText()};
  display: inline-block;
  margin: 0 ${variables.spacing.medium};
  background-image: ${({ backgroundSrc }) => `url(${backgroundSrc})`};
  width: 6em;
  height: 6em;
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  border: 5px solid transparent;
`

const Radio = styled('input')`
  position: absolute;
  clip: rect(0, 0, 0, 0);

  &:checked + label {
    border: 5px solid ${variables.green};
  }

  &:not(:checked) + label {
    opacity: 0.3;
  }

  &:hover:not(:checked) + label {
    opacity: 0.5;
  }

  &:active:not(:checked) + label {
  }
`

/** An fieldset with multiple radio buttons with a callback to change state */
class RadioGroup extends Component {
  randomId = randomHash()

  render() {
    const { options, selectedOption, onChange } = this.props
    return (
      <Fieldset onChange={onChange}>
        {options.map(({ label, name, value, backgroundSrc }) => {
          const id = `${this.randomId}_${value}`
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
      </Fieldset>
    )
  }
}

export default RadioGroup
