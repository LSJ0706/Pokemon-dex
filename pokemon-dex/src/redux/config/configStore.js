import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "../modules/pokemonSlice";
const store = configureStore({
  reducer: {
    // pokemonReducer store 설정
    pokemon: pokemonReducer,
  },
});

export default store;
