/* eslint-disable @typescript-eslint/no-var-requires */
const { nextui } = require("@nextui-org/react")
const { pick, omit } = require("lodash")
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
            50: "#f0f1ff",
            100: "#cfd3fe",
            200: "#b8befd",
            300: "#98a1fc",
            400: "#848efc",
            500: "#6572fb",
            600: "#5c68e4",
            700: "#4851b2",
            800: "#383f8a",
            900: "#2a3069",
            DEFAULT: "#6572fb"
          },
        secondary: "#5c68e4",
        card: {
          50: "#f0f1ff",
          100: "#cfd3fe",
          200: "#b8befd",
          300: "#98a1fc",
          400: "#848efc",
          500: "#6572fb",
          600: "#5c68e4",
          700: "#4851b2",
          800: "#383f8a",
          900: "#2a3069",
          DEFAULT: "#6572fb"
        }
      //   ≈
      //  primaryForeground: {
      //   50: "#f0f1ff",
      //   100: "#cfd3fe",
      //   200: "#b8befd",
      //   300: "#98a1fc",
      //   400: "#848efc",
      //   500: "#6572fb",
      //   600: "#5c68e4",
      //   700: "#4851b2",
      //   800: "#383f8a",
      //   900: "#2a3069",
      // },
      },
      fontFamily: {
        body: [
          "Nunito",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Nunito",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      minHeight: {
        ...defaultTheme.height,
      },
      minWidth: {
        ...defaultTheme.width,
      },
    },
  },
  darkMode: ["class"],
  plugins: [
    nextui(),
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
