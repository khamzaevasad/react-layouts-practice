import { Outlet } from 'react-router-dom';

function ArticlesLayout() {
  return (
    <div>
      <h3>My articles</h3>
      <hr />
      <Outlet />
    </div>
  );
}

export default ArticlesLayout;
