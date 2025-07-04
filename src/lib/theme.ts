export const colors = {
  // primary color
  primary: {
    red: '#E91C11',
    redHover: '#D4190F',
  },
  
  // text colors
  text: {
    primary: '#18181B',
    secondary: '#8F8F91',
  },
  
  // background colors
  background: {
    primary: '#FCFCFD',
    white: '#FFFFFF',
  },
  
  // border colors
  border: {
    light: '#E6E6E6',
  },
  
  // state colors
  states: {
    hover: '#F5F5F5',
    active: '#E91C11',
  }
} as const;

// font configuration
export const fonts = {
  // Font families
  family: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  
  // Size configuration
  size: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
  },
  
  // Font weights
  weight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  
  // Line heights
  leading: {
    tight: '1.25',
    normal: '1.5',
    relaxed: '1.75',
  }
} as const;

// Spacing configuration
export const spacing = {
  // General spacing
  base: '1rem',
  
  // Spacing for elements
  navbar: {
    height: '4rem', // 64px
    padding: '1rem',
  },
  
  // Spacing for layout
  container: {
    padding: '1rem',
    maxWidth: '80rem', // 1280px
  }
} as const;

// Border configuration
export const borders = {
  radius: {
    sm: '0.25rem',   // 4px
    base: '0.5rem',  // 8px
    lg: '0.75rem',   // 12px
    xl: '1rem',      // 16px
  },
  
  width: {
    thin: '1px',
    base: '2px',
    thick: '3px',
  }
} as const;

// Shadow configuration
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
} as const;

// Transition configuration
export const transitions = {
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
  },
  
  easing: {
    ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  }
} as const;

// Theme object combining all configurations
export const theme = {
  colors,
  fonts,
  spacing,
  borders,
  shadows,
  transitions,
} as const;

export default theme; 