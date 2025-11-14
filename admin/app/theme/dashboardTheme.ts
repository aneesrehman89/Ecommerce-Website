// Admin dashboard theme with purple accent color

export const adminDashboardTheme = {
  colors: {
    primary: '#7C3AED', // Purple for headings and icons
    primaryLight: '#E9D5FF', // Light purple for card backgrounds
    background: '#F9FAFB', // Light gray background
    sidebarBg: '#FFFFFF', // White sidebar
    cardBg: '#FFFFFF', // White cards
    text: {
      primary: '#1F2937',
      secondary: '#6B7280',
      heading: '#7C3AED'
    },
    button: {
      logout: '#000000',
      logoutHover: '#1F2937'
    },
    border: '#E5E7EB'
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
    heading: {
      fontSize: '1.875rem',
      fontWeight: '700',
      color: '#7C3AED'
    },
    subheading: {
      fontSize: '1rem',
      fontWeight: '500',
      color: '#6B7280'
    },
    navItem: {
      fontSize: '0.875rem',
      fontWeight: '500'
    }
  },
  spacing: {
    sidebarWidth: '280px',
    cardPadding: '2rem',
    cardGap: '1.5rem'
  },
  borderRadius: {
    card: '12px',
    button: '8px'
  },
  shadows: {
    card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    cardHover: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
  }
};