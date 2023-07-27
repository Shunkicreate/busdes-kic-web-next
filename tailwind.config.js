/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#FFE600',
        border: '#BFBEC5',
        contentText: '#555555',
        hiddenText: '#0000004d',
        bgColor: '#F8F8F8',
        buttonOnClick: '#E8D000',
        PrimaryMain: '#FFE500',
        PrimaryPressed: '#EED700',
        PrimaryHover: '#FFED4D',
        PrimaryFocus: '#FFFEF2',
        PrimaryBorder: '#FFF48E',
        AlertMain: '#FBB01C',
        AlertPressed: '#ECA211',
        AlertHover: '#FFCB64',
        AlertFocus: '#FFECC6',
        AlertBorder: '#FFDA92',
        ErrorMain: '#FF313D',
        ErrorPressed: '#E51723',
        ErrorHover: '#FF535D',
        ErrorFocus: '#FFE5E7',
        ErrorBorder: '#FFCACD',
        Neutral100: '#000000',
        Neutral80: '#373737',
        Neutral60: '#CACACA',
        Neutral40: '#F8F8F8',
        Neutral20: '#FFFFFF',
      },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  plugins: [],
}
