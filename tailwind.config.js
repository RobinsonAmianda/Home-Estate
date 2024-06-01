/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightgray: "#ddc7bb",
        dimgray: {
          "100": "#695346",
          "200": "#5e4f45",
          "300": "#543e32",
          "400": "#4f3527",
        },
        gray: {
          "100": "#2b1b12",
          "200": "#2a1b12",
        },
        seashell: {
          "100": "#fef7f2",
          "200": "#fbf5f1",
        },
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        lg: "18px",
        "12xs-8": "0.8px",
      },
    },
    fontSize: {
      lg: "18px",
      "3xl": "22px",
      "21xl": "40px",
      "13xl": "32px",
      "5xl": "24px",
      base: "16px",
      xl: "20px",
      sm: "14px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "35xl": "54px",
      "22xl": "41px",
      "49xl": "68px",
      "55xl": "74px",
      inherit: "inherit",
    },
    screens: {
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
