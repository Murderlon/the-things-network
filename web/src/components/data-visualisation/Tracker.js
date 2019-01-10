import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import { format } from 'd3-format'
import { select } from 'd3-selection'

import variables from 'styles/variables'

let Overlay = styled.rect`
  fill: none;
  pointer-events: all;
`

let Background = styled.rect`
  fill: ${variables.secondaryBlue};
`
export default class Tracker extends Component {
  overlayRef = createRef()
  state = {
    position: this.props.initialPosition
  }

  componentDidMount() {
    select(this.overlayRef.current).on('mousemove', this.onMove)
  }

  onMove = () => {
    let { handleMouseMove } = this.props
    let { position } = this.state

    this.setState({
      position: handleMouseMove(position, this.overlayRef.current)
    })
  }

  render() {
    let { width, height, x, y } = this.props
    let { position } = this.state

    return (
      <>
        <Overlay
          width={width > 0 ? width : null}
          height={height > 0 ? height : null}
          ref={this.overlayRef}
        />
        {position.map((pos, i) => (
          <g
            key={`${pos.x}-${pos.y}-${i}`}
            height={height}
            transform={`translate(${x(new Date(pos.x))}, 0)`}
          >
            {i === 0 && (
              <Background
                height={height > 0 ? height + 10 : null}
                width={15}
                x={-7}
                fillOpacity={0.6}
              />
            )}
            <g transform={`translate(0, ${y(pos.y)})`}>
              <Background width={45} x={8} y={-10} height={20} />
              <circle r={7.5} fill={pos.color} />
              <text x={15} y={5} fill={pos.color}>
                {format('.2s')(pos.y).replace(/G/, 'B')}
              </text>
            </g>
          </g>
        ))}
      </>
    )
  }
}
