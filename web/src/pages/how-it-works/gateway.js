/* eslint-disable camelcase */
import React, { Component } from 'react'
import styled from 'styled-components'
import { scaleLinear, scaleTime } from 'd3-scale'
import { line, curveCardinal } from 'd3-shape'
import { extent, min, max } from 'd3-array'
import { timeFormat } from 'd3-time-format'
import { format } from 'd3-format'

import GlobalStyle from 'components/GlobalStyle'
import Layout from 'components/Layout'
import ResponsiveChart from 'components/ResponsiveChart'
import Axis from 'components/Axis'
import TextExpand from 'components/TextExpand'
import Block from 'components/Block'
import TopicNavigation from 'components/TopicNavigation'
import Link from 'components/Link'
import RadioGroup from 'components/RadioGroup'
import HeatMap from 'components/data-visualisation/HeatMap'

import { Table, Heading } from 'styles/base-components'
import variables from 'styles/variables'
import modularScale from 'styles/modular-scale'
import gatewayImage from 'assets/the-things-gateway.jpg'

import mockdata from 'data/mockdata.json'

let GatewayHeading = styled(Heading)`
  &::after {
    content: '.02';
    left: -4rem;
  }
`

let H2 = styled(Heading)`
  &::after {
    content: '3';
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

let CenteredParagraph = styled.p`
  text-align: center;
`

class gateway extends Component {
  state = { selectedScale: 'speed' }

  handleSelectedScale = ({ target }) => {
    if (this.state.selectedScale !== target.value) {
      this.setState({ selectedScale: target.value })
    }
  }

  render() {
    let { selectedScale } = this.state
    return (
      <>
        <GlobalStyle />
        <Layout.RootGrid>
          <Layout.ParentGrid as="section">
            <Layout.SubGrid fullWidth>
              <CenteredParagraph>
                <Link to="/#how-it-works" iconLeft>
                  back to home
                </Link>
              </CenteredParagraph>
              <H2>How it works</H2>
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
                        xTickFormat={tick => timeFormat('%b')(tick)}
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
              <Block.Secondary alignLeft>
                <p>
                  <span className="highlight">
                    You can setup your device to be more reliable or faster
                  </span>{' '}
                  and there are three knobs you can turn to influence how you
                  send data.
                </p>
                <p>
                  <span className="highlight">
                    The bandwith is determined by the region
                  </span>{' '}
                  but setting the spreading factor makes it possible to still
                  achieve all possible data rates.
                </p>
                <TextExpand buttonText="1. Transmission power">
                  If you lower the transmission power, you’ll save battery, but
                  the range of the signal will be shorter.
                </TextExpand>
                <TextExpand buttonText="2. Spreading factor">
                  <p>
                    The spreading factors are - in short - the duration of the
                    signal through the air. LoRa operates with spread factors
                    from 7 to 12. SF7 is the shortest time on air, SF12 will be
                    the longest
                  </p>
                  <p>
                    Making the spreading factor 1 step lower (from SF10 to SF9)
                    allows you to send 2x more bytes in the same time.
                  </p>
                  <p>
                    Lowering the spreading factor makes it more difficult for
                    the gateway to receive a transmission, as it will be more
                    sensitive to noise.
                  </p>
                </TextExpand>
                <TextExpand buttonText="3. Bandwidth">
                  <p>
                    LoRaWAN can use channels with a bandwidth of either 125 kHz,
                    250 kHz or 500 kHz
                  </p>
                  <p>
                    Making the bandwidth 2x wider (from BW125 to BW250) allows
                    you to send 2x more bytes in the same time.
                  </p>
                </TextExpand>
              </Block.Secondary>
              <Block.Primary alignLeft>
                <HeatMap isScaleSpeed={selectedScale === 'speed'} />
                <RadioGroup
                  onChange={this.handleSelectedScale}
                  selectedOption={this.state.selectedScale}
                  options={[
                    {
                      label: 'Relative data speed',
                      name: 'datarate',
                      value: 'speed'
                    },
                    {
                      label: 'Global usage',
                      name: 'datarate',
                      value: 'usage'
                    }
                  ]}
                />
              </Block.Primary>
            </Layout.SubGrid>
            <Layout.SubGrid fullWidth>
              <TopicNavigation />
              <CenteredParagraph>
                <Link to="/#how-it-works" iconLeft>
                  back to home
                </Link>
              </CenteredParagraph>
            </Layout.SubGrid>
          </Layout.ParentGrid>
        </Layout.RootGrid>
      </>
    )
  }
}

export default gateway
