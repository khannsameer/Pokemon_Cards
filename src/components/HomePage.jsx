import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import PokemonCard from "./PokemonCard";
import { Spinner } from "flowbite-react";
import axios from "axios";

const HomePage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      const chunks = chunkArray(data.results, 50); // Fetch 50 at a time
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
      console.error(error);
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
        <div className="text-center">
          <Spinner aria-label="Center-aligned spinner example" />
        </div>
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div className="px-4">
        <div>
          <ul className="grid grid-cols-4 justify-center items-center gap-1.5">
            {pokemon.map((curPokemon) => (
              <PokemonCard key={curPokemon.id} pokemonData={curPokemon} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomePage;
