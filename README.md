# Mini Blog — Dev Insights

A small React + TypeScript mini-blog built with Vite. This project demonstrates core React concepts (components, props, and composition), TypeScript typing, basic styling techniques, simple rendering optimizations, and a Higher-Order Component (HOC) pattern.

## Purpose

The app is a minimal learning project intended to practice building reusable components, applying TypeScript types, and using modern React tooling (Vite). It renders a list of sample posts and includes conditional styling and basic optimization techniques.

## Features

- `Header` component with a text logo and a "New Post" link
- `PostList` showing hardcoded sample posts
- `Post` component that shows title, author, preview, and date
- Conditional styling: highlights posts by a specific author and shows a `NEW!` badge for posts published within 24 hours
- Optimization: `React.memo` for `Post`, unique `key` for list items
- HOC: `withLogger` logs mount/unmount lifecycle events for wrapped components

## Tech Stack

- Vite (dev server & build)
- React
- TypeScript

## Quick Start (Install & Run)

1. Install dependencies

```bash
cd mini-blog
npm install
```

2. Run development server (Vite)

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview production build

```bash
npm run preview
```

Notes:
- This project uses Vite for fast development and HMR. See https://vitejs.dev/ for details.

## Project Structure

Root layout (important files / folders):

```
mini-blog/
	├─ public/
	├─ src/
	│   ├─ Components/
	│   │   ├─ Header/
	│   │   │   ├─ Header.tsx
	│   │   │   └─ Header.css
	│   │   ├─ Post/
	│   │   │   ├─ Post.tsx
	│   │   │   └─ Post.css
	│   │   └─ PostList/
	│   │       ├─ PostList.tsx
	│   │       └─ PostList.css
	│   ├─ hocs/
	│   │   └─ withLogger.tsx
	│   ├─ types/
	│   │   └─ post.ts
	│   ├─ App.tsx
	│   ├─ main.tsx
	│   └─ index.css
	├─ index.html
	├─ package.json
	└─ README.md
```

## Design Choices

- Component Types: I used functional components across the app.
	- Reason: Functional components are less verbose and align with modern React practices.
	- Additional benefits:
		1. Hooks: Functional components allow the use of hooks (`useState`, `useEffect`) which simplify state and lifecycle logic.
		2. Easier testing & composition: They tend to be easier to test and compose, and they work well with utilities like `React.memo` and HOCs.

- Styling: Two methods were used:
	1. External CSS files for base layout and component styles (`*.css`).
	2. Inline styles for conditional styling in the `Post` component (highlight author, `NEW!` badge).

- Optimization strategies:
	- `React.memo` used to memoize `Post` and prevent re-renders when props don't change.
	- Unique `key` prop for items when rendering lists to help React's reconciliation.
	- `withLogger` HOC demonstrates component wrapping and lifecycle logging for debugging.

## TypeScript Notes

- Post shape is defined in `src/types/post.ts` and used via props across components to ensure compile-time safety.
- While implementing the HOC, the TypeScript generic for wrapped props required a constraint to satisfy JSX intrinsic attributes. This was resolved by constraining the generic (e.g., `P extends Record<string, any>`).

## Challenges & How I Solved Them

- HOC typing with TypeScript: I initially saw a type error when spreading props into the wrapped component; I resolved it by constraining the generic type parameter and adding a cast when spreading props.
- Date handling for the `NEW!` badge: I normalized post timestamps and used a simple time-difference check (`24 * 60 * 60 * 1000`) to decide whether a post is new.

## External Libraries / Packages

- `vite`
- `react`
- `react-dom`
- `typescript`

No additional UI or testing libraries are included by default. If you'd like, I can add Jest + React Testing Library next.

## Contributing

- Fork the repo and create a feature branch for your work.
- Commit incrementally with clear messages; avoid committing `node_modules`.
- Open a pull request when ready and include a short description of changes.

## Reflection

Working on this mini-blog improved my confidence with TypeScript + React patterns. I found functional components to be concise and powerful, especially when combined with hooks and `React.memo`. The HOC typing was a helpful exercise in TypeScript generics.