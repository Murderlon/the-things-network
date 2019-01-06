import React from 'react'
import styled from 'styled-components'

import GlobalStyle from 'components/GlobalStyle'
import Layout from 'components/Layout'
import Block from 'components/Block'
import TopicNavigation from 'components/TopicNavigation'
import Link from 'components/Link'

import { Heading } from 'styles/base-components'
import theThingsNetworkImage from 'assets/the-things-network.jpg'

let H2 = styled(Heading)`
  &::after {
    content: '3';
  }
`

let H3 = styled(Heading)`
  &::after {
    content: '.03';
    left: -4rem;
  }
`

const application = () => {
  return (
    <>
      <GlobalStyle />
      <Layout.RootGrid>
        <Layout.ParentGrid>
          <Layout.SubGrid fullWidth>
            <p className="center">
              <Link to="/#how-it-works" iconLeft>
                back to home
              </Link>
            </p>
            <H2>How it works</H2>
            <H3 as="h3">
              The backend systems of The Things Network are responsible for
              routing your encrypted data between devices and applications.
            </H3>
          </Layout.SubGrid>
          <Layout.SubGrid>
            <Block.Primary>
              <img
                src={theThingsNetworkImage}
                alt="A rack of servers and cables"
              />
            </Block.Primary>
            <Block.Secondary>
              <p className="highlight">
                Your are in control of your data with privacy through end-to-end
                encryption.
              </p>
              <p>
                A typical Internet of Things network requires gateways as a
                bridge between specific radio protocols and the Internet. In
                cases where the devices themselves support the IP stack, these
                gateways only have to forward packets to the Internet.
              </p>
              <p>
                Non-IP protocols such as LoRaWAN require some form of routing
                and processing before messages can be delivered to an
                application.{' '}
                <span className="highlight">
                  The Things Network is positioned between the gateways and the
                  applications and takes care of these routing and processing
                  steps.
                </span>
              </p>
            </Block.Secondary>
          </Layout.SubGrid>
          <Layout.SubGrid>
            <Block.Primary />
            <Block.Secondary>
              <p>Amount of traffic per region from the past three months.</p>
            </Block.Secondary>
          </Layout.SubGrid>
          <Layout.SubGrid fullWidth>
            <TopicNavigation />
            <p className="center">
              <Link to="/#how-it-works" iconLeft>
                back to home
              </Link>
            </p>
          </Layout.SubGrid>
        </Layout.ParentGrid>
      </Layout.RootGrid>
    </>
  )
}

export default application
