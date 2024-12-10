import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Features from './pages/Features.jsx';
import Specifications from './pages/Specifications.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  {
    path: '/features',
    element: <Features />,
  },
  {
    path: '/specifications',
    element: <Specifications />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);