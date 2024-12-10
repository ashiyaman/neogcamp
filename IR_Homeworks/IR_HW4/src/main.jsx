import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Employees from './pages/Employees.jsx';
import Report from './pages/Report.jsx';
import EmployeeDetails from './pages/EmployeeDetails.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/employees', element: <Employees /> },
  { path: '/report', element: <Report /> },
  { path: '/employees/:employeeId', element: <EmployeeDetails /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
