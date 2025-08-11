import React, { useState } from "react";
import PokemonModal from "../components/PokemonModal";

const PokemonCard = ({ pokemonData }) => {
  // const [openModal, setOpenModal] = useState(false);

  // For glow effects
  const glowColors = {
    grass: "#22c55e",
    poison: "#a78bfa",
    fire: "#f97316",
    water: "#3b82f6",
    flying: "linear-gradient(to right, #60a5fa, #9ca3af)",
    electric: "#facc15",
    ground: "linear-gradient(to right, #facc15, #854d0e)",
    fairy: "#f472b6",
    fighting: "#ea580c",
    psychic: "#ec4899",
    rock: "#854d0e",
    steel: "#64748b",
    ghost: "#8b5cf6",
    ice: "#22d3ee",
    bug: "#15803d",
  };

  // For badge backgrounds
  const badgeColors = {
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
    <div
      className="relative mt-10 p-5 rounded-2xl w-full max-w-xs mx-auto bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black border border-gray-300 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-[0_0_30px_var(--type-color)] transition-all duration-300 text-gray-900 dark:text-gray-100 group"
      style={{
        "--type-color": glowColors[pokemonData.types[0].type.name] || "#6b7280",
      }}
    >
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-[url('/holo-texture.png')] opacity-20 mix-blend-overlay animate-holo" />

      {/* Neon border */}
      <div
        className="absolute inset-0 rounded-2xl border-2 border-transparent animate-borderGlow"
        style={{
          borderImage: `linear-gradient(45deg, var(--type-color), transparent) 1`,
        }}
      />

      {/* Image */}
      <div className="flex justify-center relative z-10">
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="w-40 h-40 object-contain drop-shadow-[0_0_15px_var(--type-color)] group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      {/* <PokemonModal /> */}

      {/* ID */}
      <p className="text-gray-400 text-sm mt-2 relative z-10 font-mono">
        #{pokemonData.id.toString().padStart(4, "0")}
      </p>

      {/* Name */}
      <h2 className="text-2xl font-extrabold capitalize relative z-10 tracking-wide">
        {pokemonData.name}
      </h2>

      {/* Types */}
      <div className="flex gap-2 mt-3 flex-wrap relative z-10">
        {pokemonData.types.map((t, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-lg text-white text-sm shadow-md ${
              badgeColors[t.type.name] || "bg-gray-500"
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
