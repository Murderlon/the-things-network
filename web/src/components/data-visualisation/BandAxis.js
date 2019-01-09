import React from 'react'
import styled from 'styled-components'

import variables from 'styles/variables'
import { AxisLabel } from 'styles/base-components'

let TickText = styled.text`
  font-family: ${variables.monoTypo};
  font-size: 0.8rem;
  fill: ${({ fill = variables.highlightBlue }) => fill};
`

export default ({
  x,
  y,
  width,
  height,
  margin,
  children,
  rectWidth,
  xLabel,
  yLabel
}) => (
  <g transform={`translate(${margin.left}, ${margin.top})`}>
    <AxisLabel x={0} y={10}>
      {yLabel}
    </AxisLabel>

    <AxisLabel x={width} y={height / 2 + margin.top} textAnchor="end">
      {xLabel}
    </AxisLabel>

    <g transform={`translate(0, ${height / 2})`} textAnchor="start">
      {x.domain().map((tick, i) => (
        <g
          key={tick}
          transform={`translate(${Math.round(x.step() * i + width / 20)}, 0)`}
        >
          <TickText y="40">{tick}</TickText>
        </g>
      ))}
    </g>

    <g>
      {y.domain().map((tick, i) => (
        <g
          key={tick}
          transform={`translate(0, ${Math.round(
            (y.step() / 2) * i + rectWidth
          )})`}
          textAnchor="end"
        >
          <TickText x="-15">{tick}</TickText>
        </g>
      ))}
    </g>

    {children}
  </g>
)
