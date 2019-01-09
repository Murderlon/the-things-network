import React from 'react'
import styled from 'styled-components'

import Layout from 'components/Layout'
import Block from 'components/Block'
import Link from 'components/Link'

import { Heading } from 'styles/base-components'
import applicationImage from 'assets/application.jpg'

let H3 = styled(Heading)`
  &::after {
    content: '.04';
    left: -4rem;
  }
`

export default () => (
  <>
    <Layout.SubGrid fullWidth>
      <H3 as="h3">The application of your choosing.</H3>
    </Layout.SubGrid>
    <Layout.SubGrid>
      <Block.Primary>
        <img src={applicationImage} alt="A man and a woman pair programming" />
      </Block.Primary>
      <Block.Secondary>
        <p className="highlight">
          The Things Network Stack is designed as a LoRaWAN solution to be
          integrated in applications, using industry standard protocols.
        </p>
        <p>
          There are multiple options to integrate applications with The Things
          Network, ranging from working directly with APIs, via more friendly
          SDKs or click- and-run Platform Integrations.
        </p>
        <p>
          Platform Integrations are full integrations with external IoT
          platforms to synchronize the device registry and uplink and downlink
          data, so you don’t need to write code or use The Things Network
          Console. External IoT platform are for example Azure IoT Hub, AWS IoT
          and IBM Watson IoT, where the user manages application and devices
          while the integration process takes care of synchronizing with The
          Things Network.
        </p>
        <p>
          <Link to="https://www.thethingsnetwork.org/docs/applications/">
            explore integrations
          </Link>
        </p>
      </Block.Secondary>
    </Layout.SubGrid>
  </>
)
