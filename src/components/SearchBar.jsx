import { FaSearch, FaTimes } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative w-full md:w-96 group">
      
      <FaSearch
        className="absolute top-1/2 left-3.5 -translate-y-1/2 text-blue-100 group-focus-within:text-white transition-colors duration-250 text-sm"
      />

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-9 py-2.5 text-white placeholder-blue-100/70 outline-none transition-all duration-300 focus:bg-white/15 focus:border-white/40 focus:ring-4 focus:ring-white/10"
      />

      {search && (
        <button
          onClick={() => setSearch("")}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-blue-100 hover:text-white transition cursor-pointer p-1"
          title="Clear search"
        >
          <FaTimes className="text-xs" />
        </button>
      )}

    </div>
  );
}

export default SearchBar;