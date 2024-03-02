import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
      <FaSearch className="text-gray-500" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent ml-2 outline-none placeholder-gray-500"
      />
    </div>
  );
}

export default SearchBar;
