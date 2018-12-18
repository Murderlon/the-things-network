import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Layout from 'components/Layout'
import RadioGroup from 'components/RadioGroup'

import theThingsUnoImage from 'assets/the-things-uno.jpg'
import sodaqOneImage from 'assets/sodaq-one.png'
import devices from 'data/devices.json'

import {
  H2,
  Deviceheading,
  AlteredLayout,
  Label,
  Form,
  Table,
  GatewayHeading,
  Div
} from './HowItWorks.style'

export const query = graphql`
  fragment ContentFragment on MarkdownRemark {
    frontmatter {
      title
      label
      name
      value
      backgroundSrc
    }
    html
  }
`

export default props => (
  <StaticQuery
    query={graphql`
      query {
        parkingSensor: markdownRemark(
          frontmatter: { value: { eq: "parkingSensor" } }
        ) {
          ...ContentFragment
        }
        cowTracking: markdownRemark(
          frontmatter: { value: { eq: "cowTracking" } }
        ) {
          ...ContentFragment
        }
        weatherStation: markdownRemark(
          frontmatter: { value: { eq: "weatherStation" } }
        ) {
          ...ContentFragment
        }
      }
    `}
    render={content => {
      return (
        <HowItWorks
          content={content}
          useCaseOptions={Object.values(content).map(
            ({ frontmatter }) => frontmatter
          )}
          {...props}
        />
      )
    }}
  />
)

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
  state = {
    selectedDevice: 'theThingsUno',
    selectedUseCase: this.props.useCaseOptions[0].value
  }

  selectedDeviceChange = ({ target }) => {
    if (this.state.selectedDevice !== target.value) {
      this.setState({ selectedDevice: target.value })
    }
  }

  selectedUseCaseChange = ({ target }) => {
    if (this.state.selectedStory !== target.value) {
      this.setState({ selectedUseCase: target.value })
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
          </div>
        </AlteredLayout>
        <AlteredLayout alignLeft>
          <div className="context">
            <p>
              Developers are using The Things Network’s tools and open network
              to build all kinds of value driving applications.
            </p>
          </div>
          <div>
            <Label>Click a use case:</Label>
            <Form>
              <RadioGroup
                onChange={this.selectedUseCaseChange}
                selectedOption={this.state.selectedUseCase}
                options={this.props.useCaseOptions}
              />
            </Form>
            <Div
              dangerouslySetInnerHTML={{
                __html: this.props.content[this.state.selectedUseCase].html
              }}
            />
          </div>
        </AlteredLayout>
        <Layout.SubGrid fullWidth>
          <GatewayHeading as="h3">
            Registered devices to your TTN account intermittently send encrypted
            data over LoRaWAN.
          </GatewayHeading>
        </Layout.SubGrid>
      </Layout.ParentGrid>
    )
  }
}
