import React, { Component } from 'react'
import scrollama from 'scrollama'
import { select } from 'd3-selection'

import OrthographicWorld from 'components/data-visualisation/OrthographicWorld'

import {
  ContentWrapper,
  H2,
  LayoutWrapper,
  MapGraphic,
  Legend
} from './TheThingsNetwork.style'

export default class TheThingsNetwork extends Component {
  state = {
    currentStep: 0
  }

  componentDidMount() {
    this.container = select('#mapScroll')
    this.graphic = this.container.select('.mapGraphic')
    this.text = this.container.select('.mapScrollText')
    this.step = this.text.selectAll('.step')

    this.scroller = scrollama()
    this.handleResize()

    this.scroller
      .setup({
        container: '#mapScroll',
        graphic: '.mapGraphic',
        text: '.mapScrollText',
        step: '.mapScrollText .step',
        offset: 0.7
      })
      .onStepEnter(this.handleStepEnter)

    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
    this.scroller.destroy()
  }

  handleResize = () => {
    let stepHeight = Math.floor(window.innerHeight)

    this.step.style('height', stepHeight + 'px')
    this.graphic.style('top', 0 + 'px')
    this.scroller.resize()
  }

  handleStepEnter = ({ index }) => {
    this.setState({ currentStep: index })
  }

  render() {
    let { currentStep } = this.state

    return (
      <ContentWrapper currentStep={currentStep} as="section" id="mapScroll">
        <H2 id="the-things-network">The Things Network</H2>
        <LayoutWrapper>
          <MapGraphic className="mapGraphic">
            <Legend>
              <p>
                <span /> LoRaWAN gateway (up to 10km range)
              </p>
            </Legend>

            <OrthographicWorld currentStep={currentStep} />
          </MapGraphic>
          <div className="mapScrollText">
            <div className="step" data-step={0}>
              <p>
                Imagine an Internet of Things network build around LoRaWAN that
                is{' '}
                <span className="highlight">
                  created by the people and open for everyone to use.
                </span>
              </p>
            </div>
            <div className="step" data-step={1}>
              <p>
                In 2015, as a proof of concept the city of{' '}
                <span className="highlight">
                  Amsterdam was fully covered in just four weeks.
                </span>{' '}
                However, initially setting up a LoRa network was expensive and
                required a lot of effort.
              </p>
            </div>
            <div className="step" data-step={2}>
              <p>
                The Things Network community then went on a{' '}
                <span className="highlight">mission to crowdsource </span> a
                global open and independent Internet Of Things network —{' '}
                <span className="highlight">and they did.</span>
              </p>
            </div>
            <div className="step" data-step={3} />
          </div>
        </LayoutWrapper>
      </ContentWrapper>
    )
  }
}
