type InfoProp = {
  title: string,
  thumbnail: string,
  price: number,
};

function Card({ title, thumbnail, price }: InfoProp) {
  return (
    <ul data-testid="product">
      <li>
        <img src={ thumbnail } alt={ title } />
      </li>
      <li>
        { title }
      </li>
      <li>
        { price }
      </li>
      <button>Adicionar ao carrinho</button>
    </ul>
  );
}

export default Card;
