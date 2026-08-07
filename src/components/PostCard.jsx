import { FaCommentDots, FaEdit, FaTrash } from "react-icons/fa";

// This is a simple Post Card component that displays a post's title, body, and actions.
// It is styled simply with Tailwind CSS for clean layout inside a grid.
function PostCard({ post, onViewComments, onEdit, onDelete }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow p-5 flex flex-col justify-between h-full">
      
      {/* Top Section: User info and ID */}
      <div>
        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
          <span className="bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-medium">
            User {post.userId}
          </span>
          <span className="font-mono">#{post.id}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2 mb-2 capitalize">
          {post.title}
        </h3>

        {/* Body Description */}
        <p className="text-gray-650 text-sm line-clamp-3 mb-4">
          {post.body}
        </p>
      </div>

      {/* Action Buttons (Icons Only) */}
      <div className="flex justify-end gap-2.5 pt-3 border-t border-gray-100">
        
        {/* View Comments Button */}
        <button
          onClick={() => onViewComments(post.id)}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-blue-650 hover:bg-blue-600 hover:text-white transition cursor-pointer"
          title="View Comments"
        >
          <FaCommentDots className="text-base" />
        </button>

        {/* Edit Button */}
        <button
          onClick={() => onEdit(post)}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-amber-50 text-amber-650 hover:bg-amber-500 hover:text-white transition cursor-pointer"
          title="Edit Post"
        >
          <FaEdit className="text-base" />
        </button>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(post.id)}
          className="flex items-center justify-center w-9 h-9 rounded-full bg-red-50 text-red-650 hover:bg-red-500 hover:text-white transition cursor-pointer"
          title="Delete Post"
        >
          <FaTrash className="text-base" />
        </button>

      </div>
      
    </div>
  );
}

export default PostCard;