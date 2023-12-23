import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      "2xl": '1536px',
    },
    extend: {
      colors: {
        bgBlue : "#1c2837",
        bglightBlue: "#253344",
        accentBlue : "#4a90e2", 
        lightBlue: "#263344",
        textRed: "#e55161",
        textGreen: "#9ac555",
        bgBlack: "#0c131c",
        textBlue: "#7d8c9e",
        textWhite: "#f5f5f5",
        textLightBlue: "#a5b7d2",
      },
    },
  },
  plugins: [],
}
export default config
