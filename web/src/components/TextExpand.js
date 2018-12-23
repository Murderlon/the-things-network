import React, { Component } from 'react'
import styled from 'styled-components'

import variables from 'styles/variables'

let Button = styled.button`
  color: ${variables.green};
`

let ConditionalParagraph = styled.p`
  display: ${({ isVisisble }) => (isVisisble ? 'block' : 'none')};
`

export default class TextExpand extends Component {
  state = { isVisisble: false }

  render() {
    let { buttonText, children } = this.props
    return (
      <div>
        <Button
          type="button"
          onClick={() => this.setState({ isVisisble: !this.state.isVisisble })}
        >
          {buttonText}
        </Button>
        <ConditionalParagraph isVisisble={this.state.isVisisble}>
          {children}
        </ConditionalParagraph>
      </div>
    )
  }
}
