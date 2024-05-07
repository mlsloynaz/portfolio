module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'portfolio': "url('/images/home-bg.png')", // Remove 'bg-' prefix from the class name
      },
    },
  },
  plugins: [
    function ({ addComponents }:{ addComponents: Function }) {
      addComponents({
        '.button-blue': {
          '@apply text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800': '',
        },
        '.button-white': {
          '@apply text-blue-700 bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center': '',
        },
      });
    },
  ],
};
