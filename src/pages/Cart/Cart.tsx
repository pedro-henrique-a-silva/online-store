import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { X } from '@phosphor-icons/react';
import { updateCartListAction, removeCartItemAction } from '../../redux/actions';
import { ReduxState, CartItem } from '../../types';
import {
  CartItemElement,
  ButtonQuantity,
  ButtonRemove,
  DivCheckout,
  Message,
  AvailableQuantity } from './styles';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: ReduxState) => state.cart);

  const removeItem = (item: CartItem) => {
    if (item.quantity <= 1) {
      dispatch(removeCartItemAction(item));
    } else {
      dispatch(updateCartListAction(item, 'remove'));
    }
  };

  if (cart.length === 0) {
    return (
      <Message data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </Message>
    );
  }

  return (
    <>
      <ul>
        {cart.map((item) => {
          return (
            <CartItemElement key={ item.id }>
              <ButtonRemove
                data-testid="remove-product"
                onClick={ () => dispatch(removeCartItemAction(item)) }
              >
                <X size={ 24 } />
              </ButtonRemove>
              <img src={ item.thumbnail } alt={ item.title } />
              <div>
                <h3 data-testid="shopping-cart-product-name">{item.title}</h3>
                <p>{`R$ ${item.price}`}</p>
                <AvailableQuantity>
                  {`Disponível - ${(item.available_quantity - item.quantity)}`}

                </AvailableQuantity>
                <div>
                  <ButtonQuantity
                    data-testid="product-increase-quantity"
                    onClick={ () => dispatch(updateCartListAction(item, 'add')) }
                    disabled={ item.quantity >= item.available_quantity }
                  >
                    +
                  </ButtonQuantity>
                  <span data-testid="shopping-cart-product-quantity">
                    {item.quantity}
                  </span>
                  <ButtonQuantity
                    data-testid="product-decrease-quantity"
                    onClick={ () => removeItem(item) }
                  >
                    -

                  </ButtonQuantity>
                </div>
              </div>
            </CartItemElement>
          );
        })}
      </ul>
      <DivCheckout>
        <Link
          to="/checkout"
          data-testid="checkout-products"
        >
          Checkout
        </Link>

      </DivCheckout>
    </>
  );
}

export default Cart;
