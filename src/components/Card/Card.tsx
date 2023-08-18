import { Link } from 'react-router-dom';

type InfoProp = {
  title: string,
  thumbnail: string,
  price: number,
  id : string,
};

function Card({ title, thumbnail, price, id }: InfoProp) {
  return (
    <ul data-testid="product">
      <li>
        <Link
          data-testid="product-detail-link"
          to={ `/detalhesProduto/${id}` }
        >
          <img src={ thumbnail } alt={ title } />
          {' '}
        </Link>

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
