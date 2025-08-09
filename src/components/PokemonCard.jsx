import React from "react";

const PokemonCard = ({ pokemonData }) => {
  return (
    <div className="bg-slate-200 mt-10 rounded-2xl p-4 border border-white shadow-md hover:shadow-xl transition-shadow duration-300 gap-3 w-full max-w-xs mx-auto">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="w-50 h-50 object-contain"
        />
      </div>

      {/* ID */}
      <p className="text-gray-600 text-sm mt-2">
        #{pokemonData.id.toString().padStart(4, "0")}
      </p>

      {/* Name */}
      <h2 className="text-2xl font-bold">{pokemonData.name}</h2>

      {/* Types */}
      {/* <div className="flex gap-2 mt-3">
        {pokemonData.types.map((type, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-lg text-white text-sm ${
              pokemonData.type.toLowerCase() === "grass"
                ? "bg-green-500"
                : pokemonData.type.toLowerCase() === "poison"
                ? "bg-purple-400"
                : "bg-gray-400"
            }`}
          >
            {pokemonData.type}
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default PokemonCard;
