import React from "react";
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ search, setSearch }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-18 px-4">
      <h2 className="font-custom text-2xl mb-3 text-gray-900 dark:text-gray-100">
        Search by name or ID:
      </h2>

      <div className="relative w-full max-w-md">
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="E.g. Pikachu"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition duration-200 text-lg font-custom"
        />
      </div>
    </div>
  );
};

export default Searchbar;
