import React, { Component } from 'react'
import Downshift from 'downshift'

import DropdownIcon from '../../icons/dropdown.svg'
import {
  Nav,
  ToggleButton,
  List,
  ListItem,
  Link
} from './PrimaryNavigation.style'

class PrimaryNavigation extends Component {
  constructor(props) {
    super(props)
    this.state = { shouldDisplayAsRow: null }
    this.breakpoint = '42rem'
    this.mq = window.matchMedia(`(min-width: ${this.breakpoint})`)
  }

  componentDidMount() {
    this.setState({ shouldDisplayAsRow: this.mq.matches })
    this.mq.addListener(this.updateLayout)
  }

  componentWillUnmount() {
    this.mq.removeListener(this.updateLayout)
  }

  updateLayout = ({ matches }) => {
    this.setState({ shouldDisplayAsRow: matches })
  }

  itemToString = item => {
    if (item && (item.label || item.link)) {
      if (item.label) {
        return item.label
      } else if (item.link) {
        return item.link
      }
    }
    return ''
  }

  render() {
    const { items, activeItem, ...rest } = this.props
    return (
      <Downshift
        {...rest}
        id="PrimaryNavigation"
        itemToString={this.itemToString}
      >
        {({
          getItemProps,
          getMenuProps,
          isOpen,
          toggleMenu,
          getRootProps,
          itemToString
        }) => (
          <Nav
            {...getRootProps({ refKey: 'innerRef' })}
            aria-labelledby="primary-navigation"
            breakpoint={this.breakpoint}
          >
            {!this.state.shouldDisplayAsRow && (
              <ToggleButton
                type="button"
                onClick={toggleMenu}
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={isOpen}
              >
                <div>
                  {itemToString(activeItem)}
                  <DropdownIcon />
                </div>
              </ToggleButton>
            )}
            {isOpen || this.state.shouldDisplayAsRow ? (
              <List {...getMenuProps()} breakpoint={this.breakpoint}>
                {items.map(item => (
                  <ListItem key={item.label}>
                    <Link
                      {...getItemProps({
                        item
                      })}
                      to={item.link}
                      breakpoint={this.breakpoint}
                      active={item.link === activeItem.link ? 1 : null}
                    >
                      {itemToString(item)}
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : null}
          </Nav>
        )}
      </Downshift>
    )
  }
}

export default PrimaryNavigation
