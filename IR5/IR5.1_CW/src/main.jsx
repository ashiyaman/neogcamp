import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Movies from './pages/Movies.jsx';
import Report from './pages/Report.jsx';
import MovieDetails from './pages/MovieDetails.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/movies', element: <Movies /> },
  { path: '/report', element: <Report /> },
  { path: '/movies/:movieId', element: <MovieDetails /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
