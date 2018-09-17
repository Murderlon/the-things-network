import React, { Component, Fragment } from 'react'

import PrimaryNavigation from './PrimaryNavigation/PrimaryNavigation'

class PageWrapper extends Component {
  constructor(props) {
    super(props)
    this.PrimaryNavItems = [
      { label: 'How it works', link: '/how-it-works' },
      { label: 'Coverage', link: '/coverage' },
      { label: 'Metrics', link: '/metrics' }
    ]
    this.state = {
      activePrimaryNavItem: this.PrimaryNavItems.find(item => {
        const { pathname } = this.props.location
        return pathname === item.link || pathname.includes(item.link)
      })
    }
  }

  handlePrimaryNavChange = item => {
    this.setState({ activePrimaryNavItem: item })
  }

  render() {
    return (
      <Fragment>
        <header>
          <PrimaryNavigation
            activeItem={this.state.activePrimaryNavItem}
            onChange={this.handlePrimaryNavChange}
            items={this.PrimaryNavItems}
          />
        </header>
        <main>{this.props.children}</main>
      </Fragment>
    )
  }
}

export default PageWrapper
