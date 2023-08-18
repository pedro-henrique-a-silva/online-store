import React from 'react';
import { CarrinhoProp } from '../../types';

function CartList(props: CarrinhoProp) {
  const { cartList } = props;
  return (
    <ul>
      {cartList.map((cartItem) => (
        <li key={ cartItem.id }>
          <img src={ cartItem.thumbnail } alt="" />
          <span data-testid="shopping-cart-product-name">{cartItem.title}</span>
          {' - '}
          <span data-testid="shopping-cart-product-quantity">
            Qtd:
            {' '}
            {cartItem.quantity}
          </span>
          <p>
            R$
            {' '}
            {cartItem.price}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default CartList;
