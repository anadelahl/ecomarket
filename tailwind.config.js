/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      backgroundImage: {
				'custom-fondo': "url('/img/fondo.png')",
			},
    },
  },
  plugins: [],
}

