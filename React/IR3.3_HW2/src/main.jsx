import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import About from './pages/About.jsx';
import Stays from './pages/Stays.jsx';
import StayDetails from './pages/StayDetails.jsx'

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
    path: 'stays',
    element: <Stays />,
  },
  {
    path: "stays/:stayId",
    element: <StayDetails />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
