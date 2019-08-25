import { Colors } from "./Colors";
import { Breakpoints } from "./Breakpoints";
export default {
  fontSizes: [12, 14, 16, 20, 22, 24],
  colors: { ...Colors },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: "system-ui, sans-serif",
    mono: "Menlo, monospace"
  },
  breakpoints: [Breakpoints.small, Breakpoints.medium, Breakpoints.large],
  textStyles: {
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.15em"
    },
    link: {
      color: Colors.link
    },
    error: {
      color: Colors.danger
    }
  },
  buttons: {
    primary: {
      color: Colors.white,
      backgroundColor: Colors.primaryDark
    },
    primaryRounded: {
      color: Colors.white,
      backgroundColor: Colors.primary,
      borderRadius: "10em"
    },
    outline: {
      color: Colors.primaryDark,
      backgroundColor: Colors.white,
      border: `2px solid ${Colors.primaryDark}`,

      ":hover:enabled": {
        backgroundColor: Colors.primaryDark,
        color: Colors.white
      }
    },
    outlineRounded: {
      color: Colors.primaryDark,
      backgroundColor: Colors.white,
      border: `2px solid ${Colors.primaryDark}`,
      borderRadius: "10em",

      ":hover:enabled": {
        backgroundColor: Colors.primaryDark,
        color: Colors.white
      }
    },
    success: {
      color: Colors.white,
      backgroundColor: Colors.success,
      ":hover:enabled": {
        borderColor: Colors.successBorderHover
      },
      ":active": {
        borderColor: Colors.successBorderActive,
        backgroundColor: Colors.successActive
      }
    },
    danger: {
      backgroundColor: Colors.danger,
      color: Colors.white,
      ":active": {
        backgroundColor: Colors.dangerActive
      }
    },
    warning: {
      backgroundColor: Colors.warning,
      color: Colors.white,
      ":active": {
        backgroundColor: Colors.warningActive
      }
    },
    info: {
      backgroundColor: Colors.info,
      color: Colors.white,
      ":active": {
        backgroundColor: Colors.infoActive
      }
    },
    light: {
      backgroundColor: Colors.light,
      color: Colors.white,
      ":active": {
        backgroundColor: Colors.lightActive
      }
    },
    dark: {
      backgroundColor: Colors.dark,
      color: Colors.white,
      ":active": {
        backgroundColor: Colors.darkActive
      }
    }
  }
};
