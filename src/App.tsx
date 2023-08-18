import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Carrinho from './pages/Carrinho/Carrinho';
import Layout from './components/Layout/Layout';
import CardDetails from './components/CardDetails/CardDetails';
import { CartItem, CardType } from './types';

function App() {
  const [cartList, setCartList] = useState<CartItem[]>([]);

  const updateCart = (prodName: CardType) => {
    const { title } = prodName;
    const cardItemExist = cartList
      .find((item) => item.title === title) !== undefined;

    if (!cardItemExist) {
      setCartList([...cartList, { ...prodName, quantity: 1 }]);
    } else {
      const newCartList = cartList
        .map((item) => {
          if (item.title === title) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      setCartList(newCartList);
    }
  };

  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route path="/" element={ <Home updateCart={ updateCart } /> } />
        <Route path="/carrinho" element={ <Carrinho cartList={ cartList } /> } />
        <Route
          path="/detalhesProduto/:id"
          element={
            <CardDetails
              updateCart={ updateCart }
            />
}
        />
        <Route path="/" />
      </Route>
      {/* <Route path="*" element={ <NotFound /> } /> */}
    </Routes>
  );
}

export default App;
