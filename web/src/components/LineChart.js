import React from 'react'
import styled from 'styled-components'

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

let getTicks = (axis, numberTicks) =>
  numberTicks ? axis.ticks(numberTicks) : axis.ticks()

export default ({
  x,
  y,
  width,
  height,
  margin,
  title,
  xTickFormat,
  yTickFormat,
  xNumberTicks,
  yNumberTicks,
  children
}) => (
  <g transform={`translate(${margin.left}, ${margin.top})`}>
    <Title
      transform={`translate(${width / 2}, ${-margin.top / 3})`}
      textAnchor="middle"
    >
      {title}
    </Title>

    <g transform={`translate(0, ${height})`} textAnchor="end">
      {getTicks(x, xNumberTicks).map(tick => (
        <g key={tick} transform={`translate(${x(tick)}, 0)`}>
          <TickLine y2={-width} />
          <TickText y="30">{xTickFormat(tick)}</TickText>
        </g>
      ))}
    </g>

    <g>
      {getTicks(y, yNumberTicks).map(tick => (
        <g key={tick} transform={`translate(0, ${y(tick)})`} textAnchor="end">
          <TickLine x2={height} />
          <TickText x="-15">{yTickFormat(tick)}</TickText>
        </g>
      ))}
    </g>

    {children}
  </g>
)
