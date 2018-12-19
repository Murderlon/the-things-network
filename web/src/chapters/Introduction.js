import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { scaleLinear, scaleTime } from 'd3-scale'
import { line, curveCardinal } from 'd3-shape'
import { extent } from 'd3-array'
import { timeYear } from 'd3-time'

import Layout from '../components/Layout'
import LineChart from '../components/LineChart'
import ResponsiveChart from '../components/ResponsiveChart'
import Tracker from 'components/Tracker'

import { Heading } from '../styles/base-components'
import variables from '../styles/variables'

let H2 = styled(Heading)`
  &::after {
    content: '0';
  }
`

let LinePresent = styled.path`
  fill: none;
  stroke: ${variables.red};
  stroke-width: 5;
`

let LineFuture = styled(LinePresent)`
  stroke-dasharray: 10;
  stroke-opacity: 0.4;
`

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
        ({ year }) => year === new Date().getFullYear()
      )

      return (
        <ResponsiveChart>
          {dimensions => {
            let margin = { top: 60, right: 60, bottom: 60, left: 60 }
            let width = dimensions.width - margin.left - margin.right
            let height = dimensions.height - margin.top - margin.bottom

            let x = scaleTime()
              .domain(data.map(({ year }) => new Date(year)))
              .range([0, width])

            x.ticks(timeYear, 1).map(tick => console.log(x(tick)))

            let y = scaleLinear()
              .domain([0, 100000000000])
              .range([height, 0])

            let lineGenerator = line()
              .x(({ year }) => x(year))
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
                title="IoT global market (billions)"
              >
                <LinePresent
                  d={lineGenerator(data.slice(0, currentYear + 1))}
                />
                <LineFuture d={lineGenerator(data.slice(currentYear))} />
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
      <IoTGlobalMarketChart />
      <div className="context">
        <p>
          From refrigerators to parking spaces to houses, the{' '}
          <span className="highlight">
            Internet of Things is bringing more and more things into the digital
            fold every day
          </span>
          , which will likely make the Internet of Things a multi-trillion
          dollar industry in the near future.
        </p>
      </div>
    </Layout.SubGrid>
  </Layout.ParentGrid>
)

export default Introduction
