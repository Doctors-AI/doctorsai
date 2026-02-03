# Doctors AI - Official Website

A stunning, modern landing page for Doctors AI built with Next.js 15, featuring liquid glass morphism, surgical-themed gradients, and engaging animations.

## ✨ Features

- 🎨 **Liquid Glass Morphism Design** - Modern glassmorphic UI with backdrop blur effects.
- 🎭 **Surgical Theme** - Professional medical color palette with teal, blue, and mint gradients
- ⚡ **Framer Motion Animations** - Smooth, professional animations throughout
- 📱 **Fully Responsive** - Beautiful on all devices from mobile to desktop
- 🚀 **Next.js 15 App Router** - Latest Next.js features with Server Components
- 🎯 **SEO Optimized** - Comprehensive metadata, Open Graph, Twitter Cards, and structured data
- ♿ **Accessible** - Built with accessibility in mind
- 🎨 **Custom Tailwind Config** - Extended with surgical theme colors and animations

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone or download this project

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
doctors-ai-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and custom CSS
├── components/
│   ├── Navbar.tsx          # Navigation with glass morphism
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # About section
│   ├── Features.tsx        # Features showcase
│   ├── Ambassador.tsx      # Ambassador program section
│   └── Footer.tsx          # Footer with social links
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies

```

## 🎨 Design System

### Colors

- **Surgical Blue**: `#0A4D8C` - Primary professional blue
- **Surgical Teal**: `#00A3A3` - Accent teal for highlights
- **Surgical Mint**: `#7FE5D8` - Light mint for hover states
- **Surgical Steel**: `#4A5F7A` - Neutral steel gray
- **Surgical Silver**: `#C0D6DF` - Light silver for borders

### Typography

- **Display Font**: Sora - Modern, geometric sans-serif
- **Body Font**: Inter - Clean, readable interface font

### Key Features

- Liquid glass morphism with backdrop blur
- Animated gradients and floating orbs
- Smooth scroll-triggered animations
- Hover effects with glow
- Custom scrollbar styling

## 🔧 Customization

### Update Colors

Edit `tailwind.config.js`:
```javascript
surgical: {
  blue: '#0A4D8C',
  teal: '#00A3A3',
  mint: '#7FE5D8',
  // Add your colors
}
```

### Modify Animations

Edit animation durations in `tailwind.config.js` under `theme.extend.animation`

### Update Content

- **Features**: Edit the `features` array in `components/Features.tsx`
- **Social Links**: Update `socialLinks` in `components/Footer.tsx`
- **Navigation**: Modify `navItems` in `components/Navbar.tsx`

## 📱 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the static site:
```bash
npm run build
```

The output will be in the `.next` folder. Deploy to any hosting platform that supports Node.js.

## 🔍 SEO Features

- Comprehensive metadata in `app/layout.tsx`
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD) for rich snippets
- Canonical URLs
- Mobile app meta tags
- Sitemap ready

## 📊 Performance

- Optimized images with Next.js Image component
- CSS-only animations where possible
- Code splitting with Next.js App Router
- Tailwind CSS purging for minimal CSS bundle
- Lazy loading for images and components

## 🤝 Contributing

This is the official Doctors AI website. For feature requests or bug reports, please contact the development team.

## 📄 License

Copyright © 2024 Doctors AI. All rights reserved.

## 🔗 Links

- [Google Play Store](https://play.google.com/store/apps/details?id=com.kingrittik.doctors)
- [Twitter/X](https://x.com/Doctors__AI)
- [Instagram](https://www.instagram.com/doctorsaiofficial/)
- [YouTube](https://www.youtube.com/@DoctorsAIofficial)
- [LinkedIn](https://www.linkedin.com/company/doctors-ai/)
- [Discord Community](https://discord.gg/BRv9ZfjaD2)

## 💡 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Google Fonts (Sora, Inter)

---

**Built with 💙 for Healthcare Professionals & Medical Students**
