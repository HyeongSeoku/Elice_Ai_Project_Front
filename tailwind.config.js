module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: { min: "320px", max: "425px" },
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },

    extend: {
      backgroundImage: {
        youtube_bg: "url('/src/img/youtube_background.png')",
      },
    },
  },
  plugins: [],
};
