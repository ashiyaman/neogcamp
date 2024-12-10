import { useParams } from 'react-router-dom';
import Header from '../components/Header.jsx';

const EmployeeDetails = () => {
  const employeeId = useParams();

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
                {selectedEmployee.designation}
              </li>
              <li className="list-group-item">
                <strong>Department: </strong>
                {selectedEmployee.department}
              </li>
            </ul>
          </>
        )}
      </main>
    </>
  );
};

export default EmployeeDetails;
