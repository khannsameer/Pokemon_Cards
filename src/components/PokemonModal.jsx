import React, { useEffect, useState } from "react";
import { Modal, ModalContent, Button } from "@heroui/react";

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

const PokemonModal = ({ pokemonData, isOpen, onClose }) => {
  const mainType = pokemonData.types[0].type.name;
  const progressColor = badgeColors[mainType] || "bg-gray-400";
  const [weaknesses, setWeaknesses] = useState([]);
  const [showMore, setShowMore] = useState(false);

  // Fetch weaknesses from type API
  useEffect(() => {
    const fetchWeaknesses = async () => {
      try {
        let weaknessSet = new Set();
        for (let t of pokemonData.types) {
          const res = await fetch(t.type.url);
          const typeData = await res.json();
          typeData.damage_relations.double_damage_from.forEach((w) =>
            weaknessSet.add(w.name)
          );
        }
        setWeaknesses(Array.from(weaknessSet));
      } catch (err) {
        console.error("Error fetching weaknesses:", err);
      }
    };
    if (pokemonData?.types) {
      fetchWeaknesses();
    }
  }, [pokemonData]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      backdrop="blur"
      placement="center"
      motionProps={{
        variants: {
          enter: { scale: 1, opacity: 1 },
          exit: { scale: 0.9, opacity: 0 },
        },
      }}
      classNames={{
        backdrop:
          "backdrop-blur-md bg-black/30 flex items-center justify-center",
      }}
      className="bg-transparent shadow-none"
    >
      <ModalContent>
        {(onClose) => (
          <div
            className="relative rounded-2xl p-3 sm:p-6 w-[90vw] sm:w-[450px] flex flex-col items-center border-4 shadow-lg bg-slate-200 dark:bg-slate-900 translate-x-4"
            style={{
              boxShadow: `0 0 20px var(--type-${mainType})`,
            }}
          >
            {/* Pokémon ID */}
            <span className="absolute top-3 left-3 bg-red-500 text-white font-bold rounded-full px-2 py-1 text-sm shadow-lg">
              #{pokemonData.id.toString().padStart(4, "0")}
            </span>

            {/* Pokémon Image */}
            <img
              src={pokemonData.sprites.other.dream_world.front_default}
              alt={pokemonData.name}
              className="w-40 h-auto object-contain drop-shadow-[0_0_20px_var(--type-color)]"
            />

            {/* Name & Type */}
            <h1 className="mt-3 text-2xl font-bold capitalize text-gray-900 dark:text-white">
              {pokemonData.name}
            </h1>
            <div className="flex gap-2 mt-2">
              {pokemonData.types.map((t, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-white text-sm shadow-md ${
                    badgeColors[t.type.name] || "bg-gray-400"
                  }`}
                >
                  {t.type.name}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-5 w-full">
              {pokemonData.stats.map((stat, i) => (
                <div key={i} className="mb-2">
                  <div className="flex justify-between text-gray-900 dark:text-gray-200 text-xs font-medium">
                    <span>{stat.stat.name.toUpperCase()}</span>
                    <span>{stat.base_stat}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${progressColor}`}
                      style={{
                        width: `${Math.min(stat.base_stat, 100)}%`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* More Info */}
            {showMore && (
              <div className="mt-4 w-full text-gray-900 dark:text-gray-200 text-sm space-y-1">
                <p>
                  <strong>Height:</strong> {pokemonData.height}
                </p>
                <p>
                  <strong>Weight:</strong> {pokemonData.weight}
                </p>
                <p>
                  <strong>Moves:</strong>{" "}
                  {pokemonData.moves
                    .slice(0, 5)
                    .map((m) => m.move.name)
                    .join(", ")}
                </p>
                {weaknesses.length > 0 && (
                  <p>
                    <strong>Weaknesses:</strong> {weaknesses.join(", ")}
                  </p>
                )}
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <Button
                onPress={onClose}
                className="px-5 py-2 rounded-lg font-semibold bg-red-500 text-white shadow-md hover:bg-red-600"
              >
                Close
              </Button>
              <Button
                onPress={() => setShowMore((prev) => !prev)}
                className="px-5 py-2 rounded-lg font-semibold bg-blue-500 text-white shadow-md hover:bg-blue-600"
              >
                {showMore ? "Hide Info" : "More Info"}
              </Button>
            </div>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};

export default PokemonModal;
