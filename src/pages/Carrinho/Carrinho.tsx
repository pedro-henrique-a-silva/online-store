import React from 'react';
import { CarrinhoProp } from '../../types';
import CartList from '../../components/CartList/CartList';

function Carrinho(props: CarrinhoProp) {
  const { cartList } = props;
  return (
    <div>
      {cartList.length === 0
        ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        : <CartList cartList={ cartList } />}

    </div>
  );
}

export default Carrinho;
