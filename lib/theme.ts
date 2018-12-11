import {Colors} from './Colors';
export default {
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  colors: {...Colors},
  space: [
    0, 4, 8, 16, 32, 64, 128, 256
  ],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  breakpoints: [
    0, 560, 780, 1200
  ],
  buttons: {
    primary: {
      color: Colors.white,
      backgroundColor: Colors.secondary,
    },
    outline: {
      color: Colors.primaryDark,
      backgroundColor: Colors.white,
      boxShadow: 'inset 0 0 0 2px',
      ':hover': {
        backgroundColor: Colors.primaryDark,
        color: Colors.white,
        boxShadow: 'none',
      }
    }
  },
  cards: {
    primaryLight: {
      backgroundColor: Colors.primaryLight
    },
    primary: {
      backgroundColor: Colors.primary
    },
    secondary: {
      backgroundColor: Colors.secondary
    }
  }

}