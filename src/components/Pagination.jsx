function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const pages = [...Array(totalPages).keys()].map((page) => page + 1);

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-10">

      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className={`px-4 py-2 rounded-lg font-medium ${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-10 h-10 rounded-lg font-semibold ${
            currentPage === page
              ? "bg-blue-600 text-white"
              : "bg-white border hover:bg-gray-100"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
        className={`px-4 py-2 rounded-lg font-medium ${
          currentPage === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;