// AlbumDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CardType } from '../../types';
import { getProductById } from '../../services/api';

function CardDetails() {
  const { id } = useParams<{ id: string }>();
  const [card, setCard] = useState<CardType | null>(null);

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        if (id) {
          const cardDetails = await getProductById(id);
          setCard(cardDetails);
        }
      } catch (error) {
        console.error('Erro ao buscar detalhes do produto:', error);
      }
    };

    fetchCardDetails();
  }, [id]);

  //   if (!card) {
  //     return <div>Produto não encontrado</div>;
  //   }

  return (
    <ul data-testid="product">
      <li>
        <img
          data-testid="product-detail-image"
          src={ card?.thumbnail }
          alt={ card?.title }
        />
        {' '}
      </li>
      <li data-testid="product-detail-name">{card?.title}</li>
      <li data-testid="product-detail-price">{card?.price}</li>
      <Link to="/carrinho">
        <button>Adicionar ao carrinho</button>
      </Link>
    </ul>
  );
}

export default CardDetails;
