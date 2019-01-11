import React, { Component } from 'react'
import scrollama from 'scrollama'
import { select } from 'd3-selection'
import { scaleLinear, scaleSqrt } from 'd3-scale'
import { extent } from 'd3-array'
import { Spring } from 'react-spring'

import Layout from 'components/Layout'
import ResponsiveChart from 'components/data-visualisation/ResponsiveChart'
import Block from 'components/Block'
import Axis from 'components/data-visualisation/Axis'

import variables from 'styles/variables'

import { H2, SubGrid, Step } from './Protocols.style'

import data from './protocols.json'

export default class Protocols extends Component {
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
    let { protocols } = data
    return (
      <Layout.ParentGrid as="section" id="scroll">
        <Layout.SubGrid fullWidth>
          <H2 id="protocols">Protocols</H2>
          <h3>Internet of Things is powered by its connectivity protocols.</h3>
        </Layout.SubGrid>
        <SubGrid>
          <Block.Primary className="scroll__graphic">
            <ResponsiveChart heightAsWidth>
              {dimensions => {
                let margin = { top: 60, right: 60, bottom: 60, left: 60 }
                let width = dimensions.width - margin.left - margin.right
                let height = dimensions.height - margin.top - margin.bottom
                let xLabels = ['Cheap', 'Mid', 'Expensive']
                let yLabels = ['Low', 'Mid', 'High']
                let { currentStep } = this.state

                let x = scaleLinear()
                  .domain([0, 1])
                  .range([0, width])

                let y = scaleLinear()
                  .domain([0, 1])
                  .range([height, 0])

                let r = scaleSqrt()
                  .domain(extent(protocols.map(({ range }) => range)))
                  .range([10, width / 4])

                let yTickFormat = (tick, index) =>
                  index < 2 ? (
                    yLabels[index]
                  ) : (
                    <>
                      {yLabels[index]}
                      <tspan x="-10" y="20">
                        power
                      </tspan>
                      <tspan x="-10" y="40">
                        usage
                      </tspan>
                    </>
                  )
                let xTickFormat = (tick, index) =>
                  index > 0 ? (
                    xLabels[index]
                  ) : (
                    <>
                      {xLabels[index]}
                      <tspan> recurring costs</tspan>
                    </>
                  )

                return (
                  <Axis
                    width={width}
                    height={height}
                    margin={margin}
                    x={x}
                    y={y}
                    title="Range and power usage vs. recurring costs"
                    xTickFormat={xTickFormat}
                    yTickFormat={yTickFormat}
                    xNumberTicks={3}
                    yNumberTicks={3}
                  >
                    {protocols.map(
                      ({ protocol, cost, powerUsage, range }, i) => (
                        <g
                          key={protocol}
                          fillOpacity={currentStep > i ? 0.3 : 1}
                          transform={`translate(${x(cost)}, ${y(powerUsage)})`}
                        >
                          <Spring
                            from={{ r: currentStep >= i ? 0 : r(range) }}
                            to={{ r: currentStep >= i ? r(range) : 0 }}
                          >
                            {props =>
                              props.r > 0 ? (
                                <circle {...props} fill={variables.green} />
                              ) : null
                            }
                          </Spring>
                          <Spring
                            from={{ opacity: currentStep >= i ? 0 : 1 }}
                            to={{ opacity: currentStep >= i ? 1 : 0 }}
                          >
                            {props => (
                              <text
                                textAnchor={i <= 1 ? 'start' : 'middle'}
                                dx={i <= 1 ? r(range) + 10 : null}
                                dy={5}
                                fill={
                                  i <= 1 ? 'white' : variables.secondaryBlue
                                }
                                style={props}
                              >
                                {protocol}
                              </text>
                            )}
                          </Spring>
                        </g>
                      )
                    )}
                  </Axis>
                )
              }}
            </ResponsiveChart>
          </Block.Primary>
          <Block.Secondary className="scroll__text">
            {protocols.map(
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
