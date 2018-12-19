import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { scaleLinear, scaleTime } from 'd3-scale'
import { line, curveCardinal } from 'd3-shape'

import Layout from 'components/Layout'
import ResponsiveChart from 'components/ResponsiveChart'
import LineChart from 'components/LineChart'
import RadioGroup from 'components/RadioGroup'

import theThingsUnoImage from 'assets/the-things-uno.jpg'
import sodaqOneImage from 'assets/sodaq-one.png'
import gatewayImage from 'assets/the-things-gateway.jpg'

import devices from 'data/devices.json'
import mockdata from 'data/mockdata.json'

import {
  H2,
  Deviceheading,
  AlteredLayout,
  Label,
  Form,
  Table,
  GatewayHeading,
  GatewayImage,
  Div,
  LineFuture,
  LinePresent
} from './HowItWorks.style'

export let query = graphql`
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
            Distributed and community driven gateways, powered by Ethernet/WiFi,
            provide up to 10km of LoRaWAN coverage.
          </GatewayHeading>
        </Layout.SubGrid>
        <AlteredLayout alignLeft isStatic>
          <div className="context">
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
          </div>
          <div>
            <GatewayImage src={gatewayImage} alt="The Things Gateway" />
            <Div>
              <Table>
                <thead>
                  <tr>
                    <th colSpan="2">
                      <span>Example gateway:</span>
                      <span>The Things Gateway</span>
                    </th>
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
            </Div>
          </div>
        </AlteredLayout>
        <Layout.SubGrid alignLeft>
          <div className="context" />
          <ResponsiveChart>
            {dimensions => {
              let margin = { top: 60, right: 60, bottom: 60, left: 60 }
              let width = dimensions.width - margin.left - margin.right
              let height = dimensions.height - margin.top - margin.bottom

              let x = scaleTime()
                .domain(mockdata.data.map(({ date }) => date))
                .range([0, width])

              let y = scaleLinear()
                .domain([0, 30000000])
                .range([height, 0])

              let uplinksLineGenerator = line()
                .x(({ date }) => x(date))
                .y(({ uplinks }) => y(uplinks))
                .curve(curveCardinal)

              let downlinksLineGenerator = line()
                .x(({ date }) => x(date))
                .y(({ downlinks }) => y(downlinks))
                .curve(curveCardinal)

              return (
                <LineChart
                  width={width}
                  height={height}
                  margin={margin}
                  x={x}
                  y={y}
                  title="IoT global market (billions)"
                >
                  <LinePresent d={uplinksLineGenerator(mockdata.data)} />
                  <LineFuture d={downlinksLineGenerator(mockdata.data)} />
                </LineChart>
              )
            }}
          </ResponsiveChart>
        </Layout.SubGrid>
      </Layout.ParentGrid>
    )
  }
}
