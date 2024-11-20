import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import Cart from './pages/Cart.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/products/:productId',
    element: <ProductDetails />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
