import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState } from '../../types';
import {
  ProductItem,
  ProductTitle,
  ProducListStyled,
  ButtonAddCart,
  FreteGratis,
  Message } from './styles';
import { updateCartListAction } from '../../redux/actions';

function ProductList() {
  const products = useSelector((state: ReduxState) => state.products);
  const cart = useSelector((state: ReduxState) => state.cart);

  const dispatch = useDispatch();

  const isProductAvailable = (productId: string) => {
    const product = cart
      .find((prodItem) => productId === prodItem.id);

    if (product) {
      return product.quantity;
    }

    return 0;
  };

  const limitarString = (str: string, limite: number) => {
    if (str.length <= limite) {
      return str;
    }
    return `${str.slice(0, limite)} ...`;
  };

  if (products.length === 0) {
    return (
      <Message data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </Message>
    );
  }

  return (
    <ProducListStyled>
      {products.map((product) => {
        return (
          <ProductItem key={ product.id } data-testid="product">

            <div>
              <Link
                data-testid="product-detail-link"
                to={ `details/${product.id}` }
              >
                <img src={ product.thumbnail } alt={ product.title } />
              </Link>
              <ProductTitle>{limitarString(product.title, 50)}</ProductTitle>
              <p>{`R$ ${product.price}`}</p>
              {product.shipping?.free_shipping && (
                <FreteGratis data-testid="free-shipping">*Frete Grátis</FreteGratis>
              )}
            </div>
            <ButtonAddCart
              data-testid="product-add-to-cart"
              onClick={ () => dispatch(updateCartListAction(product, 'add')) }
              disabled={ isProductAvailable(product.id) >= product.available_quantity }
            >
              Adicionar ao Carrinho

            </ButtonAddCart>
          </ProductItem>
        );
      })}
    </ProducListStyled>
  );
}

export default ProductList;
