import React from 'react'
import styled from 'styled-components'

import Layout from 'components/Layout'
import Block from 'components/Block'

import { Heading } from 'styles/base-components'
import theThingsNetworkImage from 'assets/the-things-network.jpg'
import Link from 'components/Link'

let H3 = styled(Heading)`
  &::after {
    content: '.03';
    left: -4rem;
  }
`

export default () => (
  <>
    <Layout.SubGrid fullWidth>
      <H3 as="h3">
        The backend systems of The Things Network are responsible for routing
        your encrypted data between devices and applications.
      </H3>
    </Layout.SubGrid>
    <Layout.SubGrid>
      <Block.Primary>
        <img src={theThingsNetworkImage} alt="A rack of servers and cables" />
      </Block.Primary>
      <Block.Secondary>
        <p className="highlight">
          Your are in control of your data with privacy through end-to-end
          encryption.
        </p>
        <p>
          A typical Internet of Things network requires gateways as a bridge
          between specific radio protocols and the Internet. In cases where the
          devices themselves support the IP stack, these gateways only have to
          forward packets to the Internet.
        </p>
        <p>
          Non-IP protocols such as LoRaWAN require some form of routing and
          processing before messages can be delivered to an application.{' '}
          <span className="highlight">
            The Things Network is positioned between the gateways and the
            applications and takes care of these routing and processing steps.
          </span>
        </p>
        <p>
          <Link to="https://www.thethingsnetwork.org/docs/network/security.html">
            More info on security
          </Link>
        </p>
      </Block.Secondary>
    </Layout.SubGrid>
  </>
)
