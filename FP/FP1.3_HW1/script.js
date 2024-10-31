const employees = [
    { id: 1, name: 'Alice', position: 'Tester' },
    { id: 2, name: 'Charlie', position: 'Developer' },
    { id: 3, name: 'Bob', position: 'Designer' },
    { id: 4, name: 'David', position: 'Manager' },
  ];
  
  const employeeList = document.querySelector('#employeeList');
  const employeeListItem = employees.map(
    (employee) => `
    <li style="list-style:none; width:"100%">
      ID: ${employee.id}<br>
      Name: ${employee.name}<br>
      Position: ${employee.position}
      <hr>
    </li>
  `
  );
  employeeList.innerHTML = employeeListItem.join('');
  