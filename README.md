# TAMIS Glanzwerk — Reinigungsservice Website

Professional cleaning service website built with React + TypeScript + Vite.

## Project Structure

```
clean-front/
├── public/                     # Static files
├── src/
│   ├── assets/                 # Images, fonts, icons
│   │   ├── logo.png            # Company logo
│   │   └── services/           # Service card images
│   │       ├── hotel.webp
│   │       ├── officeImg.png
│   │       ├── buildingImg.jpg
│   │       └── homeImg.jpg
│   ├── components/             # React components
│   │   ├── Header/             # Navigation bar + logo + phone CTA
│   │   │   ├── Header.tsx
│   │   │   └── Header.css
│   │   ├── Hero/               # Main banner with headline + CTA buttons
│   │   │   ├── Hero.tsx
│   │   │   └── Hero.css
│   │   ├── Features/           # 4 key features (Zuverlässig, Gründlich...)
│   │   │   ├── Features.tsx
│   │   │   └── Features.css
│   │   ├── Services/           # 4 service cards with images + checklists
│   │   │   ├── Services.tsx
│   │   │   └── Services.css
│   │   ├── WhyUs/              # 4 advantages section
│   │   │   ├── WhyUs.tsx
│   │   │   └── WhyUs.css
│   │   ├── HowItWorks/         # 3-step process section
│   │   │   ├── HowItWorks.tsx
│   │   │   └── HowItWorks.css
│   │   ├── CTABanner/          # Call-to-action green banner
│   │   │   ├── CTABanner.tsx
│   │   │   └── CTABanner.css
│   │   └── Footer/             # Contact info, links, social icons
│   │       ├── Footer.tsx
│   │       └── Footer.css
│   ├── App.tsx                 # Root component — assembles all sections
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles, CSS variables, reset
├── index.html                  # HTML entry
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies and scripts
├── CLAUDE.md                   # AI assistant guidelines
└── .gitignore                  # Git ignore rules
```

## Getting Started

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Production build
npm run preview      # Preview production build
```

## Tech Stack

- **React 19** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool
- **react-icons** — Icon library
- **CSS** — Component-scoped stylesheets

## Color Palette

| Variable                  | Value     | Usage                |
|---------------------------|-----------|----------------------|
| `--color-primary`         | `#1a3c2a` | Main dark green      |
| `--color-primary-light`   | `#2d5a3d` | Light green accents  |
| `--color-primary-dark`    | `#0f2a1c` | Darker green         |
| `--color-accent`          | `#c8a84e` | Gold/yellow accent   |
| `--color-gray-50`         | `#f8f9fa` | Section backgrounds  |
