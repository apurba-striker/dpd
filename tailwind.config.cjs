/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [
    require('@tailwindcss/typography')
  ],
  theme: {
    extend: {
      colors: {
        customPrimary: "rgb(99, 102, 241)",
        customSecondary: "rgb(161, 163, 247)",
        customDarkBg1: "#8AC1FA",
        customDarkBg2: "#8AC1FA",
        customDarkBg3: "#8AC1FA",
        customDarkBg3Hover: "rgb(55, 56, 62)",
        customContentSubtitle: "rgb(178, 184, 205)",
        customGrayBorder: "rgb(255,255,255,0.1)",
        customGrayText: "rgb(174, 178, 183)",
        customDarkBgTransparent: "rgb(31, 32, 35, 0.7)",
        customDarkBgTransparentDarker: "rgb(0,0,0,0.5)",
        customDarkBgTransparentLighter: "rgb(48, 49, 54, 0.7)",
      },
      fontFamily: {
        Inter: "Inter",
        abc: ["Red Hat Display", "sans-serif"],
        abd: ["Red Hat Text", "sans-serif"],
      },
      screens: {
        xxs: "350px",
        xs: "530px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xll: "1400px",
        "2xl": "1536px",
      },
      rotate: {
        "-180": "-180deg",
        "-90": "-90deg",
        "-45": "-45deg",
        0: "0",
        45: "45deg",
        90: "90deg",
        135: "135deg",
        180: "180deg",
        270: "270deg",
        60: "60deg",
        55: "55deg",
        35: "35deg",
        20: "20deg",
      },
    },
  },
};
