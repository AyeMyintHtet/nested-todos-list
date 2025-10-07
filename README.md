# BinaryLab Take‑Home Project (Set A)

Welcome! This project contains two small React to notes todos or nested todos.

## Overview

You can select to write -

- Todo App
- Nested App



## Tech Stack

- React 18 + TypeScript
- Vite 5 (dev/build tooling)
- React Router v6
- Tailwind CSS

## Getting Started

1) Install dependencies (use one package manager consistently):

```bash
# with npm
npm install

# or with yarn
yarn install
```

2) Start the dev server:

```bash
# with npm
npm run dev

# or with yarn
yarn dev
```

Vite will print a local URL (typically `http://localhost:5173`).

## Available Scripts

```bash
# start dev server
npm run dev

# typecheck + build for production
npm run build

# preview the built app locally
npm run preview

# lint the codebase
npm run lint
```

## Routes

- `/` — Home page with links to the challenges
- `/todo` — Todo App challenge
- `/nested` — Nested App challenge

These are defined via `react-router-dom` in `src/router/router.tsx`.

## Project Structure (high level)

```
src/
  App.tsx              # Mounts the router
  main.tsx             # Vite/React bootstrap
  router/
    router.tsx         # Route definitions
    FixMeTodo/         # Todo screens/hooks
    FixMeNested/       # Nested screens/hooks
  components/          # Reusable UI components
  index.css            # Tailwind styles
```