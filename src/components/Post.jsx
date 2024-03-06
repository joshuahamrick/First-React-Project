export const Post = ({ post }) => {
    return (
        <div className="post">
            <div className="topic">{post.topic.name}</div>
            <div className="title">{post.title}</div>
            <div className="likes">
            <button className="button">{post.likes.length} likes</button>
            </div>
        </div>
    )
}