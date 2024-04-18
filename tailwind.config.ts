import type { Config } from 'tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import typographyPlugin from '@tailwindcss/typography'

const config: Config = {
  important: true,
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [formsPlugin, typographyPlugin],
  theme: {
    extend: {
      colors: {
        primary: '#141028',
        secondary: '#FED8A7',
        tertiary: '#2A283C',
        lavender: '#E5E4E8',
        divider: '#D0CFD4',
      },
    },
  },
  variants: {
    extend: {
      display: ['peer-checked'],
    },
  },
}
export default config
