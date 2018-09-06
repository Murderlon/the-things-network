import React, { Component, Fragment } from 'react'

import PrimaryNavigation from '../components/PrimaryNavigation'

class Page extends Component {
  constructor(props) {
    super(props)
    this.items = [
      { label: 'How it works', link: '/how-it-works' },
      { label: 'Coverage', link: '/coverage' },
      { label: 'Metrics', link: '/metrics' }
    ]
    this.state = {
      activeItem: this.items.find(
        item =>
          this.props.location.pathname === item.link ||
          this.props.location.pathname.includes(item.link)
      )
    }
  }

  handleNavigationChange = item => {
    this.setState({ activeItem: item })
  }

  render() {
    return (
      <Fragment>
        <PrimaryNavigation
          activeItem={this.state.activeItem}
          onChange={this.handleNavigationChange}
          items={this.items}
        />

        {this.props.children}
      </Fragment>
    )
  }
}

export default Page
