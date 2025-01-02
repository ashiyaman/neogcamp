import { useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { employees } from './Employees.jsx';

const EmployeeDetails = () => {
  const employeeId = useParams();

  const selectedEmployee = employees.find(
    (employee) => employee.id == employeeId.employeeId
  );

  return (
    <>
      <Header />
      <main className="container my-4">
        {selectedEmployee && (
          <>
            <h2>{selectedEmployee.name}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Name: </strong>
                {selectedEmployee.name}
              </li>
              <li className="list-group-item">
                <strong>Designation: </strong>
                {selectedEmployee.title}
              </li>
              <li className="list-group-item">
                <strong>Department: </strong>
                {selectedEmployee.department}
              </li>
            </ul>
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default EmployeeDetails;
