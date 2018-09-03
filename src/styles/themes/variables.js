import modularScale from '../helpers/modular-scale'

const variables = {
  spacing: {
    xxsmall: modularScale(-8),
    xsmall: modularScale(-4),
    small: modularScale(-2),
    medium: modularScale(0),
    large: modularScale(2),
    xlarge: modularScale(4),
    xxlarge: modularScale(6),
    huge: modularScale(8),
    enormous: modularScale(10)
  },
  transitionDuration: '150ms',
  timingFunction: 'cubic-bezier(0.5, 0 , 0.5, 1)'
}

export default variables
