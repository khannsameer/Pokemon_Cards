import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-30 px-4">
      {/* Heading */}
      <h2 className="font-custom text-2xl mb-3 text-gray-800">
        Search by name or ID:
      </h2>

      {/* Search box */}
      <div className="relative w-full max-w-md">
        {/* Search icon */}
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />

        {/* Input */}
        <input
          type="text"
          placeholder="E.g. Pikachu"
          className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent
          transition duration-200 text-lg font-custom"
        />
      </div>
    </div>
  );
};

export default Searchbar;
