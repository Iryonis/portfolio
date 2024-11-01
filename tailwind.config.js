/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: '#FFEAAE'
      },
      fontFamily: {
        philosopher: ['Philosopher', 'sans-serif'],
        lato: ['Lato', 'sans-serif']
      },
      keyframes: {
        button_shining: {
          '0%': {
            'background-color': 'rgba(255, 234, 174, 0.1)'
          },
          '50%': {
            'background-color': 'rgba(255, 234, 174, 0.2)'
          },
          '100%': {
            'background-color': 'rgba(255, 234, 174, 0.1)'
          }
        },
        border_shining: {
          '0%': {
            'border-color': 'rgba(255, 234, 174, 1)'
          },
          '50%': {
            'border-color': 'rgba(255, 234, 174, 0.5)'
          },
          '100%': {
            'border-color': 'rgba(255, 234, 174, 1)'
          }
        },
        text_shining: {
          '0%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.7'
          },
          '100%': {
            opacity: '1'
          }
        },
        skills_button_animation: {
          '100%': {
            'border-top-left-radius': '9999px',
            'border-bottom-left-radius': '9999px',
            'border-top-right-radius': '0px',
            'border-bottom-right-radius': '0px',
            transform: 'translateX(-328%)'
          }
        },
        text_animation: {
          '0%': {
            opacity: '100'
          },
          '35%': {
            opacity: '50'
          },
          '70%': {
            opacity: '0'
          },
          '100%': {
            opacity: '0'
          }
        },
        about_button_animation: {
          '100%': {
            'border-top-left-radius': '0px',
            'border-bottom-left-radius': '0px',
            'border-top-right-radius': '9999px',
            'border-bottom-right-radius': '9999px',
            transform: 'translateX(328%)'
          }
        }
      },
      animation: {
        skills_button_animation: 'skills_button_animation 0.7s ease-in forwards',
        text_animation: 'text_animation 0.7s ease-in forwards',
        about_button_animation: 'about_button_animation 0.7s ease-in forwards',
        button_shining: 'button_shining 1.5s ease-in-out infinite',
        border_shining: 'border_shining 1.5s ease-in-out infinite',
        text_shining: 'text_shining 1.5s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
