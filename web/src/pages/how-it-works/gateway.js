/* eslint-disable camelcase */
import React, { Component } from 'react'
import styled from 'styled-components'
import { scaleLinear, scaleTime, scaleBand, scaleSequential } from 'd3-scale'
import { line, curveCardinal } from 'd3-shape'
import { extent, min, max } from 'd3-array'
import { interpolateLab } from 'd3-interpolate'
import flattenDeep from 'lodash.flattendeep'
import { Spring } from 'react-spring'
import { timeFormat } from 'd3-time-format'
import { format } from 'd3-format'
import { readableColor } from 'polished'

import GlobalStyle from 'components/GlobalStyle'
import Layout from 'components/Layout'
import ResponsiveChart from 'components/ResponsiveChart'
import Axis from 'components/Axis'
import TextExpand from 'components/TextExpand'
import Block from 'components/Block'

import { Table, Heading } from 'styles/base-components'
import variables from 'styles/variables'
import modularScale from 'styles/modular-scale'
import gatewayImage from 'assets/the-things-gateway.jpg'

import mockdata from 'data/mockdata.json'
import bandwidth from 'data/bandwidth.json'

let GatewayHeading = styled(Heading)`
  &::after {
    content: '.02';
    left: -4rem;
  }
`

let Div = styled.div`
  margin: ${variables.spacing.medium} auto;

  @media screen and (min-width: 60rem) {
    width: 30vw;
  }

  ul {
    list-style: inside;
  }
`

let GatewayImage = styled.img`
  width: 10vw;
  height: 10vw;
  border-radius: 50%;
  margin: 0 auto;
  object-fit: cover;
`

let LineGreen = styled.path`
  fill: none;
  stroke: ${variables.green};
  stroke-width: 5;
`

let LineRed = styled(LineGreen)`
  stroke: ${variables.red};
`

let ContextHeading = styled.h4`
  text-align: center;

  span {
    font-family: ${variables.monoTypo};
    font-weight: normal;
    display: block;
  }
  span:nth-of-type(1) {
    font-size: ${modularScale(-1)};
    font-family: ${variables.mainTypo};
    color: ${variables.purple};
  }
`

let TickText = styled.text`
  font-family: ${variables.monoTypo};
  font-size: 0.8rem;
  fill: ${({ fill = variables.highlightBlue }) => fill};
`

let TickLine = styled.line`
  stroke: ${variables.purple};
  stroke-opacity: 0.4;
`

let TickConditionalText = styled(TickText)`
  fill: ${({ backgroundColor }) => readableColor(backgroundColor)};
`

let AxisLabel = styled(TickText)`
  fill: ${variables.purple};
`

class gateway extends Component {
  state = {
    dataRateExponent: 3,
    previousDataRateExponent: 0
  }

  handleDataRateClick = dataRateExponent => {
    if (this.state.dataRateExponent !== dataRateExponent) {
      this.setState({
        dataRateExponent,
        previousDataRateExponent: this.state.dataRateExponent
      })
    }
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Layout.RootGrid>
          <Layout.ParentGrid as="section">
            <Layout.SubGrid fullWidth>
              <GatewayHeading as="h3">
                Distributed and community driven gateways, powered by
                Ethernet/WiFi, provide up to 10km of LoRaWAN coverage.
              </GatewayHeading>
            </Layout.SubGrid>
            <Layout.SubGrid>
              <Block.Secondary alignLeft centerContent>
                <p>
                  <span className="highlight">
                    Our network is built by you — the people.
                  </span>{' '}
                  You can contribute by placing a gateway and expand our
                  network. The more gateways are placed, the larger the
                  coverage.
                </p>
                <p>
                  The Things Gateway enables devices such as sensors and
                  embedded computers to connect to the internet. With an easy to
                  connect process, you are creating the most substantial aspect
                  of your IoT data network.{' '}
                  <span className="highlight">
                    Activate the gateway in just 5 minutes and create your own
                    local network. With the capacity to serve thousands of
                    nodes, the gateway is the main building block of your
                    connected network.{' '}
                  </span>
                </p>
              </Block.Secondary>
              <Block.Primary alignLeft asSecondary>
                <ContextHeading>
                  <span>Example gateway:</span>
                  <span>The Things Gateway</span>
                </ContextHeading>
                <GatewayImage src={gatewayImage} alt="The Things Gateway" />
                <Div>
                  <Table>
                    <tbody>
                      <tr>
                        <td>Setup</td>
                        <td>
                          Your own LoRaWAN network in as little as 5 minutes
                        </td>
                      </tr>
                      <tr>
                        <td>Connection</td>
                        <td>Connects easily to your WiFi or Ethernet </td>
                      </tr>
                      <tr>
                        <td>Range</td>
                        <td>Up to 10 km (6 miles) </td>
                      </tr>
                      <tr>
                        <td>Integrations</td>
                        <td>
                          Easy cloud integration with popular IoT platforms
                        </td>
                      </tr>
                      <tr>
                        <td>Standards</td>
                        <td>Open source hardware and software</td>
                      </tr>
                      <tr>
                        <td>XBEE</td>
                        <td>
                          Slot for future connectivity protocols or homebrew
                          add-ons
                        </td>
                      </tr>
                      <tr>
                        <td>Security</td>
                        <td>
                          HTTPS connection and embedded encryption in the
                          LoRaWAN protocol
                        </td>
                      </tr>
                      <tr>
                        <td>Load</td>
                        <td>
                          Can serve thousands of nodes (depending on traffic)
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Div>
              </Block.Primary>
            </Layout.SubGrid>
            <Layout.SubGrid>
              <Block.Secondary alignLeft centerContent>
                <p>
                  Devices send encrypted data to gateways over LoRaWAN, these
                  are called <span className="green">uplinks.</span>
                </p>
                <p>
                  Applications can respond or send data to a device, these are
                  called <span className="red">downlinks.</span>
                </p>
              </Block.Secondary>
              <Block.Primary alignLeft>
                <ResponsiveChart heightAsWidth>
                  {dimensions => {
                    let margin = { top: 60, right: 60, bottom: 60, left: 60 }
                    let width = dimensions.width - margin.left - margin.right
                    let height = dimensions.height - margin.top - margin.bottom
                    let { data } = mockdata

                    let x = scaleTime()
                      .domain(extent(data.map(({ date }) => new Date(date))))
                      .range([0, width])

                    let y = scaleLinear()
                      .domain([
                        min(data.map(({ downlinks }) => downlinks)),
                        max(data.map(({ uplinks }) => uplinks))
                      ])
                      .range([height, 0])

                    let uplinksLineGenerator = line()
                      .x(({ date }) => x(new Date(date)))
                      .y(({ uplinks }) => y(uplinks))
                      .curve(curveCardinal)

                    let downlinksLineGenerator = line()
                      .x(({ date }) => x(new Date(date)))
                      .y(({ downlinks }) => y(downlinks))
                      .curve(curveCardinal)

                    return (
                      <Axis
                        width={width}
                        height={height}
                        margin={margin}
                        x={x}
                        y={y}
                        title="Amount of uplinks/downlinks from the past three months"
                        xTickFormat={tick => timeFormat('%b')(new Date(tick))}
                        yTickFormat={tick => format('.2s')(tick)}
                        xNumberTicks={3}
                      >
                        <LineGreen d={uplinksLineGenerator(data)} />
                        <LineRed d={downlinksLineGenerator(data)} />
                      </Axis>
                    )
                  }}
                </ResponsiveChart>
              </Block.Primary>
            </Layout.SubGrid>
            <Layout.SubGrid>
              <Block.Secondary alignLeft centerContent>
                <h4>
                  There are three knobs you can turn: transmission power,
                  bandwidth and spreading factor.
                  <TextExpand buttonText="What is the transmission power?">
                    If you lower the transmission power, you’ll save battery,
                    but the range of the signal will be shorter.
                  </TextExpand>
                </h4>
              </Block.Secondary>
              <Block.Primary alignLeft>
                <ResponsiveChart heightAsWidth>
                  {dimensions => {
                    let margin = {
                      top: 60,
                      right: 60,
                      bottom: dimensions.height / 2,
                      left: 60
                    }
                    let width = dimensions.width - margin.left - margin.right
                    let height = dimensions.width - margin.top - margin.bottom
                    let { bandwidths } = bandwidth
                    let spreadingFactors = bandwidths.map(
                      ({ spreading_factors }) =>
                        spreading_factors.map(
                          ({ spreading_factor }) => spreading_factor
                        )
                    )
                    let sfExtent = flattenDeep(
                      bandwidths.map(({ spreading_factors }) =>
                        spreading_factors.map(
                          ({ uplinks, downlinks }) => uplinks + downlinks
                        )
                      )
                    )
                    let total = sfExtent.reduce((acc, value) => acc + value, 0)
                    let rectWidth = width / 8

                    let x = scaleBand()
                      .domain(
                        flattenDeep(spreadingFactors).sort((a, b) => a - b)
                      )
                      .range([0, width])

                    let y = scaleBand()
                      .domain(bandwidths.map(({ mhz }) => mhz))
                      .range([height, 0])

                    let c = scaleSequential(
                      interpolateLab('#f3f0ff', '#845ef7')
                    ).domain(extent(sfExtent))

                    return (
                      <g transform={`translate(${margin.left}, ${margin.top})`}>
                        <AxisLabel x={0} y={10}>
                          Bandwidth (kHz)
                        </AxisLabel>

                        <AxisLabel
                          x={width}
                          y={height + margin.top}
                          textAnchor="end"
                        >
                          Spreading factor
                        </AxisLabel>

                        <g
                          transform={`translate(0, ${height})`}
                          textAnchor="start"
                        >
                          {x.domain().map((tick, i) => (
                            <g
                              key={tick}
                              transform={`translate(${Math.round(
                                x.step() * i + width / 20
                              )}, 0)`}
                            >
                              <TickLine />
                              <TickText y="30">{tick}</TickText>
                            </g>
                          ))}
                        </g>

                        <g>
                          {y.domain().map((tick, i) => (
                            <g
                              key={tick}
                              transform={`translate(0, ${Math.round(
                                y.step() * i + rectWidth
                              )})`}
                              textAnchor="end"
                            >
                              <TickLine />
                              <TickText x="-15">{tick}</TickText>
                            </g>
                          ))}
                        </g>
                        {bandwidths.map((bw, BWIndex) => {
                          let sorted = bw.spreading_factors.sort(
                            (a, b) => a.spreading_factor - b.spreading_factor
                          )
                          return sorted.map(
                            (
                              { spreading_factor, uplinks, downlinks },
                              SFIndex
                            ) => {
                              return (
                                <g
                                  onClick={() =>
                                    this.handleDataRateClick(
                                      BWIndex + 6 - SFIndex
                                    )
                                  }
                                  key={(spreading_factor += BWIndex)}
                                  transform={`translate(${Math.round(
                                    x.step() * SFIndex
                                  )}, ${Math.round(
                                    y.step() * BWIndex + rectWidth / 2
                                  )})`}
                                >
                                  <rect
                                    width={rectWidth}
                                    height={rectWidth}
                                    fill={c(uplinks + downlinks)}
                                  />
                                  <TickConditionalText
                                    backgroundColor={c(uplinks + downlinks)}
                                    dy={rectWidth / 2 + 5}
                                    dx={rectWidth / 2}
                                    textAnchor="middle"
                                  >
                                    {Math.round(
                                      (100 / total) * (uplinks + downlinks)
                                    )}
                                    %
                                  </TickConditionalText>
                                </g>
                              )
                            }
                          )
                        })}
                        <g
                          transform={`translate(0, ${dimensions.height / 2 +
                            40})`}
                        >
                          <TickText fill="white" x={0} y={0}>
                            Relative data rate speed
                          </TickText>
                          <rect
                            height={10}
                            width={width}
                            fill="#b197fc"
                            fillOpacity={0.3}
                            y={10}
                          />
                          <Spring
                            from={{
                              width:
                                (width / Math.pow(2, 8)) *
                                Math.pow(2, this.state.previousDataRateExponent)
                            }}
                            to={{
                              width:
                                (width / Math.pow(2, 8)) *
                                Math.pow(2, this.state.dataRateExponent)
                            }}
                          >
                            {props => (
                              <rect
                                {...props}
                                height={10}
                                y={10}
                                fill="#b197fc"
                              />
                            )}
                          </Spring>
                        </g>
                      </g>
                    )
                  }}
                </ResponsiveChart>
              </Block.Primary>
            </Layout.SubGrid>
          </Layout.ParentGrid>
        </Layout.RootGrid>
      </>
    )
  }
}

export default gateway
