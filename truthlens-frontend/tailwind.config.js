/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                neon: "#22c55e",
                darkbg: "#050816",
                darkcard: "#0b1020",
                darkborder: "rgba(255,255,255,0.08)",
            },
            boxShadow: {
                neon: "0 0 30px rgba(34, 197, 94, 0.18)",
            },
            backgroundImage: {
                heroGlow: "radial-gradient(circle at 20% 20%, rgba(34,197,94,0.12), transparent 30%), radial-gradient(circle at 80% 30%, rgba(59,130,246,0.10), transparent 28%), radial-gradient(circle at 60% 80%, rgba(34,197,94,0.08), transparent 25%)",
            },
        },
    },
    plugins: [],
};