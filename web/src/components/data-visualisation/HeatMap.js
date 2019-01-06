/* eslint-disable camelcase */
import React from 'react'
import styled from 'styled-components'
import { readableColor } from 'polished'
import flattenDeep from 'lodash.flattendeep'
import { Spring, config } from 'react-spring'
import { scaleBand, scaleSequential } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import { extent } from 'd3-array'

import ResponsiveChart from 'components/data-visualisation/ResponsiveChart'
import BandAxis from './BandAxis'

import variables from 'styles/variables'
import bandwidth from 'data/bandwidth.json'

let TickText = styled.text`
  font-family: ${variables.monoTypo};
  font-size: 0.8rem;
  fill: ${({ fill = variables.highlightBlue }) => fill};
`

let TickConditionalText = styled(TickText)`
  fill: ${({ backgroundColor }) => readableColor(backgroundColor)};
`

let { bandwidths } = bandwidth
let spreadingFactors = bandwidths.map(({ spreading_factors }) =>
  spreading_factors.map(({ spreading_factor }) => spreading_factor)
)
let sfExtent = flattenDeep(
  bandwidths.map(({ spreading_factors }) =>
    spreading_factors.map(({ uplinks, downlinks }) => uplinks + downlinks)
  )
)
let total = sfExtent.reduce((acc, value) => acc + value, 0)

export default ({ isScaleSpeed }) => {
  return (
    <ResponsiveChart heightAsHalfWidth>
      {dimensions => {
        let margin = {
          top: 80,
          right: 60,
          bottom: 60,
          left: 60
        }
        let width = dimensions.width - margin.left - margin.right
        let height = dimensions.width - margin.top - margin.bottom
        let rectWidth = width / 8

        let x = scaleBand()
          .domain(flattenDeep(spreadingFactors).sort((a, b) => a - b))
          .range([0, width])

        let y = scaleBand()
          .domain(bandwidths.map(({ mhz }) => mhz))
          .range([height, 0])

        let scaleUsage = scaleSequential(
          interpolateLab('#f3f0ff', '#845ef7')
        ).domain(extent(sfExtent))

        let scaleSpeed = scaleSequential(
          interpolateLab('#f3f0ff', '#845ef7')
        ).domain([Math.pow(2, 1), Math.pow(2, 8)])

        return (
          <BandAxis
            x={x}
            y={y}
            width={width}
            height={height}
            margin={margin}
            rectWidth={rectWidth}
            yLabel="Bandwidth (kHz)"
            xLabel="Spreading factor"
          >
            {bandwidths.map((bw, BWIndex) => {
              let sorted = bw.spreading_factors.sort(
                (a, b) => a.spreading_factor - b.spreading_factor
              )
              return Array.from({ length: 6 }).map((_, SFIndex) => {
                let speed = Math.pow(2, BWIndex + (6 - SFIndex))
                let usage = sorted[SFIndex]
                  ? sorted[SFIndex].uplinks + sorted[SFIndex].downlinks
                  : 0
                let translate = `translate(${Math.round(
                  x.step() * SFIndex
                )}, ${Math.round((y.step() / 2) * BWIndex + rectWidth / 2)})`
                let relativeUsage = Math.round((100 / total) * usage)
                let relativeSpeed = Math.round((100 / Math.pow(2, 8)) * speed)

                return (
                  <g key={(SFIndex += BWIndex)} transform={translate}>
                    <Spring
                      from={{
                        fill: isScaleSpeed
                          ? scaleUsage(usage)
                          : scaleSpeed(speed),
                        fillOpacity:
                          !isScaleSpeed || relativeUsage > 0 ? 1 : 0.5
                      }}
                      to={{
                        fill: isScaleSpeed
                          ? scaleSpeed(speed)
                          : scaleUsage(usage),
                        fillOpacity: isScaleSpeed || relativeUsage > 0 ? 1 : 0.5
                      }}
                    >
                      {props => (
                        <rect width={rectWidth} height={rectWidth} {...props} />
                      )}
                    </Spring>
                    <Spring
                      config={config.slow}
                      from={{
                        number: isScaleSpeed ? relativeUsage : relativeSpeed
                      }}
                      to={{
                        number: isScaleSpeed ? relativeSpeed : relativeUsage
                      }}
                    >
                      {props => (
                        <TickConditionalText
                          backgroundColor={scaleUsage(usage)}
                          dy={rectWidth / 2 + 5}
                          dx={rectWidth / 2}
                          textAnchor="middle"
                          fillOpacity={props.opacity}
                        >
                          {Math.round(props.number)}%
                        </TickConditionalText>
                      )}
                    </Spring>
                  </g>
                )
              })
            })}
          </BandAxis>
        )
      }}
    </ResponsiveChart>
  )
}
