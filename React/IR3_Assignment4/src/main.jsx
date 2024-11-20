import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Todos from './pages/Todos.jsx';
import About from './pages/About.jsx';
import TodoDetails from './pages/TodoDetails.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/todos',
    element: <Todos />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/todos/:todoId',
    element: <TodoDetails />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
