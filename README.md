# Arsène Lupin - L'Ombre et la Plume

A minimalist, immersive website dedicated to the universe of Arsène Lupin, the gentleman-burglar created by Maurice Leblanc. This project features an elegant black and white design with manuscript typography to capture the mysterious atmosphere of the Belle Époque.

## 🎨 Design Philosophy

- **Minimalist aesthetic**: Clean, elegant layout with plenty of whitespace
- **Manuscript typography**: Fine handwriting fonts for titles, serif fonts for body text
- **Monochrome palette**: Strict black and white color scheme with dark/light mode toggle
- **Responsive design**: Optimized for all devices from mobile to desktop

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
npm run dev -- --open
```

## 📁 Project Structure

```
src/
├── routes/
│   ├── +layout.svelte          # Main layout with navigation and theme
│   ├── +page.svelte            # Homepage with hero section
│   ├── personnage/             # Character information page
│   └── oeuvres/                # Works/books listing page
├── lib/
│   ├── components/
│   │   └── ThemeToggle.svelte  # Dark/light mode switch
│   └── theme.ts                # Theme management logic
└── app.css                     # Global styles and typography
```

## ⚙️ Tech Stack

- **Framework**: SvelteKit with TypeScript
- **Styling**: Tailwind CSS v4
- **Typography**: Custom Google Fonts integration
- **Theme**: Persistent dark/light mode with localStorage + SSR cookies
- **Deployment**: Vercel/Netlify ready with adapter-auto

## 🎭 Features

- **Theme Toggle**: Seamless dark/light mode switching with persistence
- **Responsive Navigation**: Mobile-friendly header with smooth transitions
- **Typography System**: Manuscript fonts for headings, fine serif for content
- **Performance Optimized**: Fast loading with SvelteKit's optimization
- **Accessibility**: Proper ARIA labels and semantic HTML

## 📖 Content Pages

1. **Homepage (/)**: Hero section with navigation links
2. **Le Personnage (/personnage)**: Character description and aliases
3. **Les Œuvres (/oeuvres)**: Chronological list of Maurice Leblanc's works
