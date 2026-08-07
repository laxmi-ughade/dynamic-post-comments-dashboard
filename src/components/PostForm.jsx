import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useCreatePostMutation,
  useUpdatePostMutation,
} from "../services/postApi";
import toast from "react-hot-toast";

function PostForm({ onClose, editPost }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [createPost, { isLoading: isCreating }] =
    useCreatePostMutation();

  const [updatePost, { isLoading: isUpdating }] =
    useUpdatePostMutation();

  useEffect(() => {
    if (editPost) {
      reset({
        title: editPost.title,
        body: editPost.body,
        userId: editPost.userId,
      });
    } else {
      reset({
        title: "",
        body: "",
        userId: "",
      });
    }
  }, [editPost, reset]);

  const onSubmit = async (data) => {
    try {
      if (editPost) {
        await updatePost({
          id: editPost.id,
          ...data,
        }).unwrap();

        toast.success("Post Updated Successfully");
      } else {
        await createPost(data).unwrap();

        toast.success("Post Created Successfully");
      }

      onClose();
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-xl w-full max-w-lg p-6">

        <h2 className="text-2xl font-bold mb-5">
          {editPost ? "Edit Post" : "Add New Post"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* User ID */}

          <div className="mb-4">

            <label>User ID</label>

            <input
              type="number"
              className="w-full border rounded-lg p-2 mt-1"
              {...register("userId", {
                required: "User ID is required",
              })}
            />

            <p className="text-red-500 text-sm">
              {errors.userId?.message}
            </p>

          </div>

          {/* Title */}

          <div className="mb-4">

            <label>Title</label>

            <input
              className="w-full border rounded-lg p-2 mt-1"
              {...register("title", {
                required: "Title is required",
                minLength: {
                  value: 5,
                  message: "Minimum 5 characters",
                },
              })}
            />

            <p className="text-red-500 text-sm">
              {errors.title?.message}
            </p>

          </div>

          {/* Body */}

          <div className="mb-5">

            <label>Description</label>

            <textarea
              rows="5"
              className="w-full border rounded-lg p-2 mt-1"
              {...register("body", {
                required: "Description is required",
                minLength: {
                  value: 10,
                  message: "Minimum 10 characters",
                },
              })}
            />

            <p className="text-red-500 text-sm">
              {errors.body?.message}
            </p>

          </div>

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-5 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              disabled={isCreating || isUpdating}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              {isCreating || isUpdating
                ? "Saving..."
                : editPost
                ? "Update"
                : "Create"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default PostForm;