import React from 'react';
import Categories from '../../components/Categories/Categories';
import ProductList from '../../components/ProductList/ProductList';
import { MainWrapper } from './style';

function Home() {
  return (
    <MainWrapper>
      <Categories />
      <ProductList />
    </MainWrapper>
  );
}

export default Home;
