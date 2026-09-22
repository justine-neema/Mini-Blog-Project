import React, { memo } from "react";
import type { Post as PostType } from "../../types/post";
import "./Post.css";
import withLogger from "../../hocs/withLogger";

interface PostProps {
  post: PostType;
}
// Is the post within 24 hours?
const isNewPost = (datePosted: string): boolean => {
  const posted = new Date(datePosted).getTime();
  const now = Date.now();
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;
  return now - posted < ONE_DAY_MS;
};

function Post({ post }: PostProps) {
  // First few words of content
  const preview = post.content.split(" ").slice(0, 8).join(" ") + "...";

  // Format the date properly
  const formattedDate = new Date(post.datePosted).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Conditional flag 1: highlight specific author
  const isHighlightedAuthor = post.author === "Sarah Chen";

  // Conditional flag 2: is this a fresh post?
  const isNew = isNewPost(post.datePosted);

  // Inline styles based on the flags
  const articleStyle: React.CSSProperties = {
    backgroundColor: isHighlightedAuthor ? "#fef9c3" : "white",
    borderLeft: isHighlightedAuthor
      ? "4px solid #eab308"
      : "4px solid transparent",
  };

  const badgeStyle: React.CSSProperties = {
    display: "inline-block",
    backgroundColor: "#ef4444",
    color: "#ffffff",
    fontSize: "0.7rem",
    fontWeight: 700,
    padding: "0.15rem 0.5rem",
    borderRadius: "9999px",
    marginLeft: "0.5rem",
    letterSpacing: "0.5px",
    verticalAlign: "middle",
  };

  return (
    <article className="post" style={articleStyle}>       
      <h3 className="post_title">
        {post.title}
        {isNew && <span style={badgeStyle}>NEW!</span>}       
      </h3>
      <div className="post_meta">
        <span className="post_author">By {post.author}</span>
        <span className="post_date">{formattedDate}</span>
      </div>
      <p className="post_preview">{preview}</p>           
    </article>
  );
}

export default memo(withLogger(Post, "Post"));