import { Card, Button, Img } from "../styles/CommonStyles";

const PokemonCard = ({ url, name, id }) => {
  return (
    <Card>
      <Img src={url} width="150px" height="150px" />
      <p>{name}</p>
      <p>No. {id}</p>
      <Button>추가</Button>
    </Card>
  );
};

export default PokemonCard;
