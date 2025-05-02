// tailwind.config.js
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          selest: {
            navy: '#1A1F36', // Deep Navy Blue
            white: '#FFFFFF',
            gray: '#F5F5F5', // Light Gray
            blue: '#E5F0FF', // Soft Blue
            gold: '#AC8D46', // Gold
          },
        },
      },
    },
    plugins: [],
  }