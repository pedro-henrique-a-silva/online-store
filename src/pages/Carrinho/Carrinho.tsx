import React, { useEffect } from 'react';
import { CarrinhoProp } from '../../types';
import CartList from '../../components/CartList/CartList';

function Carrinho(props: CarrinhoProp) {
  const { cartList, updateCart, removeCartItem, getCartListFromStorage } = props;

  useEffect(() => {
    const listStorage = localStorage.getItem('Carrinho');
    if (cartList.length === 0 && listStorage) {
      getCartListFromStorage(JSON.parse(listStorage));
    }
  }, []);

  return (
    <div>
      {cartList.length === 0
        ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        : <CartList
            cartList={ cartList }
            updateCart={ updateCart }
            removeCartItem={ removeCartItem }
            getCartListFromStorage={ getCartListFromStorage }
        />}

    </div>
  );
}

export default Carrinho;
