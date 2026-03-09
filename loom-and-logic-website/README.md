# Loom and Logic Agency Website

A modern, elegant website for Loom and Logic Agency - an automation and virtual assistance company serving B2B founders.

![Website Preview](./public/images/hero-banner.jpg)

## Live Demo

[View Live Site](https://x3pq6qcdlfs6m.ok.kimi.link)

## Features

- **Modern Design** - Elegant villa-style template with sophisticated animations
- **Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations** - Scroll-triggered entrance animations and transitions
- **Interactive Components**:
  - Tab-based service showcase
  - Auto-advancing portfolio carousel
  - Contact form with validation
  - Mobile-friendly navigation
- **Performance Optimized** - Built with Vite for fast loading
- **SEO Ready** - Meta tags and semantic HTML structure

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: CSS transitions + Intersection Observer

## Project Structure

```
├── public/
│   └── images/          # All website images
├── src/
│   ├── components/      # Reusable UI components
│   ├── sections/        # Page sections (Hero, Services, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── config.ts        # All website content configuration
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/loom-and-logic.git
cd loom-and-logic
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

All website content is configured in `src/config.ts`. Edit this file to customize:

- Site metadata (title, description, keywords)
- Navigation links
- Hero section content and stats
- Services showcase
- Portfolio projects
- Testimonials
- Contact information
- Footer content

### Adding Your Own Images

1. Place images in the `public/images/` folder
2. Update the image paths in `src/config.ts`

### Changing Colors

The color scheme is defined in `tailwind.config.js`. The template uses:
- Primary: Wine/Burgundy tones
- Accent: Gold tones
- Background: Dark wine gradient

## Deployment

### GitHub Pages

1. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

2. Build and deploy:
```bash
npm run build
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

### Netlify

1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel

1. Import your GitHub repo on Vercel
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## License

MIT License - feel free to use this template for your own projects.

## Credits

- Template: Villa-style by shadcn/ui templates
- Images: AI-generated for Loom and Logic Agency
- Icons: [Lucide React](https://lucide.dev/)

---

Built with ❤️ by Loom and Logic Agency
