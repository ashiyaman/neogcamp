const Header = () => {
    return (
      <header>
        <h1>Welcome to Our Website</h1>
        <nav>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </nav>
      </header>
    );
  };
  
  const SmartphoneDetails = ({ smartphone }) => {
    return (
      <main>
        <h2>Smartphone</h2>
        <p>Category: {smartphone.category}</p>
        <p>Price: ${smartphone.price}</p>
        <p>Stock: {smartphone.stock}</p>
      </main>
    );
  };
  
  const Footer = () => {
    return (
      <footer>
        <p>&copy; 2024 Our Company. All rights reserved.</p>
      </footer>
    );
  };
  
  export default function App() {
    const smartphone = {
      category: 'Electronics',
      price: 799.99,
      stock: 100,
    };
  
    return (
      <>
        <Header />
        <SmartphoneDetails smartphone={smartphone} />
        <Footer />
      </>
    );
  }
  