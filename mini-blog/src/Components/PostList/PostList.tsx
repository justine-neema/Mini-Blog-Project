import Post from "../Post/Post";
import { samplePosts } from "../../data/samplePosts";
import "./PostList.css";

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