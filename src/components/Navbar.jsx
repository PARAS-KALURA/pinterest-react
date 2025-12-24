const Navbar = () => {
  return (
    <div className="w-full px-6 py-4 flex items-center gap-4 bg-white">
      
      {/* Search Bar */}
      <div className="flex items-center flex-1 bg-gray-100 rounded-xl px-5 py-6">
        <input
          type="text"
          placeholder="🔍Search"
          className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-500"
        />
      </div>

      {/* Profile */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center font-semibold">
          P
        </div>
        <span className="text-gray-600">▾</span>
      </div>

    </div>
  );
};

export default Navbar;
