/* eslint-disable camelcase */
import React from 'react'
import styled from 'styled-components'
import { readableColor } from 'polished'
import flattenDeep from 'lodash.flattendeep'
import { Spring } from 'react-spring'
import { scaleBand, scaleSequential } from 'd3-scale'
import { interpolateLab } from 'd3-interpolate'
import { extent } from 'd3-array'
import { format } from 'd3-format'

import ResponsiveChart from 'components/data-visualisation/ResponsiveChart'
import BandAxis from './BandAxis'

import variables from 'styles/variables'
import data from 'data/bandwidth-vs-spreadingFactor.json'

let TickText = styled.text`
  font-family: ${variables.monoTypo};
  font-size: 0.8rem;
  fill: ${({ fill = variables.highlightBlue }) => fill};
`

let TickConditionalText = styled(TickText)`
  fill: ${({ backgroundColor }) => readableColor(backgroundColor)};
`

let { bandwidths } = data

let sfExtent = flattenDeep(
  bandwidths.map(({ spreadingFactors }) =>
    spreadingFactors.map(({ uplinks, downlinks }) => uplinks + downlinks)
  )
)
let total = sfExtent.reduce((acc, value) => acc + value, 0)

let dataRates = [
  [5470, 3125, 1760, 980, 440, 250],
  [11000],
  [21900, 12500, 7000, 3900, 1760, 980]
]

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
          .domain([7, 8, 9, 10, 11, 12])
          .range([0, width])

        let y = scaleBand()
          .domain(bandwidths.map(({ mhz }) => mhz))
          .range([height, 0])

        let scaleUsage = scaleSequential(
          interpolateLab('#f3f0ff', '#845ef7')
        ).domain(extent(sfExtent))

        let scaleSpeed = scaleSequential(
          interpolateLab('#f3f0ff', '#845ef7')
        ).domain(extent(flattenDeep(dataRates)))

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
            {bandwidths.map(({ spreadingFactors }, BWIndex) =>
              dataRates[BWIndex].map((speed, SFIndex) => {
                let usage = spreadingFactors[SFIndex]
                  ? spreadingFactors[SFIndex].uplinks +
                    spreadingFactors[SFIndex].downlinks
                  : 0

                let translate = `translate(
                  ${Math.round(x.step() * SFIndex)},
                  ${Math.round((y.step() / 2) * BWIndex + rectWidth / 2)})`

                let relativeUsage = Math.ceil((100 / total) * usage)

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
                      from={{
                        number: isScaleSpeed ? relativeUsage : speed
                      }}
                      to={{
                        number: isScaleSpeed ? speed : relativeUsage
                      }}
                    >
                      {({ number, opacity }) => (
                        <TickConditionalText
                          backgroundColor={scaleUsage(usage)}
                          dy={rectWidth / 2 + 5}
                          dx={rectWidth / 2}
                          textAnchor="middle"
                          fillOpacity={opacity}
                        >
                          {isScaleSpeed
                            ? format('.2s')(number)
                            : `${Math.round(number)}%`}
                        </TickConditionalText>
                      )}
                    </Spring>
                  </g>
                )
              })
            )}
          </BandAxis>
        )
      }}
    </ResponsiveChart>
  )
}
