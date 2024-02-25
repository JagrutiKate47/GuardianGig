import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="flex items-center bg-[#ffffff] px-24 mt-0 ml-[4rem] mr-[34rem]">
      <FaSearch size={20} className="text-gray-800 -ml-18 Class

outline-0" />
      <input
        type="text"
        placeholder="Type to search..."
        className="bg-transparent placeholder-black ml-2 border-none focus:outline-none"
      />
    </div>
  );
}

export default SearchBar;
