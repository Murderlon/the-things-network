import { css } from 'styled-components'

export const boxShadow = ({ theme }) => css`
  box-shadow: 0 -1px 1px 0 ${theme.overlayBlue},
    0 1px 1px 0 ${theme.overlayBlue}, 0 2px 2px 0 ${theme.overlayBlue},
    0 4px 4px 0 ${theme.overlayBlue};
`
