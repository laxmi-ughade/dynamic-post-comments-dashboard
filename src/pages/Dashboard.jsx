import { useMemo, useState } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import Error from "../components/Error";
import EmptyState from "../components/EmptyState";
import PostGrid from "../components/PostGrid";
import Pagination from "../components/Pagination";
import PostModal from "../components/PostModal";
import PostForm from "../components/PostForm";

import {
  useDeletePostMutation,
  useGetPostsQuery,
} from "../services/postApi";

function Dashboard() {
  const {
    data: posts = [],
    isLoading,
    isError,
    refetch,
  } = useGetPostsQuery();

  const [deletePost] = useDeletePostMutation();

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedPostId, setSelectedPostId] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [editPost, setEditPost] = useState(null);

  const postsPerPage = 10;

  // Filter Posts
  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );
  }, [posts, search]);

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;

  const currentPosts = filteredPosts.slice(firstIndex, lastIndex);

  // Comments Modal
  const handleViewComments = (id) => {
    setSelectedPostId(id);
  };

  const closeComments = () => {
    setSelectedPostId(null);
  };

  // Create Post
  const handleCreate = () => {
    setEditPost(null);
    setShowForm(true);
  };

  // Edit Post
  const handleEdit = (post) => {
    setEditPost(post);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  // Delete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this post?"
    );

    if (!confirmDelete) return;

    try {
      await deletePost(id).unwrap();

      toast.success("Post Deleted");
    } catch {
      toast.error("Delete Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar
        search={search}
        setSearch={setSearch}
        totalPosts={filteredPosts.length}
      />

      <div className="max-w-7xl mx-auto p-6">

        {isLoading && <Loader />}

        {isError && (
          <Error refetch={refetch} />
        )}

        {!isLoading &&
          !isError &&
          filteredPosts.length === 0 && (
            <EmptyState
              setSearch={setSearch}
            />
          )}

        {!isLoading &&
          !isError &&
          filteredPosts.length > 0 && (
            <>
              <PostGrid
                posts={currentPosts}
                onViewComments={handleViewComments}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </>
          )}

      </div>

      {/* Floating Button */}

      <button
        onClick={handleCreate}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg px-6 py-4 text-lg"
      >
        + Add Post
      </button>

      {/* Comments Modal */}

      {selectedPostId && (
        <PostModal
          postId={selectedPostId}
          onClose={closeComments}
        />
      )}

      {/* Add/Edit Form */}

      {showForm && (
        <PostForm
          editPost={editPost}
          onClose={closeForm}
        />
      )}
    </div>
  );
}

export default Dashboard;