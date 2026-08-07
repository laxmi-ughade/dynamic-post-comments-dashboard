function Error({ refetch }) {
  return (
    <div className="flex flex-col items-center justify-center mt-24">

      <h2 className="text-2xl font-bold text-red-600">
        Something went wrong
      </h2>

      <p className="text-gray-600 mt-2">
        Failed to load posts.
      </p>

      <button
        onClick={refetch}
        className="mt-5 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
      >
        Retry
      </button>

    </div>
  );
}

export default Error;