/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    patterns: {
      opacities: {
        100: "1",
        80: ".80",
        60: ".60",
        40: ".40",
        20: ".20",
        10: ".10",
        5: ".05",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        6: "1.5rem",
        8: "2rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
      },
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        main: "#EAB183",
        overlay: "rgba(0,0,0,0.8)", // background color overlay for alert dialogs, modals, etc.

        // light mode
        bg: "#FEF2E8",
        text: "#000",
        border: "#000",

        // dark mode
        darkBg: "#374151",
        darkText: "#eeefe9",
        darkBorder: "#000",
        secondaryBlack: "#212121", // opposite of plain white, not used pitch black because borders and box-shadows are that color
      },
      borderRadius: {
        base: "5px",
      },
      boxShadow: {
        light: "4px 4px 0px 0px #000",
        dark: "4px 4px 0px 0px #000",
      },
      translate: {
        boxShadowX: "4px",
        boxShadowY: "4px",
        reverseBoxShadowX: "-4px",
        reverseBoxShadowY: "-4px",
      },
      fontWeight: {
        base: "500",
        heading: "700",
      },
      animation: {
        marquee: "marquee 5s linear infinite",
        marquee2: "marquee2 5s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-bg-patterns")],
};
