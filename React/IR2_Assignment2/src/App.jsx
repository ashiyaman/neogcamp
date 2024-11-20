const Exercises = ({ exercises }) => {
  const totalCaloriesBurned = exercises.reduce(
    (acc, curr) => acc + curr.caloriesBurned,
    0
  );
  return (
    <>
      <h2>Total Calories Burned:</h2>
      <p>{totalCaloriesBurned}</p>
    </>
  );
};

const Songs = ({ songs }) => {
  const totalDuration = songs
    .filter((song) => song.rating > 3.9)
    .reduce((acc, curr) => acc + curr.duration, 0);
  return (
    <>
      <h2>Total Duration:</h2>
      <p>{totalDuration}</p>
    </>
  );
};

const Books = ({ books, title }) => {
  const selectedBook = books.find((book) => book.title === title);
  return (
    <>
      <h2>Book Details:</h2>
      <p>Title: {selectedBook.title}</p>
      <p>Author: {selectedBook.author}</p>
      <p>Genre: {selectedBook.genre}</p>
    </>
  );
};

const SongData = ({ songs, title }) => {
  const selectedSong = songs.find((song) => song.title === title);
  return (
    <>
      <h2>Song Details:</h2>
      <p>Title: {selectedSong.title}</p>
      <p>artist: {selectedSong.artist}</p>
      <p>Genre: {selectedSong.genre}</p>
    </>
  );
};

const Cities = ({ cities, name }) => {
  const selectedCity = cities.find((city) => city.name === name);
  return (
    <>
      <h2>City Details:</h2>
      <p>Name: {selectedCity.name}</p>
      <p>Population: {selectedCity.population}</p>
    </>
  );
};

const Products = ({ products, id }) => {
  const selectedProduct = products.find((product) => product.id === id);
  return (
    <>
      <h2>Product Details:</h2>
      <p>Name: {selectedProduct.name}</p>
      <p>Price: ${selectedProduct.price}</p>
    </>
  );
};

const Students = ({ students, name }) => {
  const selectedStudent = students.find((student) => student.name === name);
  return (
    <>
      <h2>Student Details:</h2>
      <p>Name: {selectedStudent.name}</p>
      <p>Age: {selectedStudent.age}</p>
      <p>
        <strong>Grades:</strong>
      </p>
      <p>Maths: {selectedStudent.grades.math}</p>
      <p>Science: {selectedStudent.grades.science}</p>
      <p>English: {selectedStudent.grades.english}</p>
    </>
  );
};

const Orders = ({ orders, customerName }) => {
  const selectedOrder = orders.find((order) => order.customer === customerName);
  return (
    <>
      <h2>Order Details:</h2>
      <p>Name: {selectedOrder.customer}</p>
      <p>Amount: ${selectedOrder.totalAmount}</p>
      <p>
        <strong>Products:</strong>
      </p>
      {selectedOrder.products.map((product) => (
        <p key={product.id}>
          Name: {product.name}, Quantity: {product.quantity}
        </p>
      ))}
    </>
  );
};

const Employees = ({ employees, id }) => {
  const selectedEmployee = employees.find((employee) => employee.id === id);
  return (
    <>
      <h2>Employee Details:</h2>
      <p>Name: {selectedEmployee.name}</p>
      <p>Position: {selectedEmployee.position}</p>
      <p>Department: {selectedEmployee.department.name}</p>
      <p>Department Location: {selectedEmployee.department.location}</p>
    </>
  );
};

const Store = ({ products }) => {
  const productsInStock = products.filter(
    (product) => product.itemDetail.inStock === true
  );
  return (
    <>
      <h2>Total number of items in stock:</h2>
      <p>{productsInStock.length}</p>
    </>
  );
};

export default function App() {
  const exercises = [
    { id: 1, name: 'Running', caloriesBurned: 300 },
    { id: 2, name: 'Cycling', caloriesBurned: 200 },
    { id: 3, name: 'Swimming', caloriesBurned: 400 },
  ];

  const songs = [
    { id: 1, title: 'Song A', duration: 180, rating: 4.2 },
    { id: 2, title: 'Song B', duration: 210, rating: 3.8 },
    { id: 3, title: 'Song C', duration: 150, rating: 4.5 },
  ];

  const books = [
    {
      id: 1,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      genre: 'Fiction',
    },
    { id: 2, title: '1984', author: 'George Orwell', genre: 'Dystopian' },
    {
      id: 3,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      genre: 'Classic',
    },
  ];

  const newSongs = [
    {
      id: 1,
      title: 'Stairway to Heaven',
      artist: 'Led Zeppelin',
      genre: 'Rock',
    },
    { id: 2, title: 'Bohemian Rhapsody', artist: 'Queen', genre: 'Rock' },
    { id: 3, title: 'Rolling in the Deep', artist: 'Adele', genre: 'Pop' },
  ];

  const cities = [
    { id: 1, name: 'New York', population: 8500000 },
    { id: 2, name: 'Paris', population: 2200000 },
    { id: 3, name: 'Tokyo', population: 3770000 },
  ];

  const products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Headphones', price: 60 },
  ];

  const students = [
    {
      id: 1,
      name: 'Alice',
      age: 20,
      grades: { math: 90, science: 85, english: 92 },
    },
    {
      id: 2,
      name: 'Bob',
      age: 22,
      grades: { math: 78, science: 80, english: 85 },
    },
    {
      id: 3,
      name: 'Charlie',
      age: 21,
      grades: { math: 95, science: 88, english: 94 },
    },
  ];

  const orders = [
    {
      id: 1,
      customer: 'John Doe',
      totalAmount: 150,
      products: [
        { id: 101, name: 'Widget', quantity: 2 },
        { id: 102, name: 'Gadget', quantity: 1 },
      ],
    },
    {
      id: 2,
      customer: 'Alice Smith',
      totalAmount: 200,
      products: [
        { id: 103, name: 'Tool', quantity: 1 },
        { id: 104, name: 'Device', quantity: 3 },
      ],
    },
    {
      id: 3,
      customer: 'Bob Johnson',
      totalAmount: 100,
      products: [{ id: 105, name: 'Accessory', quantity: 5 }],
    },
  ];

  const employees = [
    {
      id: 1,
      name: 'Jane Doe',
      position: 'Software Engineer',
      department: { name: 'Engineering', location: 'Building A' },
    },
    {
      id: 2,
      name: 'Sam Smith',
      position: 'Marketing Manager',
      department: { name: 'Marketing', location: 'Building B' },
    },
    {
      id: 3,
      name: 'Mike Johnson',
      position: 'HR Specialist',
      department: { name: 'Human Resources', location: 'Building C' },
    },
  ];

  const store = {
    name: 'Tech Emporium',
    categories: [
      {
        id: 1,
        name: 'Electronics',
        itemDetail: { id: 101, product: 'Laptop', inStock: true },
      },
      {
        id: 2,
        name: 'Accessories',
        itemDetail: { id: 201, product: 'Headphones', inStock: true },
      },
      {
        id: 3,
        name: 'Electronics',
        itemDetail: { id: 301, product: 'Heater', inStock: false },
      },
    ],
  };

  return (
    <div>
      <Exercises exercises={exercises} />
      <Songs songs={songs} />
      <Books books={books} title="The Great Gatsby" />
      <SongData songs={newSongs} title="Bohemian Rhapsody" />
      <Cities cities={cities} name="Paris" />
      <Products products={products} id={3} />
      <Students students={students} name="Charlie" />
      <Orders orders={orders} customerName="Alice Smith" />
      <Employees employees={employees} id={1} />
      <Store products={store.categories} />
    </div>
  );
}
