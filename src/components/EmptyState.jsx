import { FaInbox } from "react-icons/fa";

function EmptyState({ setSearch }) {
  return (
    <div className="text-center mt-20 p-8 bg-white border border-gray-250 rounded-xl shadow-sm max-w-md mx-auto">

      <FaInbox className="mx-auto text-6xl text-gray-400 mb-4" />

      <h2 className="text-2xl font-bold text-gray-800">
        No Posts Found
      </h2>

      <p className="text-gray-500 mt-2">
        We couldn't find any posts matching your search query. Try typing something else!
      </p>

      <button
        onClick={() => setSearch("")}
        className="mt-6 bg-blue-600 hover:bg-blue-750 text-white font-medium px-6 py-2 rounded-lg transition shadow-sm"
      >
        Clear Search
      </button>

    </div>
  );
}

export default EmptyState;
