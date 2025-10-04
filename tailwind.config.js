export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cream-white': '#FEFEFE',
        'soft-gray': '#F8F9FA',
        'light-teal': '#E0F2F1',
        'muted-blue': '#B0E0E6',
        'text-dark': '#2C2C2C',
        'text-medium': '#6B7280',
        'text-light': '#9CA3AF',
        'accent-teal': '#4FD1C7',
        'warm-brown': '#8B4513',
        'rose-pink': '#F8BBD9',
        'mint-green': '#A8E6CF',
        'lavender': '#DDA0DD',
        'gold': '#FFD700'
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif']
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite'
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        shimmer: {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        }
      }
    },
  },
  plugins: [],
}
