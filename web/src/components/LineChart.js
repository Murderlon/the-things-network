import React from 'react'
import styled from 'styled-components'
import { format } from 'd3-format'
import { timeFormat } from 'd3-time-format'

import variables from '../styles/variables'

let Title = styled.text`
  font-family: ${variables.monoTypo};
  font-size: 1rem;
  fill: ${variables.purple};
`

let TickText = styled.text`
  font-family: ${variables.monoTypo};
  font-size: 0.8rem;
  fill: ${variables.highlightBlue};
`

let TickLine = styled.line`
  stroke: ${variables.purple};
  stroke-opacity: 0.4;
`

export default ({ x, y, width, height, margin, title, children }) => (
  <g transform={`translate(${margin.left}, ${margin.top})`}>
    <Title
      transform={`translate(${width / 2}, ${-margin.top / 3})`}
      textAnchor="middle"
    >
      {title}
    </Title>

    <g transform={`translate(0, ${height})`} textAnchor="end">
      {x.ticks().map(tick => (
        <g key={tick} transform={`translate(${x(tick)}, 0)`}>
          <TickLine y2={-width} />
          <TickText y="30">{timeFormat('%Y')(tick)}</TickText>
        </g>
      ))}
    </g>

    <g>
      {y.ticks().map(tick => (
        <g key={tick} transform={`translate(0, ${y(tick)})`} textAnchor="end">
          <TickLine x2={height} />
          <TickText x="-15">{format('.2s')(tick).replace(/G/, 'B')}</TickText>
        </g>
      ))}
    </g>

    {children}
  </g>
)
