import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux';

const renderWithRouter = (component: React.ReactElement, initialPath = '/') => {
  return render(
  <MemoryRouter initialEntries={ [initialPath] }>
    <Provider store={ store }>
      {component}
    </Provider>
  </MemoryRouter>);
};
export default renderWithRouter;
