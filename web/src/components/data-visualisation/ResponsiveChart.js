import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import schedule from 'raf-schd'

let Root = styled.div`
  width: 100%;
  height: 100%;
`

let SVG = styled('svg')`
  width: auto;
  height: auto;
`

export default class ResponsiveChart extends Component {
  root = createRef()

  state = {
    width: 0,
    height: 0
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize)

    // Call once to set the correct dimensions
    this.handleWindowResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  handleWindowResize = schedule(() => {
    if (this.root.current) {
      let { heightAsWidth, heightAsHalfWidth } = this.props
      let { width, height } = this.root.current.getBoundingClientRect()

      this.setState({
        width,
        height: heightAsWidth
          ? width
          : heightAsHalfWidth
          ? (width / 4) * 3
          : height
      })
    }
  })

  render() {
    let { classProp } = this.props
    return (
      <Root
        className={classProp && classProp}
        ref={this.root}
        style={this.props.style}
      >
        <SVG width={this.state.width} height={this.state.height}>
          {this.props.children(this.state)}
        </SVG>
      </Root>
    )
  }
}
