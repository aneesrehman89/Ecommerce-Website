/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'saya-beige': '#f5e8d3',
        'saya-cream': '#faf6f0',
        'saya-black': '#1a1a1a',
        'saya-gray': '#6b6b6b',
        'saya-light-gray': '#f5f5f5',
        'saya-red': '#ef4444',
        'saya-gold': '#d4af37',
        // Checkout page colors
        'alibaba-orange': '#FF6A00',
        'alibaba-orange-hover': '#E65F00',
        'alibaba-orange-light': '#FFF5F0',
        'checkout-gray-50': '#FAFAFA',
        'checkout-gray-100': '#F5F5F5',
        'checkout-gray-200': '#E5E5E5',
        'checkout-gray-300': '#D4D4D4',
        'checkout-gray-600': '#525252',
        'checkout-gray-900': '#171717',
        'security-green': '#16A34A',
        'security-green-light': '#F0FDF4',
        'border-default': '#E5E5E5',
        'border-selected': '#FF6A00',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 4px 12px rgba(0, 0, 0, 0.12)',
        'checkout-card': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'checkout-card-hover': '0 2px 8px rgba(0, 0, 0, 0.15)',
        'selected': '0 0 0 2px #FF6A00',
      },
      borderRadius: {
        'checkout-card': '8px',
        'checkout-button': '6px',
        'checkout-badge': '4px',
      },
    },
  },
  plugins: [],
};