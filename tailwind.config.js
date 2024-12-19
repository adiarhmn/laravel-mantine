import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                blue: {
                    50: "#e4f7ff",
                    100: "#d1e9fe",
                    200: "#a4d0f6",
                    300: "#74b6ef",
                    400: "#4da0e9",
                    500: "#3392e6",
                    600: "#228be6",
                    700: "#1078cd",
                    800: "#006bb9",
                    900: "#005ca4",
                },
            },
        },
    },

    plugins: [forms],
};
