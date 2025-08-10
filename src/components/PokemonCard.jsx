import React from "react";

const PokemonCard = ({ pokemonData }) => {
  const typeColors = {
    grass: "bg-green-500",
    poison: "bg-purple-400",
    fire: "bg-orange-500",
    water: "bg-blue-500",
    flying: "bg-gradient-to-r from-blue-400 to-gray-400",
    electric: "bg-yellow-400",
    ground: "bg-gradient-to-r from-yellow-400 to-yellow-800",
    fairy: "bg-pink-400",
    fighting: "bg-orange-600",
    psychic: "bg-pink-500",
    rock: "bg-yellow-800",
    steel: "bg-slate-500",
    ghost: "bg-violet-500",
    ice: "bg-cyan-400",
    bug: "bg-green-600",
  };
  return (
    <div className="bg-slate-200 dark:bg-gray-800 mt-10 rounded-2xl p-4 border border-white dark:border-gray-700 shadow-md hover:shadow-xl transition-shadow duration-300 gap-3 w-full max-w-xs mx-auto text-gray-900 dark:text-gray-100">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="w-50 h-50 object-contain transition-transform duration-300 ease-in-out hover:scale-105 "
        />
      </div>

      {/* ID */}
      <p className="text-gray-600 text-sm mt-2">
        #{pokemonData.id.toString().padStart(4, "0")}
      </p>

      {/* Name */}
      <h2 className="text-2xl font-bold ">{pokemonData.name}</h2>

      {/* Types */}

      <div className="flex gap-2 mt-3 flex-wrap">
        {pokemonData.types.map((t, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-lg text-white text-sm ${
              typeColors[t.type.name] || "bg-gray-400"
            }`}
          >
            {t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
