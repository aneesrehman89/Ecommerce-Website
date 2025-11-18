// Admin panel theme extending the existing website theme
// The admin panel should use the same color scheme and styling as the main website

export const adminTheme = {
  colors: {
    background: '#FFFFFF',
    surface: '#F9FAFB',
    primary: '#1a1a1a',
    secondary: '#6b6b6b',
    border: '#E5E7EB',
    inputBorder: '#D1D5DB',
    inputFocus: '#1a1a1a',
    error: '#EF4444',
    text: {
      primary: '#1a1a1a',
      secondary: '#6b6b6b',
      label: '#374151'
    }
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    heading: {
      fontSize: '1.875rem',
      fontWeight: '700',
      lineHeight: '2.25rem'
    },
    label: {
      fontSize: '0.875rem',
      fontWeight: '500',
      lineHeight: '1.25rem'
    },
    input: {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '1.5rem'
    }
  },
  spacing: {
    formContainer: {
      maxWidth: '24rem',
      padding: '2rem'
    },
    inputGap: '1.5rem',
    labelGap: '0.5rem'
  },
  borderRadius: {
    input: '0.375rem',
    button: '0.375rem',
    container: '0.5rem'
  },
  shadows: {
    card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
  }
};