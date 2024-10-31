const books = [
    { id: 1, title: 'Book 1', price: 9.99, isFree: true },
    { id: 2, title: 'Book 2', price: 19.99, isFree: false },
    { id: 3, title: 'Book 3', price: 22.99, isFree: false },
    { id: 4, title: 'Book 4', price: 11.99, isFree: true },
    { id: 5, title: 'Book 5', price: 7.99, isFree: true },
  ];
  
  const bookList = document.querySelector('#bookList');
  const isFree = document.querySelector('#isFree');
  
  const renderBooks = (filterOnlyFree) => {
    const filteredBooks = filterOnlyFree
      ? books.filter((book) => book.isFree)
      : books;
  
    const bookListHTML = filteredBooks.map(
      (book) => `
      <li>
        <strong>ID: </strong>${book.id}<br>
        <strong>Title: </strong>${book.title}<br>
        <strong>Price: </strong>${book.price}<br>
      </li>
      <hr>
    `
    );
    bookList.innerHTML = bookListHTML.join('');
  };
  
  isFree.addEventListener('change', () => {
    renderBooks(isFree.checked);
  });
  
  renderBooks(false);
  