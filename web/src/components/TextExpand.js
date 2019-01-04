import React, { Component } from 'react'
import styled from 'styled-components'

import variables from 'styles/variables'

import ExpandIcon from 'assets/expand-icon.svg'

let Wrapper = styled.div`
  margin: ${variables.spacing.small} 0;
  width: 100%;
`

let Button = styled.button`
  color: ${variables.green};
  margin: 0;
  padding: 0;

  svg {
    width: 0.7em;
    height: auto;
    margin-left: ${variables.spacing.small};
    transition: transform 200ms;
    transition-timing-function: ${variables.timingFunction}};

    &[aria-expanded='true'] {
      svg {
        transform: rotate(180deg);
      }
    }
  }
`

export default class TextExpand extends Component {
  state = { toggle: false }

  render() {
    let { buttonText, children } = this.props
    let { toggle } = this.state
    return (
      <Wrapper>
        <Button
          type="button"
          onClick={() => this.setState({ toggle: !toggle })}
          aria-haspopup="true"
          aria-expanded={toggle}
        >
          {buttonText} <ExpandIcon />
        </Button>
        <div style={{ display: toggle ? 'block' : 'none' }}>{children}</div>
      </Wrapper>
    )
  }
}
