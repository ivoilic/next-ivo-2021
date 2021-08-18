# Ivo's Next.js Starter

This is a really basic starter I use for most of my Next.js projects to save me a few minutes of setup. Feel free to use it too and suggest improvements!

## ✨Featuring✨

- sass - for styling
- clsx - for combining classes
- modern-normalize - for normalizing
- focus-visible - for dealing with focus outlines
- dotenv-flow - for matching Next's .env structure in a prebuild script

## Quick Start

- Use `@include` `sm`, `md`, `lg`, or `xl` for styling with the breakpoints `600px`, `900px`, `1200px`, and `1800px`
- Start your scss files with `@import 'base';`
- If you want to import directly from a folder inside of `src` add it to the list in `.eslintrc.json` to avoid an error
- Don't save secrets in the `.env` use `.env.local`
