import React from 'react'
import styled from 'styled-components'

import variables from '../styles/variables'

let Title = styled.text`
  font-size: 0.9rem;
  fill: ${variables.purple};
`

let TickText = styled.text`
  font-family: ${variables.monoTypo};
  font-size: 0.8rem;
  fill: ${variables.highlightBlue};

  tspan {
    fill: ${variables.purple};
  }
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

    <g transform={`translate(0, ${height})`} textAnchor="middle">
      {getTicks(x, xNumberTicks).map((tick, i) => (
        <g key={tick} transform={`translate(${x(tick)}, 0)`}>
          <TickLine y2={-width} />
          <TickText y="30" x="0">
            {xTickFormat(tick, i)}
          </TickText>
        </g>
      ))}
    </g>

    <g>
      {getTicks(y, yNumberTicks).map((tick, i) => (
        <g key={tick} transform={`translate(0, ${y(tick)})`} textAnchor="end">
          <TickLine x2={height} />
          <TickText x="-15">{yTickFormat(tick, i)}</TickText>
        </g>
      ))}
    </g>

    {children}
  </g>
)
