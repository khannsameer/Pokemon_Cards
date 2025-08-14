import React from "react";
import { Modal, ModalContent, Button } from "@heroui/react";

const PokemonModal = ({ pokemonData, isOpen, onClose }) => {
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
        backdrop: "backdrop-blur-md bg-black/30", // Extra blur + tint
      }}
      className="bg-transparent shadow-none"
    >
      <ModalContent>
        {(onClose) => (
          <div
            className="relative rounded-2xl p-6 w-[450px] flex flex-col items-center border-4 shadow-lg"
            style={{
              background: "linear-gradient(145deg, #1e293b, #0f172a)",
              boxShadow: `0 0 20px var(--type-${pokemonData.types[0].type.name})`,
            }}
          >
            {/* Pokémon ID Badge */}
            <span className="absolute top-4 left-4 bg-red-500 text-white font-bold rounded-full px-3 py-1 text-sm shadow-lg">
              #{pokemonData.id.toString().padStart(4, "0")}
            </span>

            {/* Pokémon Image */}
            <img
              src={pokemonData.sprites.other.dream_world.front_default}
              alt={pokemonData.name}
              className="w-50 h-50 object-contain drop-shadow-[0_0_20px_var(--type-color)]"
            />

            {/* Name & Type */}
            <h1 className="mt-3 text-2xl font-bold capitalize text-white">
              {pokemonData.name}
            </h1>
            <div className="flex gap-2 mt-2">
              {pokemonData.types.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-white text-sm shadow-md"
                  style={{ backgroundColor: `var(--type-${t.type.name})` }}
                >
                  {t.type.name}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-5 w-full">
              {pokemonData.stats.map((stat, i) => (
                <div key={i} className="mb-2">
                  <div className="flex justify-between text-gray-200 text-xs">
                    <span>{stat.stat.name.toUpperCase()}</span>
                    <span>{stat.base_stat}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="h-2 rounded-full"
                      style={{
                        width: `${stat.base_stat}%`,
                        backgroundColor: `var(--type-${pokemonData.types[0].type.name})`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <Button color="danger" variant="shadow" onPress={onClose}>
                Close
              </Button>
              <Button color="primary">More Info</Button>
            </div>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
};

export default PokemonModal;
