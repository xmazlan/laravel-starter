const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            {
                'light': { // custom theme
                    'primary'          : '#00ccff',
                    'primary-focus'    : '#00aaff',
                    'primary-content'  : '#ffffff',
                },
                'dark': { // custom theme
                    'primary'          : '#00ccff',
                    'primary-focus'    : '#00aaff',
                    // 'primary-content'  : '#ffffff',
                },
            },
            'light',
            // 'dark',
            'black',
            'emerald',
            'forest',
            'synthwave',
            'cmyk',
        ],
    },
    options: {
        safelist: [
            /data-theme$/,
        ]
    },
};
