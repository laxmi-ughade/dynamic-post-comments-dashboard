import { useGetCommentsQuery } from "../services/postApi";
import { FaTimes } from "react-icons/fa";

function PostModal({ postId, onClose }) {
  const {
    data: comments = [],
    isLoading,
    isError,
    refetch,
  } = useGetCommentsQuery(postId, {
    skip: !postId,
  });

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">

      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[80vh] overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center border-b p-4">

          <h2 className="text-xl font-bold">
            Comments
          </h2>

          <button
            onClick={onClose}
            className="text-red-500 text-xl hover:text-red-700"
          >
            <FaTimes />
          </button>

        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto h-[60vh]">

          {isLoading && (
            <div className="text-center py-10">
              <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>

              <p className="mt-3">Loading comments...</p>
            </div>
          )}

          {isError && (
            <div className="text-center">

              <h2 className="text-red-600 text-xl">
                Failed to load comments
              </h2>

              <button
                onClick={refetch}
                className="mt-5 bg-red-600 text-white px-5 py-2 rounded-lg"
              >
                Retry
              </button>

            </div>
          )}

          {!isLoading &&
            !isError &&
            comments.map((comment) => (
              <div
                key={comment.id}
                className="border rounded-lg p-4 mb-4 shadow-sm"
              >
                <h3 className="font-bold text-blue-600">
                  {comment.name}
                </h3>

                <p className="text-sm text-gray-500 mb-2">
                  {comment.email}
                </p>

                <p className="text-gray-700">
                  {comment.body}
                </p>
              </div>
            ))}

        </div>

      </div>
    </div>
  );
}

export default PostModal;