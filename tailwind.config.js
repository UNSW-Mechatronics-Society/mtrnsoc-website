module.exports = {
  mode: "jit",
  purge: false,
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#29ABE3",
        secondary: "#231F20",
      },
    },
  },
  plugins: [],
};
