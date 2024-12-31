/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  darkMode: "class",
  theme: {
    /** Define Screen Resolution */
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    extend: {
      /** Define Custom Colors */
      colors: {
        primary: '#423A8B',
        secondary: '#00CCCD',
        accent: '#BDC4F0',
        warning: '#FFC107',
        success: '#DC3545',
        danger: '#198754',
        info: '#0D6EFD',
      },
      /** Define Custom Font Family */
      fontFamily: {
        inherit: 'inherit',
        default: ['Poppins', 'sans-serif'],
        alt: ['Inter', 'sans-serif']
      },
      /** Define Custom Font Size */
      fontSize: {
        inherit: 'inherit'
      },
      /** Define Custom Line Height */
      lineHeight: {
        inherit: 'inherit'
      },
    },
  },
  corePlugins: {
    filter: false,
    /** Define Opacity */
    textOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
    preflight: false,
  }
}