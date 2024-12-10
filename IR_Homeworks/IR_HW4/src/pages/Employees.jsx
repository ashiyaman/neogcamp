import { Link } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Employees = () => {
  const employees = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Software Developer',
      department: 'IT',
    },
    {
      id: 2,
      name: 'Jane Smith',
      designation: 'Designer',
      department: 'Design',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      designation: 'Product Manager',
      department: 'Management',
    },
  ];
  return (
    <>
      <Header />
      <main className="container my-4">
        <h1>List of Employees</h1>
        <ul className="list-group my-4">
          {employees.map((employee) => (
            <li key={employee.id} className="list-group-item">
              <h5>{employee.name}</h5>
              <p>{employee.designation}</p>
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
