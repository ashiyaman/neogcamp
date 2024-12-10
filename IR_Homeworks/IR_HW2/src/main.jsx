import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Biography from './pages/Biography.jsx';
import Records from './pages/Records.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: '/biography',
    element: <Biography />,
  },
  {
    path: '/records',
    element: <Records />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
