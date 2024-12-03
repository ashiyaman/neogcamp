import { useState } from 'react';

export default function App() {
  const [name, setName] = useState();
  const [pizzaSize, setPizzaSize] = useState();
  const [toppings, setToppings] = useState([]);
  const [crust, setCrust] = useState();
  const [deliveryType, setDeliveryType] = useState();
  const [instructions, setInstructions] = useState();
  const [showOrder, setShowOrder] = useState(false);

  const toppingsHandler = (event) => {
    const value = event.target.value;
    value
      ? setToppings([...toppings, value])
      : setToppings(toppings.filter((topping) => topping != value));
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (!pizzaSize || toppings.length === 0 || !crust || !deliveryType) {
      alert('Please fill in all required fields.');
      return;
    }
    setShowOrder(true);
  };

  return (
    <main>
      <h1>Pizza Order Form</h1>
      <form onSubmit={formHandler}>
        <label>Customer Name: </label>
        <input
          type="text"
          required
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <br />
        <label>Choose Pizza Size: </label>
        <select onChange={(event) => setPizzaSize(event.target.value)} required>
          <option value="" disabled>
            Select Size
          </option>
          <option name="size" value="small">
            Small
          </option>
          <option name="size" value="medium">
            Medium
          </option>
          <option name="size" value="large">
            Large
          </option>
        </select>
        <br />
        <br />
        <label>Choose Toppings:</label>
        <br />
        <input
          type="checkbox"
          name="toppings"
          value="pepperoni"
          onChange={toppingsHandler}
        />
        Pepperoni
        <br />
        <input
          type="checkbox"
          name="toppings"
          value="mushrooms"
          onChange={toppingsHandler}
        />
        Mushrooms
        <br />
        <input
          type="checkbox"
          name="toppings"
          value="olives"
          onChange={toppingsHandler}
        />
        Olives
        <br />
        <br />
        <label>Choose Crust Type: </label>
        <br />
        <input
          type="radio"
          name="crust"
          value="thin"
          required
          onChange={(event) => setCrust(event.target.value)}
        />
        Thin
        <br />
        <input
          type="radio"
          name="crust"
          value="thick"
          required
          onChange={(event) => setCrust(event.target.value)}
        />
        Thick
        <br />
        <br />
        <label>Choose Delivery Option: </label>
        <br />
        <input
          type="radio"
          name="delivery"
          value="pickup"
          required
          onChange={(event) => setDeliveryType(event.target.value)}
        />
        Pickup
        <br />
        <input
          type="radio"
          name="delivery"
          value="delivery"
          required
          onChange={(event) => setDeliveryType(event.target.value)}
        />
        Delivery
        <br />
        <br />
        <label>Special Instructions(if any):</label>
        <textarea
          cols="50"
          rows="5"
          onChange={(event) => setInstructions(event.target.value)}
        ></textarea>
        <br />
        <br />
        <button>Place Order</button>
      </form>
      <br />
      <br />
      {showOrder && (
        <div>
          <p>Customer Name: {name}</p>
          <p>Pizza Size: {pizzaSize}</p>
          <p>Toppings: {toppings.join(', ')}</p>
          <p>Crust: {crust}</p>
          <p>Delivery Option: {deliveryType}</p>
          <p>
            Special Instuctions: {instructions ? `${instructions}` : `none`}
          </p>
        </div>
      )}
    </main>
  );
}
