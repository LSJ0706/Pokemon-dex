import styled from "styled-components";
import MOCK_DATA from "../constants/MockData";
import PokemonCard from "./PokemonCard";
import { useDispatch } from "react-redux";
import { addPokemonAction } from "../redux/modules/pokemonSlice";

const PokemonListDiv = styled.div`
  display: grid;
  width: 95%;
  height: 100%;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fill, 13rem);
  gap: 1rem;
  place-items: center;
  padding: 20px 10px 0 10px;
  background-color: #f6f6f6;
`;
const PokemonList = () => {
  const dispatch = useDispatch();

  const handleAddPokemon = (pokemon) => {
    dispatch(addPokemonAction(pokemon));
  };

  console.log("렌더링!");
  return (
    <PokemonListDiv>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          url={pokemon.img_url}
          name={pokemon.korean_name}
          id={pokemon.id}
          onClick={() => handleAddPokemon(pokemon)}
          buttonName="잡기"
        />
      ))}
    </PokemonListDiv>
  );
};

export default PokemonList;
