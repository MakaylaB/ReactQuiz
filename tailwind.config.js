const {fontFamily} = require(`tailwindcss/defaultTheme`)
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
      'brown': '#B6917D',
      'darker-brown':'#705445', 
      'tan': '#EDE5D6', 
      'darkertan':'#CBB099',
      'light-brown': '#B76E22', 
     },
     fontFamily: {
       BebasNeue: ["Bebas Neue", "cursive"],
       Play: ["Playfair Display", "normal"]   },




  },
  plugins: [],
}
}