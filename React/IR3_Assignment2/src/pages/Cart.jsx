import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Cart = () => {
  const cart = [
    { id: 1, name: 'Product 1', price: 99.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 129.99, quantity: 1 },
    { id: 3, name: 'Product 3', price: 79.99, quantity: 3 },
  ];
  let cartAmount = 0;

  return (
    <>
      <Header />
      <main className="container my-4">
        <h2>Shopping Cart</h2>
        <ul className="list-group my-4">
          {cart.map((item) => {
            const totalPrice = item.price * item.quantity;
            cartAmount += parseInt(totalPrice);
            console.log(cartAmount);
            return (
              <li className="list-group-item d-flex justify-content-between">
                <div>
                  <h5>{item.name}</h5>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <p className="right">Total: ${totalPrice.toFixed(2)}</p>
              </li>
            );
          })}
        </ul>
        <hr />
        <p>
          <strong>Total Price : ${cartAmount.toFixed(2)}</strong>
        </p>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
