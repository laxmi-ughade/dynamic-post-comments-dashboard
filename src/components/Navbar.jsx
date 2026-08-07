import SearchBar from "./SearchBar";

function Navbar({ search, setSearch, totalPosts }) {
  return (
    <nav className="bg-blue-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex flex-col md:flex-row justify-between items-center gap-4">

        <h1 className="text-2xl font-bold text-white">
          Post Dashboard
        </h1>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <div className="bg-white px-4 py-2 rounded-lg shadow">
          <p className="font-semibold text-blue-600">
            Total Posts : {totalPosts}
          </p>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;