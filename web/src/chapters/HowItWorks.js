import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'
import RadioGroup from '../components/RadioGroup'

import theThingsUnoImage from '../assets/the-things-uno.jpg'
import sodaqOneImage from '../assets/sodaq-one.png'
import variables from '../styles/variables'
import { Heading } from '../styles/base-components'

import devices from '../data/devices.json'
import modularScale from '../styles/modular-scale'

let H2 = styled(Heading)`
  &::after {
    content: '3';
  }
`

let Deviceheading = styled(Heading)`
  &::after {
    content: '.01';
    left: -4rem;
  }
`

let GatewayHeading = styled(Heading)`
  &::after {
    content: '.02';
    left: -4rem;
  }
`

let Label = styled.p`
  text-align: center;
  font-family: ${variables.monoTypo};
  color: ${variables.green};
`

let Form = styled.form`
  display: flex;
  justify-content: center;
`

let Table = styled.table`
  margin-top: ${variables.spacing.large};
  border-spacing: 0 0.5em;

  thead th {
    font-family: ${variables.monoTypo};
    font-weight: normal;
    font-size: ${modularScale(1)};
  }
  tr {
    padding: ${variables.spacing.small} 0;
  }

  td:first-of-type {
    color: ${variables.purple};
    text-align: right;
    padding-right: ${variables.spacing.small};
    width: 40%;
  }

  td {
    vertical-align: top;
  }
`

let AlteredLayout = styled(Layout.SubGrid)`
  .context {
    justify-content: flex-start;
  }

  .context,
  > div:not(.context) {
    height: auto;
    padding: ${`${variables.spacing.xxlarge} ${variables.spacing.medium}`};
  }
`

class HowItWorks extends Component {
  deviceOptions = [
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
  ]
  state = { selectedDevice: 'theThingsUno' }

  selectedDeviceChange = ({ target }) => {
    if (this.state.selectedDevice !== target.value) {
      this.setState({ selectedDevice: target.value })
    }
  }

  render() {
    return (
      <Layout.ParentGrid as="section">
        <Layout.SubGrid fullWidth>
          <H2>How it works</H2>
          <Deviceheading as="h3">
            Registered devices to your TTN account intermittently send encrypted
            data over LoRaWAN.
          </Deviceheading>
        </Layout.SubGrid>
        <AlteredLayout alignLeft>
          <div className="context">
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
          </div>
          <div>
            <Label>Click a device:</Label>
            <Form>
              <RadioGroup
                onChange={this.selectedDeviceChange}
                selectedOption={this.state.selectedDevice}
                options={this.deviceOptions}
              />
            </Form>
            <Table>
              <thead>
                <tr>
                  <th colSpan="2">
                    {
                      this.deviceOptions.find(
                        o => o.value === this.state.selectedDevice
                      ).label
                    }
                  </th>
                </tr>
              </thead>
              <tbody>
                {devices[this.state.selectedDevice].map(arr => (
                  <tr key={arr[0]}>
                    <td>{arr[0]}</td>
                    <td>{arr[1]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </AlteredLayout>
        <Layout.SubGrid fullWidth>
          <GatewayHeading as="h3">
            Registered devices to your TTN account intermittently send encrypted
            data over LoRaWAN.
          </GatewayHeading>
        </Layout.SubGrid>
        <AlteredLayout alignLeft>
          <div className="context">
            <p>
              Developers are using The Things Network’s tools and open network
              to build all kinds of value driving applications.
            </p>
          </div>
          <div />
        </AlteredLayout>
      </Layout.ParentGrid>
    )
  }
}
export default HowItWorks
