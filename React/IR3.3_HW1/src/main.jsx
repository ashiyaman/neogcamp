import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import About from './pages/About.jsx';
import Restaurants from './pages/Restaurants.jsx';
import RestaurantDetails from './pages/RestaurantDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/restaurants',
    element: <Restaurants />,
  },
  {
    path: '/restaurants/:restaurantId',
    element: <RestaurantDetails />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
