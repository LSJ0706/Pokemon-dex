import { createSlice } from "@reduxjs/toolkit";
import {
  addPokemon,
  duplicateCheckPokemon,
  removePokemon,
} from "../../utils/pokemon";
import { toastAlert } from "../../utils/toast";
const initialState = {
  myPokemons: JSON.parse(localStorage.getItem("myPokemons")) || [],
};

const pokemonSlice = createSlice({
  name: "myPokemons",
  initialState,
  reducers: {
    addPokemonAction: (state, action) => {
      if (duplicateCheckPokemon(state.myPokemons, action.payload.id)) {
        toastAlert("중복된 포켓몬은 잡을 수 없어!");
        return { ...state };
      }
      if (state.myPokemons.length < 6) {
        state.myPokemons = addPokemon(state.myPokemons, action.payload);
        localStorage.setItem("myPokemons", JSON.stringify(state.myPokemons));
      } else {
        toastAlert("포켓몬은 최대 6마리만 잡을 수 있어!");
      }
    },
    removePokemonAction: (state, action) => {
      state.myPokemons = removePokemon(state.myPokemons, action.payload.id);
      localStorage.setItem("myPokemons", JSON.stringify(state.myPokemons));
      toastAlert(`바이 바이 ${action.payload.korean_name}!`);
    },
  },
});

export const { addPokemonAction, removePokemonAction } = pokemonSlice.actions;
export default pokemonSlice.reducer;
