import { useNavigate, useSearchParams } from "react-router-dom";
import { Img, Button, flexColumn, flexRow } from "../styles/CommonStyles";
import MOCK_DATA from "../constants/MockData";
import { useDispatch } from "react-redux";
import { addPokemonAction } from "../redux/modules/pokemonSlice";
import styled from "styled-components";

const DetailDiv = styled.div`
  ${flexRow}
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

const DetailCotentDiv = styled.div`
  ${flexColumn}
  height: 500px;
`;

const Detail = () => {
  const [searchPrams] = useSearchParams();
  const id = searchPrams.get("id");
  const navi = useNavigate();
  const details = MOCK_DATA.filter((pokemon) => pokemon.id === Number(id));

  const dispatch = useDispatch();
  const handleAddPokemon = (event, pokemon) => {
    event.stopPropagation();
    dispatch(addPokemonAction(pokemon));
  };

  return (
    <>
      {" "}
      {details.map((pokemon) => (
        <DetailDiv key={pokemon.id}>
          <DetailCotentDiv>
            <Img src={pokemon.img_url} width="300px" height="300px" />
            <h2>No. {pokemon.id}</h2>
          </DetailCotentDiv>

          <DetailCotentDiv>
            <p>이름: {pokemon.korean_name}</p>
            <p>타입: {pokemon.types.join(", ")}</p>
            <p>{pokemon.description}</p>
            <Button onClick={(event) => handleAddPokemon(event, ...details)}>
              잡기
            </Button>
            <Button onClick={() => navi(-1)}>뒤로 가기</Button>
          </DetailCotentDiv>
        </DetailDiv>
      ))}
    </>
  );
};

export default Detail;
