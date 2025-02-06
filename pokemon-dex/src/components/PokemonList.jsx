import usePokemon from "../hooks/usePokemon.js";
import styled from "styled-components";
import MOCK_DATA from "../constants/MockData";
import PokemonCard from "./PokemonCard";

const PokemonListDiv = styled.div`
  display: grid;
  width: 95%;
  height: 100vh;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fill, 13rem);
  gap: 1rem;
  place-items: center;
  overflow: auto;
  background-color: #f6f6f6;
`;
const PokemonList = () => {
  const { handleAddPokemon } = usePokemon();
  console.log("PokemonList 렌더링 중!");
  return (
    <PokemonListDiv>
      {MOCK_DATA.map((pokemon) => (
        <div key={pokemon.id}>
          <PokemonCard
            url={pokemon.img_url}
            name={pokemon.korean_name}
            id={pokemon.id}
            onClick={() => handleAddPokemon(pokemon)}
            buttonName="잡기"
          />
        </div>
      ))}
    </PokemonListDiv>
  );
};

export default PokemonList;
