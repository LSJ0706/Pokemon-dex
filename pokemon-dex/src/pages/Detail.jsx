import { useNavigate, useSearchParams } from "react-router-dom";
import { Container, Img } from "../styles/CommonStyles";
import MOCK_DATA from "../constants/MockData";

const Detail = () => {
  const [searchPrams] = useSearchParams();
  const navi = useNavigate();
  const id = searchPrams.get("id");
  const details = MOCK_DATA.filter((pokemon) => pokemon.id === Number(id));

  return (
    <Container>
      {details.map((pokemon) => (
        <div key={id}>
          <Img src={pokemon.img_url} width="150px" height="150px" />
          <h2>{pokemon.id}</h2>
          <p>타입: {pokemon.types}</p>
          <p>{pokemon.description}</p>
        </div>
      ))}
      <button onClick={() => navi(-1)}>뒤로 가기</button>
    </Container>
  );
};

export default Detail;
