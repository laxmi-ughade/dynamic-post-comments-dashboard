function Loader() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow p-5 animate-pulse"
        >
          <div className="bg-gray-300 h-6 rounded mb-4"></div>

          <div className="bg-gray-300 h-4 rounded mb-2"></div>

          <div className="bg-gray-300 h-4 rounded mb-2"></div>

          <div className="bg-gray-300 h-4 rounded w-3/4"></div>

          <div className="flex gap-2 mt-6">
            <div className="bg-gray-300 h-10 w-full rounded"></div>
            <div className="bg-gray-300 h-10 w-full rounded"></div>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Loader;