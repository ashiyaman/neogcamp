import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { employees } from './Employees.jsx';

const Report = () => {
  const mostWorkedEmployee = employees.reduce((acc, curr) =>
    acc.hoursWorked > curr.hoursWorked ? acc : curr
  );

  const highestRatedEmployee = employees.reduce((acc, curr) =>
    acc.performanceRate > curr.performanceRate ? acc : curr
  );

  const totalOvertimeHours = employees.reduce(
    (acc, curr) => acc + curr.overTimeHours,
    0
  );

  return (
    <>
      <Header />
      <main className="container my-4">
        <h2>HR Report</h2>
        <hr />
        <div className="row">
          <div className="col-md-4">
            <h4>Most Worked Employee</h4>
            {mostWorkedEmployee && (
              <>
                <p>Name: {mostWorkedEmployee.name}</p>
                <p>Hours Worked: {mostWorkedEmployee.hoursWorked}</p>
              </>
            )}
          </div>
          <div className="col-md-4">
            <h4>Highest rated Employee</h4>
            {highestRatedEmployee && (
              <>
                <p>Name: {highestRatedEmployee.name}</p>
                <p>Performance rate: {highestRatedEmployee.performanceRate}</p>
              </>
            )}
          </div>
          <div className="col-md-4">
            <h4>Total Overtime Hours</h4>
            {totalOvertimeHours && (
              <>
                <p>Total Overtime Hours: {totalOvertimeHours}</p>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Report;
