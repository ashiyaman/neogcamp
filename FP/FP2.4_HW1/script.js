const radioButtons = document.getElementsByName('status');
const taskList = document.querySelector('#taskList');

const tasksData = [
  { id: 1, task: 'Task 1', status: 'todo' },
  { id: 2, task: 'Task 2', status: 'completed' },
  { id: 3, task: 'Task 3', status: 'inProgress' },
  { id: 4, task: 'Task 4', status: 'todo' },
  { id: 5, task: 'Task 5', status: 'completed' },
];

const renderTasks = (selectedStatus) => {
  const tasks =
    selectedStatus === 'all'
      ? tasksData
      : tasksData.filter((task) => task.status === selectedStatus);

  const taskListHTML = tasks.map(
    (taskDetail) => `
    <li>
      <strong>ID: </strong>${taskDetail.id}<br>
      <strong>Task: </strong>${taskDetail.task}<br>
      <strong>Status: </strong>${taskDetail.status}<br>
    </li>
    <hr>
  `
  );
  taskList.innerHTML = taskListHTML.join('');
};

radioButtons.forEach((radioBtn) => {
  radioBtn.addEventListener('change', function () {
    renderTasks(this.value);
  });
});

renderTasks('all');
