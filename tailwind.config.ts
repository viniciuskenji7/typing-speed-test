import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/interfaces/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neutral-900': 'hsl(0, 0%, 7%)',
        'neutral-800': 'hsl(0, 0%, 15%)',
        'neutral-500': 'hsl(240, 3%, 46%)',
        'neutral-400': 'hsl(240, 1%, 59%)',
        'neutral-0': 'hsl(0, 0%, 100%)',
        'blue-600': 'hsl(214, 100%, 55%)',
        'blue-400': 'hsl(210, 100%, 65%)',
        'red-500': 'hsl(354, 63%, 57%)',
        'green-500': 'hsl(140, 63%, 57%)',
        'yellow-400': 'hsl(49, 85%, 70%)',
      },
    },
  },
  plugins: [],
};

export default config;
