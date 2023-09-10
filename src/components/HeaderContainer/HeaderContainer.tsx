import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { House, ShoppingCartSimple, MagnifyingGlass } from '@phosphor-icons/react';

import { Header, NavHeader, FormSearch, DivCartHeader } from './styles';
import { getProductsFromCategoryAndQuery } from '../../services/api';
import { updateProductListAction } from '../../redux/actions';
import { ReduxState } from '../../types';

function HeaderContainer() {
  const dispatch = useDispatch();
  const cart = useSelector((state: ReduxState) => state.cart);

  const [headerText, setHeaderText] = useState('Livre Mercado');
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setHeaderText('LM');
      } else {
        setHeaderText('Livre Mercado');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const products = await getProductsFromCategoryAndQuery({ query: searchInput });
    dispatch(updateProductListAction(products.results));
    setSearchInput('');
  };

  return (
    <Header>
      <h2>{headerText}</h2>
      <FormSearch onSubmit={ handleSubmit }>
        <input
          data-testid="query-input"
          type="text"
          value={ searchInput }
          onChange={ (e) => setSearchInput(e.target.value) }
        />
        <button
          data-testid="query-button"
        >
          <MagnifyingGlass />
        </button>
      </FormSearch>
      <NavHeader>
        <NavLink to="/">
          <House size={ 24 } />
        </NavLink>
        <NavLink
          to="/carrinho"
          data-testid="shopping-cart-button"
        >
          <DivCartHeader>
            <ShoppingCartSimple size={ 24 } />
            <div data-testid="shopping-cart-size">
              {cart.reduce((total, cartItem) => total + cartItem.quantity, 0)}

            </div>
          </DivCartHeader>
        </NavLink>
      </NavHeader>
    </Header>
  );
}

export default HeaderContainer;
