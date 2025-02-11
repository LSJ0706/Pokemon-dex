import styled from "styled-components";
import { Card, Button, Img } from "../styles/CommonStyles";
import { useNavigate } from "react-router-dom";
const CardP = styled.p`
  margin: 0px 0px 5px 0px;
`;

const PokemonCard = ({ url, name, id, onClick, buttonName }) => {
  // Detail페이지로 넘어가는 로직
  const navi = useNavigate();
  const handleGoToDetail = () => {
    navi(`/detail?id=${id}`);
  };

  // 포켓몬 버튼 클릭 핸들러 / prop의 따라서 삭제, 추가등 기능이 달라짐
  const handleButtonClick = (event) => {
    // 이벤트 버블링 막기, 추가 버튼을 눌렀을 때 detail페이지로 넘어가는 것 방지
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
