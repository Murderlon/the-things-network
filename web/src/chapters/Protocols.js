import React, { Component } from 'react'

import Layout from '../components/Layout'
import ResponsiveChart from '../components/ResponsiveChart'
import ProtocolChart from '../components/ProtocolChart'
import ScrolledContext from '../components/ScrolledContext'

import data from '../data/protocols.json'

class Protocols extends Component {
  render() {
    return (
      <Layout.ParentGrid as="section">
        <Layout.SubGrid fullWidth>
          <h2 id="protocols">
            <span>1</span> Protocols
          </h2>
          <h3>Internet of Things is powered by its connectivity protocols.</h3>
        </Layout.SubGrid>
        <Layout.SubGrid id="scroll">
          <ResponsiveChart>
            {({ width, height }) => (
              <ProtocolChart
                width={width}
                height={height}
                data={data.protocols}
              />
            )}
          </ResponsiveChart>
          {data.protocols.map((protocol, i) => (
            <ScrolledContext
              key={protocol.protocol}
              content={protocol}
              index={i}
            />
          ))}
        </Layout.SubGrid>
      </Layout.ParentGrid>
    )
  }
}

export default Protocols
