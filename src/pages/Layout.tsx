import { Outlet } from 'react-router-dom';
import HeaderContainer from '../components/HeaderContainer/HeaderContainer';

function Layout() {
  return (
    <>
      <HeaderContainer />
      <Outlet />
    </>
  );
}

export default Layout;
