import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { scaleLinear, scaleTime } from 'd3-scale'
import { line, curveCardinal } from 'd3-shape'
import { extent } from 'd3-array'
import { timeFormat } from 'd3-time-format'
import { format } from 'd3-format'

import Layout from 'components/Layout'
import LineChart from 'components/LineChart'
import ResponsiveChart from 'components/ResponsiveChart'
import Tracker from 'components/Tracker'
import Block from 'components/Block'

import { LinePresent, LineFuture, H2 } from './Introduction.style'

let IoTGlobalMarketChart = () => (
  <StaticQuery
    query={graphql`
      query {
        ioTJson {
          years {
            year
            value
          }
        }
      }
    `}
    render={({ ioTJson }) => {
      let data = ioTJson.years
      let currentYear = ioTJson.years.findIndex(
        ({ year }) => new Date(year).getFullYear() === new Date().getFullYear()
      )

      return (
        <ResponsiveChart heightAsWidth>
          {dimensions => {
            let margin = { top: 60, right: 60, bottom: 60, left: 60 }
            let width = dimensions.width - margin.left - margin.right
            let height = dimensions.height - margin.top - margin.bottom

            let x = scaleTime()
              .domain(extent(data.map(({ year }) => new Date(year))))
              .range([0, width])

            let y = scaleLinear()
              .domain([0, Math.pow(10, 11)]) // 100 billion
              .range([height, 0])

            let lineGenerator = line()
              .x(({ year }) => x(new Date(year)))
              .y(({ value }) => y(value))
              .curve(curveCardinal)

            return (
              <LineChart
                data={ioTJson.years}
                width={width}
                height={height}
                margin={margin}
                x={x}
                y={y}
                xTickFormat={tick => timeFormat('%y')(new Date(tick))}
                yTickFormat={tick => format('.2s')(tick).replace(/G/, 'B')}
                title="IoT global market (billions)"
              >
                <LinePresent
                  d={lineGenerator(data.slice(0, currentYear + 1))}
                />
                <LineFuture d={lineGenerator(data.slice(currentYear))} />
                <Tracker
                  initialPosition={data[currentYear]}
                  width={width}
                  height={height}
                  x={x}
                  y={y}
                />
              </LineChart>
            )
          }}
        </ResponsiveChart>
      )
    }}
  />
)

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
