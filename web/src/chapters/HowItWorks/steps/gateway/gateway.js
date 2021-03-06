/* eslint-disable camelcase */
import React, { Component } from 'react'
import { scaleLinear, scaleTime } from 'd3-scale'
import { line, curveCardinal } from 'd3-shape'
import { extent, min, max } from 'd3-array'
import { timeFormat } from 'd3-time-format'
import { format } from 'd3-format'
import { mouse } from 'd3-selection'
import closestIndexTo from 'date-fns/closest_index_to'

import Layout from 'components/Layout'
import ResponsiveChart from 'components/data-visualisation/ResponsiveChart'
import Axis from 'components/data-visualisation/Axis'
import TextExpand from 'components/TextExpand'
import Block from 'components/Block'
import RadioGroup from 'components/RadioGroup'
import RadioImage from 'components/RadioImage'
import HeatMap from 'components/data-visualisation/HeatMap'
import Tracker from 'components/data-visualisation/Tracker'

import { Table, AxisLabel } from 'styles/base-components'
import variables from 'styles/variables'
import gatewayImage from 'assets/the-things-gateway.jpg'

import dataPackets from 'data/gateway-packets.json'
import { H3, LineGreen, LineRed, Context } from './gateway.style'

class gateway extends Component {
  state = { selectedScale: 'speed', selectedGateway: 'theThingsGateway' }

  handleSelectedScale = ({ target }) => {
    if (this.state.selectedScale !== target.value) {
      this.setState({ selectedScale: target.value })
    }
  }

  handleSelectedGateway = ({ target }) => {
    if (this.state.selectedGateway !== target.value) {
      this.setState({ selectedGateway: target.value })
    }
  }

  render() {
    let { selectedScale } = this.state
    return (
      <>
        <Layout.SubGrid fullWidth>
          <H3 as="h3">
            Distributed and community driven gateways, powered by Ethernet/WiFi,
            provide up to 10km of LoRaWAN coverage.
          </H3>
        </Layout.SubGrid>
        <Layout.SubGrid>
          <Block.Secondary alignLeft centerContent>
            <p>
              <span className="highlight">
                Our network is built by you — the people.
              </span>{' '}
              You can contribute by placing a gateway and expand our network.
              The more gateways are placed, the larger the coverage.
            </p>
            <p>
              The Things Gateway enables devices such as sensors and embedded
              computers to connect to the internet. With an easy to connect
              process, you are creating the most substantial aspect of your IoT
              data network.{' '}
              <span className="highlight">
                Activate the gateway in just 5 minutes and create your own local
                network. With the capacity to serve thousands of nodes, the
                gateway is the main building block of your connected network.{' '}
              </span>
            </p>
          </Block.Secondary>
          <Block.Primary alignLeft withPadding asSecondary>
            <form>
              <RadioImage
                onChange={this.handleSelectedGateway}
                selectedOption={this.state.selectedGateway}
                options={[
                  {
                    label: 'The Things Gateway',
                    name: 'gateways',
                    value: 'theThingsGateway',
                    backgroundSrc: gatewayImage
                  }
                ]}
              />
            </form>
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">The Things Gateway</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Setup</td>
                  <td>Your own LoRaWAN network in as little as 5 minutes</td>
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
                  <td>Easy cloud integration with popular IoT platforms</td>
                </tr>
                <tr>
                  <td>Standards</td>
                  <td>Open source hardware and software</td>
                </tr>
                <tr>
                  <td>XBEE</td>
                  <td>
                    Slot for future connectivity protocols or homebrew add-ons
                  </td>
                </tr>
                <tr>
                  <td>Security</td>
                  <td>
                    HTTPS connection and embedded encryption in the LoRaWAN
                    protocol
                  </td>
                </tr>
                <tr>
                  <td>Load</td>
                  <td>Can serve thousands of nodes (depending on traffic)</td>
                </tr>
              </tbody>
            </Table>
          </Block.Primary>
        </Layout.SubGrid>
        <Layout.SubGrid>
          <Block.Secondary alignLeft centerContent>
            <p className="highlight">
              Global recieved data packets (uplinks/downlinks) by gateways from
              The Things Network
            </p>
            <p>
              Devices send encrypted data to gateways over LoRaWAN, these are
              called <span className="green">uplinks.</span>
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
                let { days } = dataPackets
                let dates = days.map(({ time }) => time)
                let initialPosition = [
                  {
                    x: days[Math.floor(days.length / 2)].time,
                    y: days[Math.floor(days.length / 2)].downlink_count,
                    color: variables.red
                  },
                  {
                    x: days[Math.floor(days.length / 2)].time,
                    y: days[Math.floor(days.length / 2)].uplink_count,
                    color: variables.green
                  }
                ]

                let x = scaleTime()
                  .domain(extent(days.map(({ time }) => new Date(time))))
                  .range([0, width])

                let y = scaleLinear()
                  .domain([
                    min(days.map(({ downlink_count }) => downlink_count)),
                    max(days.map(({ uplink_count }) => uplink_count))
                  ])
                  .range([height, 0])

                let uplinksLineGenerator = line()
                  .x(({ time }) => x(new Date(time)))
                  .y(({ uplink_count }) => y(uplink_count))
                  .curve(curveCardinal)

                let downlinksLineGenerator = line()
                  .x(({ time }) => x(new Date(time)))
                  .y(({ downlink_count }) => y(downlink_count))
                  .curve(curveCardinal)

                let handleMouseMove = ref => {
                  let xValue = x.invert(mouse(ref)[0])
                  let index = closestIndexTo(xValue, dates)

                  return [
                    {
                      x: days[index].time,
                      y: days[index].uplink_count,
                      color: variables.green
                    },
                    {
                      x: days[index].time,
                      y: days[index].downlink_count,
                      color: variables.red
                    }
                  ]
                }

                return (
                  <Axis
                    width={width}
                    height={height}
                    margin={margin}
                    x={x}
                    y={y}
                    xTickFormat={tick => timeFormat('%a %d')(tick)}
                    yTickFormat={tick => format('.1s')(tick)}
                    xNumberTicks={7}
                    textAnchorMiddle
                  >
                    <AxisLabel y="-20" x={-margin.left + 20}>
                      Data packets recieved
                    </AxisLabel>
                    <AxisLabel y={height + 50} x={width - margin.right * 2}>
                      Date ({timeFormat('%B %Y')(new Date(days[0].time))})
                    </AxisLabel>
                    <LineGreen d={uplinksLineGenerator(days)} />
                    <LineRed d={downlinksLineGenerator(days)} />
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
          </Block.Primary>
        </Layout.SubGrid>
        <Layout.SubGrid>
          <Block.Secondary alignLeft>
            <p>
              <span className="highlight">
                You can setup your device to be more reliable or faster
              </span>{' '}
              and there are three knobs you can turn to influence how you send
              data.
            </p>
            <TextExpand buttonText="1. Transmission power">
              If you lower the transmission power, you’ll save battery, but the
              range of the signal will be shorter.
            </TextExpand>
            <TextExpand buttonText="2. Spreading factor">
              <p>
                The spreading factors are - in short - the duration of the
                signal through the air. LoRa operates with spread factors from 7
                to 12. SF7 is the shortest time on air, SF12 will be the longest
              </p>
              <p>
                Making the spreading factor 1 step lower (from SF10 to SF9)
                allows you to send 2x more bytes in the same time.
              </p>
              <p>
                Lowering the spreading factor makes it more difficult for the
                gateway to receive a transmission, as it will be more sensitive
                to noise.
              </p>
            </TextExpand>
            <TextExpand buttonText="3. Bandwidth">
              <p>
                LoRaWAN can use channels with a bandwidth of either 125 kHz, 250
                kHz or 500 kHz
              </p>
              <p>
                Making the bandwidth 2x wider (from BW125 to BW250) allows you
                to send 2x more bytes in the same time.
              </p>
            </TextExpand>
          </Block.Secondary>
          <Block.Primary alignLeft>
            <HeatMap isScaleSpeed={selectedScale === 'speed'} />
            {selectedScale === 'speed' ? (
              <Context>
                <p className="center mono">
                  Bandwidth <span className="highlight">+</span> spreading
                  factor <span className="highlight">=</span> bits/s.
                </p>
                <p>
                  <span className="highlight">
                    The bandwith is determined by the region
                  </span>{' '}
                  but setting the spreading factor makes it possible to still
                  achieve all possible data rates.
                </p>
              </Context>
            ) : (
              <Context>
                <p className="center mono">Percentile global usage</p>
                <p>
                  Gateways only recieve metadata about a packet. These are the
                  settings the users of The Things Network use the most.
                </p>
              </Context>
            )}
            <RadioGroup
              onChange={this.handleSelectedScale}
              selectedOption={this.state.selectedScale}
              options={[
                {
                  label: 'Theoretical',
                  name: 'datarate',
                  value: 'speed'
                },
                {
                  label: 'Usage',
                  name: 'datarate',
                  value: 'usage'
                }
              ]}
            />
          </Block.Primary>
        </Layout.SubGrid>
      </>
    )
  }
}

export default gateway
