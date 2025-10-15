/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Existing shadcn colors (keep for compatibility if needed, but will override with base44 where appropriate)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Base44 specific colors
        'base44': {
          'primary': {
            DEFAULT: 'hsl(var(--base44-primary))',
            'foreground': 'hsl(var(--base44-primary-foreground))',
            'light': 'hsl(var(--base44-primary-light))',
            'dark': 'hsl(var(--base44-primary-dark))',
          },
          'secondary': {
            DEFAULT: 'hsl(var(--base44-secondary))',
            'foreground': 'hsl(var(--base44-secondary-foreground))',
          },
          'accent': {
            DEFAULT: 'hsl(var(--base44-accent))',
            'foreground': 'hsl(var(--base44-accent-foreground))',
          },
          'gray': {
            '50': 'hsl(var(--base44-gray-50))',
            '100': 'hsl(var(--base44-gray-100))',
            '200': 'hsl(var(--base44-gray-200))',
            '300': 'hsl(var(--base44-gray-300))',
            '400': 'hsl(var(--base44-gray-400))',
            '500': 'hsl(var(--base44-gray-500))',
            '600': 'hsl(var(--base44-gray-600))',
            '700': 'hsl(var(--base44-gray-700))',
            '800': 'hsl(var(--base44-gray-800))',
            '900': 'hsl(var(--base44-gray-900))',
            '950': 'hsl(var(--base44-gray-950))',
          },
        },
      },
      borderRadius: {
        lg: "0.75rem", // 12px
        md: "calc(0.75rem - 2px)",
        sm: "calc(0.75rem - 4px)",
      },
      boxShadow: {
        'diffuse': '0 10px 30px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
        'glass': '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}