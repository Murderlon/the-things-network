import React from 'react'
import { scaleLinear, scaleTime } from 'd3-scale'
import { line, curveCardinal } from 'd3-shape'
import { extent } from 'd3-array'
import { timeFormat } from 'd3-time-format'
import { format } from 'd3-format'
import { mouse } from 'd3-selection'
import closestIndexTo from 'date-fns/closest_index_to'

import Layout from 'components/Layout'
import Axis from 'components/data-visualisation/Axis'
import ResponsiveChart from 'components/data-visualisation/ResponsiveChart'
import Tracker from 'components/data-visualisation/Tracker'
import Block from 'components/Block'

import { AxisLabel } from 'styles/base-components'
import variables from 'styles/variables'
import { LinePresent, LineFuture, H2 } from './Introduction.style'

import data from './iot-global-market.json'

let IoTGlobalMarketChart = () => {
  let { years } = data
  let currentYear = years.findIndex(
    ({ year }) => new Date(year).getFullYear() === new Date().getFullYear()
  )

  return (
    <ResponsiveChart heightAsWidth>
      {dimensions => {
        let margin = { top: 60, right: 60, bottom: 60, left: 60 }
        let width = dimensions.width - margin.left - margin.right
        let height = dimensions.height - margin.top - margin.bottom
        let dates = years.map(({ year }) => year)
        let initialPosition = [
          {
            x: years[currentYear].year,
            y: years[currentYear].value,
            color: variables.red
          }
        ]

        let x = scaleTime()
          .domain(extent(years.map(({ year }) => new Date(year))))
          .range([0, width])

        let y = scaleLinear()
          .domain([0, Math.pow(10, 11)]) // 100 billion
          .range([height, 0])

        let lineGenerator = line()
          .x(({ year }) => x(new Date(year)))
          .y(({ value }) => y(value))
          .curve(curveCardinal)

        let handleMouseMove = ref => {
          let xValue = x.invert(mouse(ref)[0])
          let index = closestIndexTo(xValue, dates)

          return [
            {
              x: years[index].year,
              y: years[index].value,
              color: variables.red
            }
          ]
        }

        return (
          <Axis
            data={years}
            width={width}
            height={height}
            margin={margin}
            x={x}
            y={y}
            xTickFormat={(tick, i) => timeFormat(i > 0 ? "'%y" : '%Y')(tick)}
            yTickFormat={tick => format('.2s')(tick).replace(/G/, 'B')}
            title="IoT global market"
            textAnchorMiddle
          >
            <AxisLabel y="-30" x={-50}>
              Billions
            </AxisLabel>
            <AxisLabel y={height + 50} x={width - margin.right / 2}>
              Years
            </AxisLabel>
            <LinePresent d={lineGenerator(years.slice(0, currentYear + 1))} />
            <LineFuture d={lineGenerator(years.slice(currentYear))} />
            <Tracker
              initialPosition={initialPosition}
              handleMouseMove={handleMouseMove}
              width={width}
              height={height}
              x={x}
              y={y}
            />
          </Axis>
        )
      }}
    </ResponsiveChart>
  )
}

let Introduction = () => (
  <Layout.ParentGrid as="section">
    <Layout.SubGrid fullWidth>
      <H2 id="introduction">Introduction</H2>
      <h3>
        Internet of Things is transforming the everyday physical objects that
        surround us into an ecosystem of information that will enrich our lives.{' '}
      </h3>
    </Layout.SubGrid>
    <Layout.SubGrid>
      <Block.Primary>
        <IoTGlobalMarketChart />
      </Block.Primary>
      <Block.Secondary centerContent>
        <p>
          From refrigerators to parking spaces to houses, the{' '}
          <span className="highlight">
            Internet of Things is bringing more and more things into the digital
            fold every day
          </span>
          , which will likely make the Internet of Things a multi-trillion
          dollar industry in the near future.
        </p>
      </Block.Secondary>
    </Layout.SubGrid>
  </Layout.ParentGrid>
)

export default Introduction
