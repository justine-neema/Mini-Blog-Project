import Post from "../Post/Post";
import type { Post as PostType } from "../../types/post";
import "./PostList.css";


const samplePosts: PostType[] = [
    {
        id: 1,
        title: "Understanding React Components",
        author: "Chinua Achebe",
        content: "React components are the building blocks of any React application. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation.",
        datePosted: new Date(),
    },

    {
        id: 2,
        title: "The beauty of Typescript",
        author: "Acele kady",
        content: "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
        datePosted:new Date( "2025-09-09T12:08:00"),

    },

    {
    id: 3,
    title: "CSS-in-JS vs Traditional CSS",
    author: "Sarah Chen",
    content:
      "Both approaches have trade-offs. Traditional CSS is simpler and faster to load, while CSS-in-JS offers scoped styles and dynamic theming...",
    datePosted: new Date( "2025-01-12T12:08:00"),
  },
];

function PostList() {
    return (
        <section className="post-list">
            <h2 className="post-list_heading">Latest Insights</h2>
            {samplePosts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </section>
    );
}

export default PostList;