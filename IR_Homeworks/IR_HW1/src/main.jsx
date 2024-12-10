import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import History from './pages/History.jsx';
import Architecture from './pages/Architecture.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },

  { path: '/history', element: <History /> },
  { path: '/architecture', element: <Architecture /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
