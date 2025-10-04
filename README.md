# Vietnamese Tea Heritage Store

A modern, high-performance Vue.js application showcasing premium Vietnamese tea collection with wellness focus.

## Features

- **Wellness Teas**: Sleep flower tea, beauty tea, ginger digestive tea
- **Specialty Teas**: Shan Tuyet, Vietnamese Oolong, regional varieties
- **Heritage Stories**: Vietnamese tea culture and traditions
- **Bilingual Support**: Vietnamese and English
- **Modern Design**: Inspired by Bellocq Tea's elegant aesthetic
- **High Performance**: Optimized for Cloudflare Pages deployment

## Tech Stack

- **Frontend**: Vue 3 + Vite
- **Styling**: Tailwind CSS with custom design system
- **Routing**: Vue Router
- **State Management**: Vue Composition API
- **Build Tool**: Vite for fast development and optimized builds

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is optimized for Cloudflare Pages deployment:

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set build output directory: `dist`
4. Deploy automatically on every push

## Design System

### Colors
- **Tea Green**: #2D5016 (Primary)
- **Premium Gold**: #D4AF37 (Accent)
- **Soft Jade**: #7FB069 (Secondary)
- **Warm White**: #FEFEFE (Background)
- **Deep Forest**: #1A3A0A (Text)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

### Performance Features
- Code splitting with manual chunks
- Optimized images and assets
- Minimal bundle size
- Fast loading times
- SEO optimized

## Project Structure

```
src/
├── components/          # Reusable Vue components
│   ├── Header.vue
│   ├── Footer.vue
│   ├── HeroSection.vue
│   ├── WellnessSection.vue
│   ├── SpecialtySection.vue
│   └── HeritageSection.vue
├── views/              # Page components
│   └── Home.vue
├── router/             # Vue Router configuration
│   └── index.js
├── assets/             # Static assets
│   └── styles.css
├── App.vue             # Root component
└── main.js             # Application entry point
```

## Performance Optimizations

- **Vite**: Fast build tool with HMR
- **Code Splitting**: Vendor and utility chunks
- **Tree Shaking**: Unused code elimination
- **Minification**: Terser for production builds
- **Asset Optimization**: Compressed images and fonts
- **CDN Ready**: Optimized for Cloudflare's global network

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## License

MIT License - see LICENSE file for details.


