/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                customLightPink: "#f3d0f8",
                customPink: "#e25ed9",
                customPurple: "#8b5ce0",
                customOrange: "#fb7d55",
            },
            fontSize: {
                "10xl": "9rem",
                "11xl": "10rem",
                "12xl": "11rem",
                "13xl": "12rem",
                "14xl": "13rem",
                "15xl": "14rem",
                "16xl": "15rem",
                "17xl": "16rem",
                "18xl": "17rem",
                "19xl": "18rem",
                "20xl": "19rem",
                "21xl": "20rem",
                "22xl": "21rem",
                "23xl": "22rem",
                "24xl": "23rem",
                "25xl": "24rem",
            },
        },
    },
    plugins: [],
}
