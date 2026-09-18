import type { Post } from "../types/post";

export const samplePosts: Post[] = [
    {
        id: 1,
        title: "Understanding React Components",
        author: "Chinua Achebe",
        content: "React components are the building blocks of any React application. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation.",
        datePosted: "2026-09-15",
    },

    {
        id: 2,
        title: "The beauty of Typescript",
        author: "Acele kady",
        content: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
        datePosted: "2025-09-09",

    },

    {
    id: 3,
    title: "CSS-in-JS vs Traditional CSS",
    author: "Sarah Chen",
    content:
      "Both approaches have trade-offs. Traditional CSS is simpler and faster to load, while CSS-in-JS offers scoped styles and dynamic theming...",
    datePosted: "2025-01-12",
  },
]