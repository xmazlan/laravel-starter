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
                'light': { // light theme custom primary, primary-focus
                    'primary'          : '#00aaff',
                    'primary-focus'    : '#0099e6',
                    'primary-content'  : '#ffffff',
                    'secondary'        : '#F000B8',
                    'secondary-focus'  : '#bd0091',
                    'secondary-content': '#ffffff',
                    'accent'           : '#37cdbe',
                    'accent-focus'     : '#2aa79b',
                    'accent-content'   : '#ffffff',
                    'neutral'          : '#3d4451',
                    'neutral-focus'    : '#2a2e37',
                    'neutral-content'  : '#ffffff',
                    'base-100'         : '#ffffff',
                    'base-200'         : '#f9fafb',
                    'base-300'         : '#d1d5db',
                    'base-content'     : '#1f2937',
                    'info'             : '#2094f3',
                    'success'          : '#009485',
                    'warning'          : '#ff9900',
                    'error'            : '#ff5724',
                },
                'dark': { // dark theme custom primary, primary-focus
                    'primary'          : '#00ccff',
                    'primary-focus'    : '#00b8e6',
                    'primary-content'  : '#ffffff',
                    'secondary'        : '#f000b8',
                    'secondary-focus'  : '#bd0091',
                    'secondary-content': '#ffffff',
                    'accent'           : '#37cdbe',
                    'accent-focus'     : '#2AA79B',
                    'accent-content'   : '#ffffff',
                    'neutral'          : '#2A2E37',
                    'neutral-focus'    : '#16181D',
                    'neutral-content'  : '#ffffff',
                    'base-100'         : '#3D4451',
                    'base-200'         : '#2A2E37',
                    'base-300'         : '#16181D',
                    'base-content'     : '#EBECF0',
                    'info'             : '#66C7FF',
                    'success'          : '#87D039',
                    'warning'          : '#E2D562',
                    'error'            : '#FF6F6F',
                },
            },
            // 'light',
            // 'dark',
            'black',
            'emerald',
            'cmyk',
        ],
    },
    options: {
        safelist: [
            /data-theme$/,
        ]
    },
};
