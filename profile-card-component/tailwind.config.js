module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'card-pattern': "url('/images/bg-pattern-card.svg')",
      }),
      // 19A1AE
      colors: {
        bujingo: '#19A1AE'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
