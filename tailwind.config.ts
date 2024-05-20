module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'portfolio': "url('/images/home-bg.webp')", // Remove 'bg-' prefix from the class name
      },
    },
  },
  plugins: [
    function ({ addComponents }:{ addComponents: Function }) {
      addComponents({
        '.button-blue': {
          '@apply text-white bg-[#474B96] hover:bg-[#171830] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800': '',
        },
        '.button-white': {
          '@apply text-[#474B96] bg-white hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm w-auto px-5 py-2.5 text-center': '',
        },
      });
    },
  ],
};
