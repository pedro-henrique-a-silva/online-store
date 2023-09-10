import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyles } from './styles/global-styles';
import { light } from './styles/theme/light';

import './App.css';
import Home from './pages/Home/Home';
import Layout from './pages/Layout';
import Cart from './pages/Cart/Cart';
import Details from './pages/Details/Details';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <ThemeProvider theme={ light }>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/carrinho" element={ <Cart /> } />
          <Route path="/details/:id" element={ <Details /> } />
          <Route path="/checkout" element={ <Checkout /> } />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
