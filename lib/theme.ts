export default {
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  colors: {
    blue: 'blue',
    lightgray: '#f6f6ff',
  },
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
      color: 'white',
      backgroundColor: 'red',
    },
    outline: {
      color: 'red',
      backgroundColor: 'transparent',
      boxShadow: 'inset 0 0 0 2px',
      ':hover': {
        backgroundColor: 'red',
        color: 'white',
        boxShadow: '3px 6px'
      }
    }
  }

}