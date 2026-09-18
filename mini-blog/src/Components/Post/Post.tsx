import type { Post as PostType } from "../../types/post";
import "./Post.css";

interface PostProps {
    post: PostType;
}

function Post({ post }: PostProps) {
    // first 100 characters of content
    const preview = 
      post.content.length > 100 
      ? post.content.slice(0, 100) + "..." 
      : post.content;

    //   Formating the date properly
    const formattedDate = new Date(post.datePosted).toLocaleDateString("en-US",{
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <article className="post">
            <h3 className="post_title">{post.title}</h3>
            <div className="post_meta">
                <span className="post_author">By {post.author}</span>
                <span className="post_date">{formattedDate}</span>
            </div>
            <p className="post_content">{preview}</p>
        </article>
    );
}

export default Post;