"use client";

import { PokemonGrid } from "@/pokemons";
import { useAppSelector } from "@/store";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) => Object.values(state.pokemons));
  return <PokemonGrid pokemons={favoritePokemons} />;
};
