import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import PokemonCard from "./PokemonCard";
import { Spinner } from "flowbite-react";
import axios from "axios";

const HomePage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Track page
  const cardsPerPage = 12; // Show only 12 cards at a time

  const API = "https://pokeapi.co/api/v2/pokemon?limit=1302";

  const chunkArray = (arr, size) => {
    return arr.reduce((chunks, item, i) => {
      if (i % size === 0) chunks.push([]);
      chunks[chunks.length - 1].push(item);
      return chunks;
    }, []);
  };

  const fetchPokemon = async () => {
    try {
      const { data } = await axios.get(API);
      const chunks = chunkArray(data.results, 50); // Fetch in batches of 50
      let allData = [];

      for (const chunk of chunks) {
        const detailedData = await Promise.all(
          chunk.map(async (curPokemon) => {
            const { data: pokeData } = await axios.get(curPokemon.url);
            return pokeData;
          })
        );
        allData = [...allData, ...detailedData];
      }
      console.log(allData);

      setPokemon(allData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  // Pagination logic
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = pokemon.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(pokemon.length / cardsPerPage);

  return (
    <>
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {currentCards.map((curPokemon) => (
              <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />
            ))}
          </ul>

          {/* Pagination Buttons */}
          {/* Pagination */}
          <div className="flex justify-center mt-6">
            <nav className="inline-flex items-center space-x-1">
              {/* Prev Button */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-3 py-1 rounded ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Prev
              </button>

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .slice(
                  Math.max(0, currentPage - 3), // start range
                  Math.min(totalPages, currentPage + 2) // end range
                )
                .map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {page}
                  </button>
                ))}

              {/* Next Button */}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`px-3 py-1 rounded ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
