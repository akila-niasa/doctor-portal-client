module.exports = {
  // content: [],
  content: ["./src/**/*.{html,js}"],
  
  daisyui: {
    themes: [
      {
        doctorstheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#6b8de3",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
  // plugins: [],
  plugins: [require("daisyui")],
}