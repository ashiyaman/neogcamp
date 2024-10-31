const experienceFilter = document.querySelector('#experienceFilter');
const employeeList = document.querySelector('#employeeList');

const employeeData = [
  { id: 1, name: 'Alice', experienceInYears: 2 },

  { id: 2, name: 'Bob', experienceInYears: 9 },

  { id: 3, name: 'Charlie', experienceInYears: 4 },

  { id: 4, name: 'John', experienceInYears: 19 },
];

const displayEmployees = (selectedEmployees) => {
  const employees = selectedEmployees
    ? employeeData.filter((employee) => employee.experienceInYears > 5)
    : employeeData;

  const employeeListHTML = employees.map(
    (employee) => `
    <li>
      <strong>ID: </strong>${employee.id}<br>
      <strong>Name: </strong>${employee.name}<br>
      <strong>Experience: </strong>${employee.experienceInYears} years<br>
    </li>
    <hr>
  `
  );

  employeeList.innerHTML = employeeListHTML.join('');
};

experienceFilter.addEventListener('change', () => {
  displayEmployees(experienceFilter.checked);
});

displayEmployees(false);
