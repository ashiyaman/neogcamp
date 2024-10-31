const expenses = [
    { id: 1, name: 'Groceries', amount: 150 },
    { id: 2, name: 'Utilities', amount: 80 },
    { id: 3, name: 'Dining Out', amount: 120 },
    { id: 4, name: 'Transportation', amount: 50 },
  ];
  
  const expenseFilter = document.querySelector('#expenseFilter');
  const expenseListContainer = document.querySelector('#expenseListContainer');
  const totalExpense = document.querySelector('#totalExpense');
  
  const renderExpenseList = (expenseList) => {
    expenseListContainer.innerHTML = ``;
    const totalCost = expenseList.reduce((acc, curr) => {
      const liElement = document.createElement('li');
      liElement.innerHTML = `
        <strong>Expense: </strong>${curr.name}<br>
        <strong>Amount: </strong>$${curr.amount}<br>
        <hr>
      `;
      expenseListContainer.appendChild(liElement);
      return acc + curr.amount;
    }, 0);
  
    totalExpense.textContent = `$${totalCost}`;
  };
  
  expenseFilter.addEventListener('click', () => {
    const filteredExpenses = expenseFilter.checked
      ? expenses.filter((expense) => expense.amount > 100)
      : expenses;
    renderExpenseList(filteredExpenses);
  });
  
  renderExpenseList(expenses);
  