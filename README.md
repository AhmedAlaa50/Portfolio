## Ahmed Alaa – Developer Portfolio

Modern, animated single-page portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion.

### Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler/Dev Server**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Linting/Formatting**: ESLint + Prettier

### Features

- **Smooth single-page layout**: `NavBar` navigation with section-based scrolling.
- **Animated sections**: `StartingScreen`, `Welcome`, `Skills`, `Projects`, `About`, `Contact` all use modern motion/transition patterns.
- **Keyboard/mouse-friendly navigation**: `SectionScrollArrows` helps users discover content below the fold.
- **Responsive design**: Tailwind CSS layout optimized for desktop, tablet, and mobile.
- **Clean codebase**: TypeScript, ESLint, and Prettier keep the project maintainable.

### Getting Started

#### Prerequisites

- **Node.js** 18+ (recommended)
- **npm** (or a compatible package manager like pnpm/yarn)

#### Installation

```bash
git clone <this-repo-url>
cd portfolio
npm install
```

#### Development

Start the Vite dev server:

```bash
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`) in your browser.

#### Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Code Quality

- **Lint** the codebase:

```bash
npm run lint
```

- **Format** source files with Prettier:

```bash
npm run format
```

### Project Structure (high level)

- **`src/App.tsx`**: Main application entry that wires all sections together.
- **`src/components`**: Reusable components such as `NavBar`, `StartingScreen`, `Welcome`, `Skills`, `Projects`, `About`, `Contact`, and `Footer`.
- **`vite.config.ts` / `tsconfig*.json`**: Build and TypeScript configuration.

### Customization

- **Content**: Update text, links, and projects in the relevant section components under `src/components`.
- **Styling**: Adjust Tailwind classes or extend the theme (e.g. colors like `--color-custom-dark`) in your Tailwind/configuration files.
- **Animations**: Tweak Framer Motion variants and transitions in the components where animations are defined.

### Deployment

You can deploy the built `dist` folder to any static hosting provider:

- **Vercel**
- **Netlify**
- **GitHub Pages**
- Any static file server or CDN

Typical flow:

```bash
npm run build
# deploy the dist/ folder using your provider's instructions
```

### License

This is a personal portfolio project by **Ahmed Alaa**. You are welcome to use it as inspiration; if you reuse parts of the code or design, a credit link back is appreciated.