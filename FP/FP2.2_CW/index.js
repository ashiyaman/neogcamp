const tasks = [
    { id: 1, title: 'Task 1', status: 'Completed' },
    { id: 2, title: 'Task 2', status: 'Pending' },
    { id: 3, title: 'Task 3', status: 'Completed' },
    { id: 4, title: 'Task 4', status: 'Pending' },
    { id: 5, title: 'Task 5', status: 'Pending' },
    { id: 6, title: 'Task 6', status: 'Not Started' },
  ];
  
  const filterPendingTasks = tasks.filter((task) => task.status === 'Pending');
  console.log('Pending Tasks:', filterPendingTasks);
  
  const filterNotCompleted = tasks.filter((task) => task.status !== 'Completed');
  console.log('Not Completed tasks:', filterNotCompleted);
  
  const books = [
    { id: 1, title: 'Book 1', year: 2019, noOfPages: 250 },
    { id: 2, title: 'Book 2', year: 2013, noOfPages: 350 },
    { id: 3, title: 'Book 3', year: 2021, noOfPages: 450 },
    { id: 4, title: 'Book 4', year: 2023, noOfPages: 400 },
  ];
  
  const filteredBooks = books.filter(
    (book) => book.year > 2015 && book.noOfPages > 300
  );
  console.log('Filtered Books:', filteredBooks);
  