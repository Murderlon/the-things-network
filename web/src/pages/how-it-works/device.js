import React from 'react'
import styled from 'styled-components'

import GlobalStyle from 'components/GlobalStyle'
import Layout from 'components/Layout'
import Block from 'components/Block'

import variables from 'styles/variables'
import modularScale from 'styles/modular-scale'
import { Table, Heading } from 'styles/base-components'

import devices from 'data/devices.json'
import TheThingsUnoSVG from 'assets/the-things-uno.svg'

let TheThingsUno = styled(TheThingsUnoSVG)`
  display: block;
  margin: 0 auto;
`

let Deviceheading = styled(Heading)`
  &::after {
    content: '.01';
    left: -4rem;
  }
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
export default () => (
  <>
    <GlobalStyle />
    <Layout.RootGrid>
      <Layout.ParentGrid>
        <Layout.SubGrid fullWidth>
          <Deviceheading as="h3">
            Registered devices to your TTN account intermittently send encrypted
            data over LoRaWAN.
          </Deviceheading>
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
          <Block.Primary alignLeft asSecondary>
            <ContextHeading>
              <span>Example device:</span>
              <span>The Things Uno</span>
            </ContextHeading>
            <TheThingsUno />
            <Table>
              <tbody>
                {devices['theThingsUno'].table.map(arr => (
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
          <Block.Secondary alignLeft>
            <p>
              Developers are using The Things Network’s tools and open network
              to build all kinds of value driving applications.
            </p>
          </Block.Secondary>
          <Block.Primary alignLeft />
        </Layout.SubGrid>
      </Layout.ParentGrid>
    </Layout.RootGrid>
  </>
)
