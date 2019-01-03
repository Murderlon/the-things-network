import React, { Component } from 'react'
import styled from 'styled-components'

import GlobalStyle from 'components/GlobalStyle'
import Layout from 'components/Layout'
import Block from 'components/Block'
import TopicNavigation from 'components/TopicNavigation'
import Link from 'components/Link'
import RadioGroup from 'components/RadioGroup'

import { Table, Heading } from 'styles/base-components'

import variables from 'styles/variables'

import devices from 'data/devices.json'
import theThingsUnoImage from 'assets/the-things-uno.jpg'
import sodaqOneImage from 'assets/sodaq-one.png'
import cowImage from 'assets/cow-tracking.png'
import weatherImage from 'assets/weather-station.jpg'
import parkingImage from 'assets/parking-sensor.png'

let useCases = [
  {
    label: 'Cow tracking',
    name: 'useCases',
    value: 'cowTracking',
    backgroundSrc: cowImage,
    text:
      // eslint-disable-next-line max-len
      'Equipped with a powerful microcontroller, our SODAQ Cattle Tracker is LoRaWAN based device. The board is using the ublox Eva 8m GPS module, giving it a GPS fix within seconds. It can stay in (deep) sleep mode until it moves. A LED light shows the status of the board through the waterproof casing of the tracker.'
  },
  {
    label: 'Parking sensor',
    name: 'useCases',
    value: 'parkingSensor',
    backgroundSrc: parkingImage,
    text:
      // eslint-disable-next-line max-len
      'PrestoSense detectors are installed on on-street parking bays. They not only detect a vehicle’s presence, but also the parking duration of a car. The information is forwarded to the parking operator. He uses the data to analyze the load and turnover rate of his car park and to optimize enforcement. The motorist uses the information directly on his smartphone. The city’s traffic guidance system or the motorist’s GPS system guide him to the next available parking bay.'
  },
  {
    label: 'Industrial wireless micro-weather station',
    name: 'useCases',
    value: 'weatherStation',
    backgroundSrc: weatherImage,
    text:
      // eslint-disable-next-line max-len
      'Using the patented design of helical air temperature measurement technology enables the MeteoHelix professional wireless micro-weather stations to achieve air temperature measurement accuracies to the highest requirements of World Meteorological Organization, therefore making this wireless weather station the most accurate on the market by a wide margin. Designed for professional use, it is affordable enough for most households due to the use of IoT wireless technologies.'
  }
]

let Label = styled.p`
  text-align: center;
  font-family: ${variables.monoTypo};
  color: ${variables.green};
`

let H2 = styled(Heading)`
  &::after {
    content: '3';
  }
`

let Form = styled.form`
  margin: ${variables.spacing.medium} 0;
  > div {
    text-align: center;
  }
`

let CenteredParagraph = styled.p`
  text-align: center;
`

export default class Device extends Component {
  state = { selectedDevice: 'theThingsUno', selectedUseCase: 'cowTracking' }

  selectedDeviceChange = ({ target }) => {
    if (this.state.selectedDevice !== target.value) {
      this.setState({ selectedDevice: target.value })
    }
  }

  selectedUseCaseChange = ({ target }) => {
    if (this.state.selectedUseCase !== target.value) {
      this.setState({ selectedUseCase: target.value })
    }
  }

  render() {
    let selectedUseCase = useCases.find(
      ({ value }) => value === this.state.selectedUseCase
    )

    return (
      <>
        <GlobalStyle />
        <Layout.RootGrid>
          <Layout.ParentGrid>
            <Layout.SubGrid fullWidth>
              <p>
                <Link to="/#how-it-works" iconLeft>
                  back to home
                </Link>
              </p>
              <H2>How it works</H2>
              <h3>
                Registered devices to your TTN account intermittently send
                encrypted data over LoRaWAN.
              </h3>
            </Layout.SubGrid>
            <Layout.SubGrid>
              <Block.Secondary alignLeft>
                <p>
                  <span className="highlight">
                    The Things Network supports any certified LoRaWAN device.
                  </span>
                </p>
                <p>
                  To connect a device it needs to have a LoRaWAN module, either
                  on board, as a shield or wired. Most modules can be talked to
                  via a serial interface. To hide you from the complexity of the
                  commands and responses, some modules come with an SDK
                  (software development kit).
                </p>
                <p>
                  <span className="highlight">
                    Steps to use a device over The Things Network:
                  </span>
                </p>
                <ol>
                  <li>Create a free account</li>
                  <li>Register with an application to communicate with</li>
                  <li>Register your device</li>
                  <li>Setup code & environment variables</li>
                  <li>
                    Send data over LoRaWAN to your integration or application!
                  </li>
                </ol>
              </Block.Secondary>
              <Block.Primary alignLeft withPadding>
                <Label>Example devices:</Label>
                <Form>
                  <RadioGroup
                    onChange={this.selectedDeviceChange}
                    selectedOption={this.state.selectedDevice}
                    options={[
                      {
                        label: 'The Things Uno',
                        name: 'devices',
                        value: 'theThingsUno',
                        backgroundSrc: theThingsUnoImage
                      },
                      {
                        label: 'SODAQ ONE',
                        name: 'devices',
                        value: 'sodaqOne',
                        backgroundSrc: sodaqOneImage
                      }
                    ]}
                  />
                </Form>
                <Table>
                  <thead>
                    <th colspan="2">
                      {devices[this.state.selectedDevice].name}
                    </th>
                  </thead>
                  <tbody>
                    {devices[this.state.selectedDevice].table.map(arr => (
                      <tr key={arr[0]}>
                        <td>{arr[0]}</td>
                        <td>{arr[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Block.Primary>
            </Layout.SubGrid>
            <Layout.SubGrid>
              <Block.Secondary alignLeft centerContent>
                <p>
                  Developers are using The Things Network’s tools and open
                  network to build all kinds of value driving applications.
                </p>
              </Block.Secondary>
              <Block.Primary alignLeft withPadding>
                <Label>Example use cases:</Label>
                <Form>
                  <RadioGroup
                    onChange={this.selectedUseCaseChange}
                    selectedOption={this.state.selectedUseCase}
                    options={useCases}
                  />
                </Form>
                <h4>{selectedUseCase.label}</h4>
                <p>{selectedUseCase.text}</p>
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
