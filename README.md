# Portfolio - Pablo Ortiz

![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

Modern, animated personal portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion.

**Live:** [pablo-ortiz-portfolio.vercel.app](https://pablo-ortiz-portfolio.vercel.app/)

## Features

- **Responsive Design**: Fully adapted for mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion
- **TypeScript**: Typed codebase for safety and maintainability
- **Scalable Architecture**: Clean and organized folder structure
- **Vercel-Ready**: Deployment configuration included
- **Modern UI/UX**: Purple/black palette with gradient and blur effects

## Tech Stack

- ⚛️ **React 18** — UI library
- 📘 **TypeScript** — Static typing
- ⚡ **Vite** — Ultra-fast build tool
- 🎨 **Tailwind CSS** — Utility-first CSS framework
- 🎭 **Framer Motion** — Professional animations
- 🎯 **Lucide React** — Modern icons

## Project Structure

```
src/
├── components/      # Reusable components
│   ├── Footer.tsx
│   ├── InfiniteSlider.tsx
│   ├── PhoneEmulator.tsx
│   ├── ProfileImage.tsx
│   ├── ProjectsGrid.tsx
│   ├── RoleCarousel.tsx
│   └── TimelineItem.tsx
├── data/            # Content and data
│   └── personal.ts
├── hooks/           # Custom hooks
│   ├── useInView.ts
│   └── useTypingEffect.ts
├── sections/        # Main sections
│   ├── Hero.tsx
│   ├── TechStack.tsx
│   ├── Journey.tsx
│   └── Contact.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Getting Started

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

The project will be available at `http://localhost:5173`

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` triggers automatic deployment.

## License

MIT
