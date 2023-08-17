import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Carrinho from './pages/Carrinho/Carrinho';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route element={ <Layout /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/carrinho" element={ <Carrinho /> } />
        <Route path="/" />
        <Route path="/" />
      </Route>
      {/* <Route path="*" element={ <NotFound /> } /> */}
    </Routes>
  );
}

export default App;
