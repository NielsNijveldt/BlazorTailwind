/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.{razor,html}', '../BlazorTailwind.Client/**/*.{razor,html}'],
    theme: {
        extend: {
            boxShadow: {
                'top': '0 -1px 2px rgba(0, 0, 0, 0.2);',
            }
        },
        fontFamily: {
            'body': ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        }
      },
    plugins:
    [
    ],
}

