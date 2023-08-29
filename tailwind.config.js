/** @type {import('tailwindcss').Config} */
export default {
    mode: "jit",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primaryGray: "#222629",
                primaryLime: {
                    DEFAULT: "#86C232",
                    dark: "#669622",
                },
            },
        },
    },
    plugins: [],
};
