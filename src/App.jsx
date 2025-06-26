// styles
import './App.css';

//Layouts
import RootLayout from './layouts/RootLayout';
import ContactLayout from './layouts/ContactLayout';
import ArticlesLayout from './layouts/ArticlesLayout';

//pages
import Home from './pages/Home';
import About from './pages/About';
import Faq from './pages/help/Faq';
import Form from './pages/help/Form';
import PageNotFound from './pages/PageNotFound';
import Articles from './pages/articles/Articles';
import ArticlesDetail from './pages/articles/ArticlesDetail';
//react-router-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <PageNotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: 'contact',
          element: <ContactLayout />,
          children: [
            {
              path: 'faq',
              element: <Faq />,
            },
            {
              path: 'form',
              element: <Form />,
            },
          ],
        },
        {
          path: 'articles',
          element: <ArticlesLayout />,
          children: [
            {
              index: true,
              element: <Articles />,
            },
            {
              path: ':id',
              element: <ArticlesDetail />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
