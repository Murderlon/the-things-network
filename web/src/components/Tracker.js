import React, { Component } from 'react'
import styled from 'styled-components'
import { format } from 'd3-format'
import { bisector } from 'd3-array'

import variables from '../styles/variables'

let Overlay = styled.rect`
  fill: none;
  pointer-events: all;
`

let BackgroundRect = styled.rect`
  fill: ${variables.secondaryBlue};
  fill-opacity: 0.5;
`

let Text = styled.text`
  fill: ${variables.red};
`

let Dot = styled.circle`
  fill: ${variables.red};
`

export default class Tracker extends Component {
  state = {
    position: this.props.initialPosition
  }

  onMove = e => {
    let year = Math.round(this.props.x.invert(e.pageX) - 3)

    if (this.state.position.year !== year) {
      let data = this.props.data
      let bisectYear = bisector(d => d.year).left
      let yearIndex = bisectYear(data, year)
      let value = data[yearIndex].value

      this.setState({
        position: { year, value }
      })
    }
  }

  render() {
    let { width, height, x, y } = this.props
    let { position } = this.state
    return (
      <>
        <Overlay
          width={width > 0 ? width : null}
          height={height > 0 ? height : null}
        />
        <g
          height={height}
          transform={`translate(${x(new Date(position.year))}, 0)`}
        >
          <BackgroundRect
            height={height > 0 ? height : null}
            width={15}
            x={-7}
          />
          <g transform={`translate(0, ${y(position.value)})`}>
            <BackgroundRect width={35} x={8} y={-10} height={20} />
            <Dot r={7.5} />
            <Text x={15} y={5}>
              {format('.2s')(position.value).replace(/G/, 'B')}
            </Text>
          </g>
        </g>
      </>
    )
  }
}
