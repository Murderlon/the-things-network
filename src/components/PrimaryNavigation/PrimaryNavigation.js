import React, { Component } from 'react'
import Downshift from 'downshift'

import Caret from '../../icons/Caret.svg'
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

  render() {
    const { items, activeItem, ...rest } = this.props
    return (
      <Downshift
        {...rest}
        id="PrimaryNavigation"
        itemToString={item => {
          if (item && (item.label || item.link)) {
            if (item.label) {
              return item.label
            } else if (item.link) {
              return item.link
            }
          }
          return ''
        }}
      >
        {({ getItemProps, isOpen, toggleMenu, getRootProps, itemToString }) => (
          <Nav
            {...getRootProps({ refKey: 'innerRef' })}
            breakpoint={this.breakpoint}
          >
            <div>
              {!this.state.shouldDisplayAsRow && (
                <ToggleButton
                  type="button"
                  onClick={toggleMenu}
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                >
                  {itemToString(activeItem)}
                  <Caret />
                </ToggleButton>
              )}
              {isOpen || this.state.shouldDisplayAsRow ? (
                <List breakpoint={this.breakpoint}>
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
            </div>
          </Nav>
        )}
      </Downshift>
    )
  }
}

export default PrimaryNavigation
