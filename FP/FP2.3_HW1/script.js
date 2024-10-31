const tasks = [
    { id: 1, title: 'Task 1', status: 'Completed' },
    { id: 2, title: 'Task 2', status: 'To Do' },
    { id: 3, title: 'Task 3', status: 'Pending' },
    { id: 4, title: 'Task 4', status: 'Pending' },
    { id: 5, title: 'Task 5', status: 'To Do' },
  ];
  
  const taskList = document.querySelector('#taskList');
  const taskStatusFilter = document.querySelector('#taskStatusFilter');
  
  const displayTasks = (filteredTasks) => {
    const selectedTasks = filteredTasks
      ? filteredTasks === 'All'
        ? tasks
        : tasks.filter((task) => task.status === taskStatusFilter.value)
      : tasks;
  
    const taskHTML = selectedTasks.map(
      (task) => `
        <li>
          <strong>ID: </strong>${task.id}<br>
          <strong>Title: </strong>${task.title}<br>
          <strong>Status: </strong>${task.status}<br>
        </li>
        <hr>
      `
    );
    taskList.innerHTML = taskHTML.join('');
  };
  
  taskStatusFilter.addEventListener('change', () => {
    displayTasks(taskStatusFilter.value);
  });
  
  displayTasks(false);
  