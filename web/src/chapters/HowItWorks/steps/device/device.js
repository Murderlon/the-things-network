import React, { Component } from 'react'

import Layout from 'components/Layout'
import Block from 'components/Block'
import Link from 'components/Link'
import RadioImage from 'components/RadioImage'

import { Table } from 'styles/base-components'

import devices from 'data/devices.json'
import theThingsUnoImage from 'assets/the-things-uno.jpg'
import sodaqOneImage from 'assets/sodaq-one.png'
import useCases from './use-cases'

import { H3, Form } from './device.style'

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
        <Layout.SubGrid fullWidth>
          <H3 as="h3">
            Registered devices to your TTN account intermittently send encrypted
            data over LoRaWAN.
          </H3>
        </Layout.SubGrid>
        <Layout.SubGrid>
          <Block.Secondary alignLeft>
            <p>
              <span className="highlight">
                The Things Network supports any certified LoRaWAN device.
              </span>
            </p>
            <p>
              To connect a device it needs to have a LoRaWAN module, either on
              board, as a shield or wired. Most modules can be talked to via a
              serial interface. To hide you from the complexity of the commands
              and responses, some modules come with an SDK (software development
              kit).
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
          <Block.Primary alignLeft withPadding asSecondary>
            <Form>
              <RadioImage
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
                <tr>
                  <th colSpan="2">{devices[this.state.selectedDevice].name}</th>
                </tr>
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
            <p className="center">
              <Link
                to={
                  this.state.selectedDevice === 'theThingsUno'
                    ? 'https://www.thethingsnetwork.org/marketplace/product/the-things-uno'
                    : 'https://www.thethingsnetwork.org/marketplace/product/sodaq-one'
                }
              >
                more info
              </Link>
            </p>
          </Block.Primary>
        </Layout.SubGrid>
        <Layout.SubGrid>
          <Block.Secondary alignLeft centerContent>
            <p>
              Developers are using The Things Network’s tools and open network
              to build all kinds of value driving applications.
            </p>
          </Block.Secondary>
          <Block.Primary alignLeft withPadding asSecondary>
            <Form>
              <RadioImage
                onChange={this.selectedUseCaseChange}
                selectedOption={this.state.selectedUseCase}
                options={useCases}
              />
            </Form>
            <h4>{selectedUseCase.label}</h4>
            <p>{selectedUseCase.text}</p>
            <p className="center">
              <Link to={selectedUseCase.link}>more info</Link>
            </p>
          </Block.Primary>
        </Layout.SubGrid>
      </>
    )
  }
}
