/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        tomato: "#ff725e",
        darkslateblue: {
          "100": "#1e5fab",
          "200": "#4d2c5e",
        },
        gainsboro: "#d9d9d9",
        black: "#000",
        linen: "#f2eade",
        gray: {
          "100": "#8c8b8b",
          "200": "rgba(30, 30, 30, 0.96)",
          "300": "rgba(0, 0, 0, 0.3)",
        },
        royalblue: "#367cff",
        lightskyblue: "#a9c7ff",
        lightsteelblue: "#9faabe",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        roboto: "Roboto",
        kanit: "Kanit",
      },
      borderRadius: {
        lgi: "19px",
        "2xl": "21px",
        "3xs": "10px",
        "18xl": "37px",
        "2xs": "11px",
        "54xl-5": "73.5px",
        "25xl": "44px",
      },
    },
    fontSize: {
      base: "16px",
      "17xl": "36px",
      xl: "20px",
      sm: "14px",
      "5xl": "24px",
      "3xl": "22px",
      "45xl": "64px",
      smi: "13px",
      "29xl": "48px",
      "13xl": "32px",
      "11xl": "30px",
      "21xl": "40px",
      "15xl": "34px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
