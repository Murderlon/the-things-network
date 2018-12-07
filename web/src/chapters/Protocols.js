import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import scrollama from 'scrollama'
import { select, selectAll } from 'd3-selection'

import Layout from '../components/Layout'
import ResponsiveChart from '../components/ResponsiveChart'
import ProtocolChart from '../components/ProtocolChart'
import ScrolledContext from '../components/ScrolledContext'

import variables from '../styles/variables'

let Skurt = styled(Layout.SubGrid)`
  position: relative;

  .step:first-of-type {
    margin-top: ${variables.spacing.huge};
  }

  .step:last-of-type {
    height: auto !important;
    margin-bottom: ${variables.spacing.xxlarge};
  }

  .scroll__graphic {
    position: sticky;
  }
  .scroll__text {
    position: relative;
  }
`

class Protocols extends Component {
  state = {
    currentStep: 0
  }

  componentDidMount() {
    this.container = select('#scroll')
    this.graphic = this.container.select('.scroll__graphic')
    this.text = this.container.select('.scroll__text')
    this.step = this.text.selectAll('.step')

    this.setupStickyfill()
    this.scroller = scrollama()
    this.handleResize()

    this.scroller
      .setup({
        container: '#scroll',
        graphic: '.scroll__graphic',
        text: '.scroll__text',
        step: '.scroll__text .step',
        offset: 0.5
      })
      .onStepEnter(this.handleStepEnter)
    // setup resize event
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    this.scroller.destroy()
  }

  handleResize = () => {
    let stepHeight = Math.floor(window.innerHeight)
    let graphicHeight = Math.floor(window.innerHeight / 2)
    let graphicMarginTop = Math.floor(graphicHeight / 2)

    this.step.style('height', stepHeight + 'px')
    this.graphic.style('top', graphicMarginTop + 'px')
    this.scroller.resize()
  }

  handleStepEnter = ({ index }) => {
    this.setState({ currentStep: index })
    this.step.classed('is-active', (d, i) => i === index)
  }

  setupStickyfill = () => {
    let Stickyfill = require('stickyfilljs')
    selectAll('.sticky').each(function() {
      Stickyfill.add(this)
    })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            protocolsJson {
              protocols {
                protocol
                description
                powerUsage
                cost
                range
                rangeAsText
                pros
                cons
                useCases
              }
            }
          }
        `}
        render={data => {
          let { protocols } = data.protocolsJson
          return (
            <Layout.ParentGrid as="section" id="scroll">
              <Layout.SubGrid fullWidth>
                <h2 id="protocols">
                  <span>1</span> Protocols
                </h2>
                <h3>
                  Internet of Things is powered by its connectivity protocols.
                </h3>
              </Layout.SubGrid>
              <Skurt>
                <ResponsiveChart>
                  {({ width, height }) => (
                    <ProtocolChart
                      width={width}
                      height={height}
                      data={protocols}
                      currentStep={this.state.currentStep}
                    />
                  )}
                </ResponsiveChart>
                <div className="context scroll__text">
                  {protocols.map((p, i) => (
                    <ScrolledContext key={p.protocol} content={p} index={i} />
                  ))}
                </div>
              </Skurt>
            </Layout.ParentGrid>
          )
        }}
      />
    )
  }
}

export default Protocols
