/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGray: "#222629",
        primaryLime: {
          DEFAULT: "#86C232",
          dark: "#669622",
        },
      },
      maskImage: {
        gradientMask: `linear-gradient(
          to right,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 1) 20%,
          rgba(0, 0, 0, 1) 80%,
          rgba(0, 0, 0, 0)
        )`,
      },
      keyframes: {
        slideLeft: {
          "100%": {
            left: "-150px",
          },
        },
      },
      animation: {
        infiniteSlider: "slideLeft 30s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const maskImageUtilities = Object.entries(theme("maskImage")).map(
        ([key, value]) => {
          return {
            [`.mask-${key}`]: { maskImage: value },
          };
        },
      );

      addUtilities(maskImageUtilities);
    },
  ],
};
