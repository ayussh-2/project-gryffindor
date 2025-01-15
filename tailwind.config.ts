import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                Cattedrale: ["var(--font-cattedrale)", ...fontFamily.sans],
                Sholp: ["var(--font-sholp)", ...fontFamily.sans],
                Spirits: ["var(--font-spirits)", ...fontFamily.sans],
            },
            keyframes: {
                "light-cone": {
                    "0%, 100%": { transform: "scaleY(1)" },
                    "50%": { transform: "scaleY(1.2)" },
                },
            },
            screens: {
                ssmd: "460px",
                smd: "485px",
                mmd: "630px",
                llg: "968px",
            },
            animation: {
                "cone-haze": "light-cone 5s ease-in-out infinite",
            },
        },
    },
    plugins: [],
} satisfies Config;
