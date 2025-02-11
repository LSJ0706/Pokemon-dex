import { useNavigate } from "react-router-dom";
import pokemonLogo from "../assets/pokemon_logo.png";
import { Container, Button, Img } from "../styles/CommonStyles";
import styled from "styled-components";

// Button 스타일 컴포넌트에 width 설정
const StartButton = styled(Button)`
  width: 200px;
`;

const Home = () => {
  const navi = useNavigate();

  return (
    <Container>
      <Img src={pokemonLogo} alt="포켓몬 로고 이미지" />
      {/*Dex 페이지로 넘어가는 버튼*/}
      <StartButton
        onClick={() => {
          navi("/Dex");
        }}
      >
        포켓몬 도감 시작하기
      </StartButton>
    </Container>
  );
};

export default Home;
