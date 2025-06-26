import { NavLink, Outlet } from 'react-router-dom';
import BreadCrumbs from '../components/BreadCrumbs';

function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <h1>My Articles</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/articles">My Articles</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <BreadCrumbs />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default RootLayout;
