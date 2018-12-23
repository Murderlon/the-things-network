import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import schedule from 'raf-schd'

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
      let { width, height } = this.root.current.getBoundingClientRect()

      this.setState({
        width,
        height: this.props.heightAsWidth ? width : height
      })
    }
  })

  render() {
    let { classProp } = this.props
    return (
      <div
        className={classProp && classProp}
        ref={this.root}
        style={this.props.style}
      >
        <SVG width={this.state.width} height={this.state.height}>
          {this.props.children(this.state)}
        </SVG>
      </div>
    )
  }
}
