import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      cursor: {
        magical: "url(/9515.png), auto",
      },      
      colors: {
        background: "var(--background)", // Fallback can be added
        foreground: "var(--foreground)", // Fallback can be added
      },
      keyframes: {
        'light-cone': {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(1.2)' },
        },
      },
      animation: {
        'cone-haze': 'light-cone 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
