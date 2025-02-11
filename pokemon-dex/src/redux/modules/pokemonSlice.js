import { createSlice } from "@reduxjs/toolkit";
import {
  addPokemon,
  duplicateCheckPokemon,
  removePokemon,
} from "../../utils/pokemon";
import { toastAlert } from "../../utils/toast";
const initialState = {
  // localStorage를 이용하여 데이터 초기화
  myPokemons: JSON.parse(localStorage.getItem("myPokemons")) || [],
};

const pokemonSlice = createSlice({
  name: "myPokemons",
  initialState,
  reducers: {
    // 포켓몬 추가 action
    addPokemonAction: (state, action) => {
      // 중복된 포켓몬이 있을 시
      if (duplicateCheckPokemon(state.myPokemons, action.payload.id)) {
        toastAlert("중복된 포켓몬은 잡을 수 없어!", "warn");
        return { ...state };
      }
      // 중복된 포켓몬이 없을 시
      if (state.myPokemons.length < 6) {
        // myPokemons를 포켓몬 추가한 배열로 바꿈
        state.myPokemons = addPokemon(state.myPokemons, action.payload);
        // localStorage의 저장
        localStorage.setItem("myPokemons", JSON.stringify(state.myPokemons));
      } else {
        toastAlert("포켓몬은 최대 6마리만 잡을 수 있어!", "warn");
      }
    },
    // 포켓몬 삭제 action
    removePokemonAction: (state, action) => {
      // myPokemons를 포켓몬 삭제한 배열로 바꿈
      state.myPokemons = removePokemon(state.myPokemons, action.payload.id);
      // localStorage의 저장
      localStorage.setItem("myPokemons", JSON.stringify(state.myPokemons));
      toastAlert(`바이 바이 ${action.payload.korean_name}!`, "success");
    },
  },
});

export const { addPokemonAction, removePokemonAction } = pokemonSlice.actions;
export default pokemonSlice.reducer;
