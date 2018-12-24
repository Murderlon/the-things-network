import { createGlobalStyle } from 'styled-components'

import fonts from 'styles/global/fonts'
import base from 'styles/global/base'
import typography from 'styles/global/typography'

export default createGlobalStyle`
  ${fonts};
  ${base};
  ${typography};
`
