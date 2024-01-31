import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {
  "1": { id: "1", name: "bulbasaur" },
  "2": { id: "2", name: "yvisaur" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload; //action pasa por referencia entonces const pokemon no es una variable es una referencia a action
      if (!!state[pokemon.id]) {
        delete state[pokemon.id];
        return;
      } else {
        state[pokemon.id] = pokemon;
      }
    },
  },
});

export const {toggleFavorite} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
