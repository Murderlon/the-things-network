import React from 'react'
import Downshift from 'downshift'
import styled from 'styled-components'
import { Link } from '@reach/router'

import Caret from '../icons/Caret.svg'

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: ${({ theme }) => theme.overlayBlue};
`

const ListItem = styled.li`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.small};
`

const ToggleButton = styled.button`
  display: block;
  width: 100%;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.small};

  svg {
    margin-left: ${({ theme }) => theme.spacing.small};
    transform: scaleY(-1);
  }
`

const PrimaryNavigation = ({ items, activeItem, ...rest }) => (
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
      <Nav {...getRootProps({ refKey: 'innerRef' })}>
        <div>
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
          {isOpen ? (
            <ul>
              {items.map(item => (
                <ListItem key={item.label}>
                  <Link
                    {...getItemProps({
                      item
                    })}
                    to={item.link}
                  >
                    {itemToString(item)}
                  </Link>
                </ListItem>
              ))}
            </ul>
          ) : null}
        </div>
      </Nav>
    )}
  </Downshift>
)

export default PrimaryNavigation
