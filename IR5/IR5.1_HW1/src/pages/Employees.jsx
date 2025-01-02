import { Link } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { useState } from 'react';

export const employees = [
  {
    id: '1',
    name: 'John Doe',
    title: 'Software Developer',
    department: 'IT',
    hoursWorked: 210,
    performanceRate: 0.79,
    overTimeHours: 60,
  },
  {
    id: '2',
    name: 'Jane Smith',
    title: 'Designer',
    department: 'Design',
    hoursWorked: 195,
    performanceRate: 0.95,
    overTimeHours: 45,
  },
  {
    id: '3',
    name: 'Bob Johnson',
    title: 'Project Manager',
    department: 'Management',
    hoursWorked: 170,
    performanceRate: 0.85,
    overTimeHours: 20,
  },
];

const Employees = () => {
  const [departmentFilter, setDepartmentFilter] = useState('All');

  const filteredEmployees =
    departmentFilter === 'All'
      ? employees
      : employees.filter(
          (employee) => employee.department === departmentFilter
        );

  return (
    <>
      <Header />
      <main className="container my-4">
        <h1>List of Employees</h1>
        <div className="my-3">
          <label htmlFor="departmentFilter">Filter By Department: </label>
          <br />
          <select
            id="departmentFilter"
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="form-select"
          >
            <option value="All">All Departments</option>
            <option value="IT">IT</option>
            <option value="Design">Design</option>
            <option value="Management">Management</option>
          </select>
        </div>
        <ul className="list-group my-4">
          {filteredEmployees.map((employee) => (
            <li key={employee.id} className="list-group-item">
              <h5>{employee.name}</h5>
              <p>{employee.title}</p>
              <Link
                to={`/employees/${employee.id}`}
                className="btn btn-primary"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Employees;
