/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%'
      },
      width: {
        '112': '28rem',
        '128': '32rem',
      },
      height: {
        '112': '28rem',
        '128': '32rem',
      },
      fontSize: {
        '10xl': '10rem'
      },
      fontFamily: {
        'display': ['Playfair Display', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman',
                    'Times', 'serif']
      },
    },
	},
	plugins: [],
};
