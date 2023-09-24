/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'cursive': ['Brush Script MT, Brush Script Std, cursive'],
      'nunito': ['nunito', 'sans-serif'],
      'sans': ['normal normal normal 48px/1.4em forum,serif'],
      'sans2': ['playfair display,serif'],
      'poppines': ['poppins-bold'],
      'poppines2': ['poppins-extralight'],
      'cursive2': ['Caveat', 'cursive'],
      'waterfall': ['Waterfall', 'cursive'],
    },

    letterSpacing: {
      'tightest': '.15em'
    },
    screens: {
      'xs': '380px',
      'sm': '520px',
      'lsm': '640px',
      'md': '750px',
      'mdl': '860px',
      'lg': '1024px',
      'lgl': '1140px',
      'xl': '1280px',
      'xxl': '1380px',
      '2xl': '1536px'
    }
  },
  plugins: [],
}
