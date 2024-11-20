const Header = () => {
  return (
    <header>
      <h1>Welcome To Our Company</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const EmployeeDetails = ({ employee }) => {
  return (
    <div>
      <h2>Employee Details</h2>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Position: {employee.position}</p>
      <p>Department: {employee.department}</p>
      <p>Email: {employee.email}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024. Company Name. All rights Reserved.</p>
    </footer>
  );
};

export default function App() {
  const employee = {
    id: 1,
    name: 'John Doe',
    position: 'Software Developer',
    department: 'Engineering',
    email: 'ashiya1005@gmail.com',
  };

  return (
    <>
      <Header />
      <EmployeeDetails employee={employee} />
      <Footer />
    </>
  );
}
