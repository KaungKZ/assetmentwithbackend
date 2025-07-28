/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      poppins: ["Poppins", "sans-serif"],
      sfpro: ["SF Pro Display", "Helvetica Neue", "sans-serif"],
      playfair: ["Playfair Display", "serif"],
      kalnia: ["var(--font-kalnia)"],
      inter: ["var(--font-inter)"],
      barloNew: ["var(--font-BarloNew)"],
      interNew: ["var(--font-InterNew)"],
      smoothsan: ["var(--font-SmoochSans)"],
    },
    // boxShadow: {
    //   // "shadow-custom": "0 4px 0 rgba(0, 0, 0, 0.1)",
    // },
    container: {
      center: true,
      padding: {
        DEFAULT: "30px",
        "2xl": "100px",
      },
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      half: "50%",
      16: "4rem",
    },
    extend: {
      boxShadow: {
        "bottom-only": "0 1px 0px rgba(204, 204, 204, 0.20)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #004EA1 0%, #4EA4DB 36%, #5EB6E7 80%, #72DBF3 100%)",
      },
      screens: {
        // xs: '360px',
        "3xl": "1640px",
        "3xlmx": { max: "1520px" },
        "2xlmx": { max: "1360px" },
        xlmx: { max: "1280px" },
        // => @media (max-width: 1279px) { ... }
        lgmx: { max: "1024px" },
        // => @media (max-width: 1023px) { ... }
        mdmx: { max: "768px" },
        // => @media (max-width: 767px) { ... }
        smmx: { max: "600px" },
        // => @media (max-width: 639px) { ... }
        xsmmx: { max: "480px" },
      },
      transitionProperty: {
        height: "max-height",
        spacing: "margin, padding",
      },
      colors: {
        primary: "#25abe3",
        bermuda: {
          DEFAULT: "#116487",
          50: "#37B2E5",
          100: "#25ABE3",
          200: "#1889B8",
          300: "#116487",
          400: "#115F7E",
          500: "#0B3F55",
          600: "#051A23",
        },
        bgray: {
          DEFAULT: "#272727",
          50: "#F8F8F8",
          100: "#4f4f4f",
          200: "#272727",
          300: "#333232",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
