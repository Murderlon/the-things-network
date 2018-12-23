import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import scrollama from 'scrollama'
import { select } from 'd3-selection'

import Layout from 'components/Layout'
import ResponsiveChart from 'components/ResponsiveChart'
import ProtocolChart from 'components/ProtocolChart'
import Block from 'components/Block'

import { H2, SubGrid, Step } from './Protocols.style'

export default () => (
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
      return <Protocols data={protocols} />
    }}
  />
)

class Protocols extends Component {
  state = {
    currentStep: 0
  }

  componentDidMount() {
    this.container = select('#scroll')
    this.graphic = this.container.select('.scroll__graphic')
    this.text = this.container.select('.scroll__text')
    this.step = this.text.selectAll('.step')

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
    let graphicMarginTop = Math.floor(graphicHeight / 3)

    this.step.style('height', stepHeight + 'px')
    this.graphic.style('top', graphicMarginTop + 'px')
    this.scroller.resize()
  }

  handleStepEnter = ({ index }) => {
    this.setState({ currentStep: index })
  }

  render() {
    return (
      <Layout.ParentGrid as="section" id="scroll">
        <Layout.SubGrid fullWidth>
          <H2 id="protocols">Protocols</H2>
          <h3>Internet of Things is powered by its connectivity protocols.</h3>
        </Layout.SubGrid>
        <SubGrid>
          <Block.Primary className="scroll__graphic">
            <ResponsiveChart heightAsWidth>
              {({ width, height }) => (
                <ProtocolChart
                  width={width}
                  height={height}
                  data={this.props.data}
                  currentStep={this.state.currentStep}
                />
              )}
            </ResponsiveChart>
          </Block.Primary>
          <Block.Secondary className="scroll__text">
            {this.props.data.map(
              ({
                protocol,
                description,
                rangeAsText,
                pros,
                cons,
                useCases
              }) => (
                <Step key={protocol} className="step">
                  <h4>{protocol}</h4>
                  <p>{description}</p>
                  <p className="range">
                    <span /> {rangeAsText} meters range
                  </p>
                  <h5>Pros</h5>
                  <ul>
                    {pros.map(p => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <h5>Cons</h5>
                  <ul>
                    {cons.map(c => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <h5>Example use cases</h5>
                  <ul>
                    {useCases.map(u => (
                      <li key={u}>{u}</li>
                    ))}
                  </ul>
                </Step>
              )
            )}
          </Block.Secondary>
        </SubGrid>
      </Layout.ParentGrid>
    )
  }
}
