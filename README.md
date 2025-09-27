# HTML/JS/SCSS Boilerplate

A personal lightweight boilerplate for quick front-end test setups. It provides a Webpack + SWC build system with SCSS support and some minimal defaults.

## What it does do
- Webpack config with sensible defaults (dev/prod modes, asset handling, PostCSS)
- Basic style normalization and utility classes (flex helpers, clamped viewport-based spacing, text alignment, etc.)  
- A few small JS utilities to keep things sane (viewport sizing, hover detection, scroll state, throttle/debounce)

## What it doesn't do
- This is not meant for production-ready projects — it's a playground boilerplate for trying out ideas quickly.
- Provide a fully fledged styling framework, it's only a few utility classes and variables

## Usage

```
npm install // install dependencies
npm run dev // start dev mode with source maps – plain html + /dist folder
npm run build // build for production
```