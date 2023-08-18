import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

function home() {
  return (
    <>
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>

      <Sidebar />
    </>
  );
}

export default home;
