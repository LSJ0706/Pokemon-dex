import styled from "styled-components";
import { Card, Button, Img } from "../styles/CommonStyles";

const CardP = styled.p`
  margin: 0px 0px 5px 0px;
`;

const PokemonCard = ({ url, name, id, addPokemon, buttonName }) => {
  return (
    <Card>
      <Img src={url} width="150px" height="150px" />
      <CardP>{name}</CardP>
      <CardP>No. {id}</CardP>
      <Button onClick={addPokemon}>{buttonName}</Button>
    </Card>
  );
};

export default PokemonCard;
