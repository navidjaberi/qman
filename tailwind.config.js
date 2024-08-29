/** @type {import('tailwindcss').Config} */
import { twColors } from "./utils/tw-colors";
module.exports = {
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      extend: {
        screens: {
          mn: "900px",
        },
      },
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {


      transparent: 'transparent',
      "main-blue": {
        100: "#ADE7FF",
        200: "#70D4FF",
        300: "#47C8FF",
        400: "#0AB6FF",
        500: "#EBF9FF",
        600: "#008FCC",
        700: "#0072A3",
        800: "#00567A",
        900: "#003952",
      },
      green: {
        100: "#B2EAD3",
        200: "#80DCB5",
        300: "#4CCD97",
        400: "#19BF7A",
        500: "#E5F8F0",
        600: "#00A660",
        700: "#00814B",
        800: "#005C35",
        900: "#003720",
      },
      accent: {
        0: "#FFF8EB",
        100: "#FFEAC2",
        200: "#FFD485",
        300: "#FFC65C",
        400: "#FFB833",
        500: "#E5F8F0",
        600: "#F59D66",
        700: "#F3843F",
        800: "#F06B19",
        900: "#D4590D",
      },
      red: {
        50: "#FFEDF0",
        100: "#FFC8D2",
        200: "#FFA3B4",
        300: "#FF7F96",
        400: "#FF5A78",
        500: "#FF4869",
        600: "#E6415E",
        700: "#B3324A",
        800: "#802434",
        900: "#4D1620",
      },
      gray:{
        0:"#FFFFFF",
        100:'#F4F4F6',
        200:'#DEDFE3',
        300:'#C8CAD0',
        400:'#A7AAB4',
        500:'#9195A1',
        600:'#717684',
        700:'#545863',
        800:'#383A42',
        900:'#1C1D21'

      },
      ...twColors
    },
    fontSize: {
      
      'h1-black': ['24px', {
        lineHeight: '32px',
        fontWeight: '900',
      }],
      'h1-bold': ['24px', {
        lineHeight: '32px',
        fontWeight: '700',
      }],
      'h2-black': ['20px', {
        lineHeight: '24px',
        fontWeight: '900',
      }],
      'h2-bold': ['20px', {
        lineHeight: '24px',
        fontWeight: '700',
      }],
      'h3-black': ['18px', {
        lineHeight: '24px',
        fontWeight: '900',
      }],
      'h3-bold': ['18px', {
        lineHeight: '24px',
        fontWeight: '700',
      }],
      'sub1-bold': ['18px', {
        lineHeight: '16px',
        fontWeight: '600',
      }],
      'sub1-normal': ['18px', {
        lineHeight: '16px',
        fontWeight: '400',
      }],
      'sub2-bold': ['16px', {
        lineHeight: '16px',
        fontWeight: '700',
      }],
      'sub2-normal': ['16px', {
        lineHeight: '16px',
        fontWeight: '600',
      }],
      'body1-normal': ['16px', {
        lineHeight: '24px',
        fontWeight: '400',
      }],
      'body2-bold': ['14px', {
        lineHeight: '24px',
        fontWeight: '700',
      }],
      'body2-normal': ['14px', {
        lineHeight: '24px',
        fontWeight: '400',
      }],
      'button1': ['18px', {
        lineHeight: '24px',
        fontWeight: '400',
      }],
      'button2': ['14px', {
        lineHeight: '16px',
        fontWeight: '600',
      }],
    }
  },
  plugins: [],
};
