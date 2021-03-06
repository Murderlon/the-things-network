/* eslint-disable max-len */
import modularScale from '../styles/modular-scale'

let variables = {
  green: '#78FEE0',
  red: '#FB6F9E',
  purple: '#6d6db5',
  primaryBlue: '#292B44',
  secondaryBlue: '#1F2033',
  highlightBlue: '#7BA7FD',
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
  timingFunction: 'cubic-bezier(0.5, 0 , 0.5, 1)',
  mainTypo:
    "'Fira Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  monoTypo: '"input-mono-condensed", monospace'
}

export default variables
