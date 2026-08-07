import PostCard from "./PostCard";

function PostGrid({
  posts,
  onViewComments,
  onEdit,
  onDelete,
}) {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onViewComments={onViewComments}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
}

export default PostGrid;