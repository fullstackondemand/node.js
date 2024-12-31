/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
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
      /** Define Custom Spacing */
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        xxl: '40px',
      }
    },
  }
}