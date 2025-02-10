import styled from "styled-components";
import { Card, Button, Img } from "../styles/CommonStyles";
import { useNavigate } from "react-router-dom";
const CardP = styled.p`
  margin: 0px 0px 5px 0px;
`;

const PokemonCard = ({ url, name, id, onClick, buttonName }) => {
  const navi = useNavigate();
  const handleGoToDetail = () => {
    navi(`/detail?id=${id}`);
  };
  const handleButtonClick = (event) => {
    event.stopPropagation();
    onClick();
  };
  return (
    <Card onClick={handleGoToDetail}>
      <Img src={url} width="150px" height="150px" />
      <CardP>{name}</CardP>
      <CardP>No.{id}</CardP>
      <Button onClick={handleButtonClick}>{buttonName}</Button>
    </Card>
  );
};

export default PokemonCard;
