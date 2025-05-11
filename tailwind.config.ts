
import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"
import plugin from "tailwindcss/plugin"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        news: {
          primary: "#1E40AF", // Deep blue
          breaking: "#DC2626", // Red
          politics: "#4B5563", // Dark gray
          technology: "#6366F1", // Indigo
          health: "#10B981", // Green
          sports: "#F59E0B", // Amber
          arts: "#8B5CF6", // Purple
          environment: "#2DD4BF", // Teal
        },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.section-title': {
          'position': 'relative',
          'fontSize': '1.5rem', /* text-xl */
          'fontWeight': '700', /* font-bold */
          'fontFamily': 'var(--font-playfair), serif',
          'marginBottom': '1rem', /* mb-4 */
          'paddingBottom': '0.5rem', /* pb-2 */
          'borderBottomWidth': '2px',
        },
        '.article-title': {
          'fontFamily': 'var(--font-playfair), serif',
          'fontWeight': '700', /* font-bold */
          'lineHeight': '1.2',
          'transition': 'color 0.2s',
        },
        '.article-title:hover': {
          'color': 'var(--tw-color-news-primary)',
        },
        '.article-excerpt': {
          'color': '#374151', /* text-gray-700 */
          'lineClamp': '3',
          'overflow': 'hidden',
        },
        '.article-card': {
          'backgroundColor': 'white',
          'borderRadius': '0.375rem', /* rounded-md */
          'overflow': 'hidden',
          'borderWidth': '1px',
          'borderColor': '#e5e7eb', /* border-gray-200 */
          'transition': 'transform 0.2s, box-shadow 0.2s',
        },
        '.article-card:hover': {
          'transform': 'translateY(-4px)',
          'boxShadow': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        },
        '.category-badge': {
          'display': 'inline-block',
          'padding': '0.25rem 0.75rem', /* px-3 py-1 */
          'fontSize': '0.75rem', /* text-xs */
          'fontWeight': '600', /* font-semibold */
          'color': 'white',
          'borderRadius': '9999px', /* rounded-full */
          'textTransform': 'uppercase',
        },
      })
    }),
  ],
} satisfies Config

export default config
