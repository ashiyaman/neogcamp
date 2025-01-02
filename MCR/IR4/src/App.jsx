import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const App = () => {
  const [productName, setProductName] = useState();
  const [quantity, setQuantity] = useState();
  const [category, setCategory] = useState();
  const [condition, setCondition] = useState();
  const [isWaterProof, setIsWaterProof] = useState(false);
  const [features, setFeatures] = useState([]);
  const [storageDate, setStorageDate] = useState();
  const [unitNumber, setUnitNumber] = useState();
  const [unitCost, setUnitCost] = useState();
  const [vendorName, setVendorName] = useState();
  const [showDetails, setShowDetails] = useState(false);
  const [showConditionError, setShowConditionError] = useState(false);

  const conditionHandler = (e) => {
    setShowConditionError(false);
    setCondition(e.target.value);
  };

  const featureHandler = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFeatures([...features, value]);
    } else {
      setFeatures(features.filter((feature) => feature !== value));
    }
  };

  const formHandler = (e) => {
    e.preventDefault();
    if (!condition) {
      setShowConditionError(true);
    }
    if (
      productName &&
      quantity &&
      category &&
      condition &&
      storageDate &&
      unitNumber &&
      unitCost &&
      vendorName
    ) {
      setShowDetails(true);
    }
    return;
  };

  return (
    <>
      <header className="bg-primary">
        <div className="container">
          <nav className="navbar">
            <a href="/" className="navbar-brand text-white">
              Store Hub
            </a>
          </nav>
        </div>
      </header>
      <main className="bg-dark py-3">
        <div className="container text-white">
          <h1 className="py-2">Inventory Form</h1>
          <form onSubmit={formHandler} className="my-2">
            <label htmlFor="productName">Product Name: </label>
            <br />
            <input
              id="productName"
              type="text"
              className="form-control"
              required
              onChange={(e) => setProductName(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="quantity">Quantity: </label>
            <br />
            <input
              id="quantity"
              type="number"
              className="form-control"
              required
              onChange={(e) => setQuantity(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="category">Category: </label>
            <br />
            <select
              className="form-control"
              required
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Select Category</option>
              <option value="Clothing">Clothing</option>
              <option value="Footwear">Footwear</option>
              <option value="Equipment">Equipment</option>
            </select>
            <br />
            <br />
            <label htmlFor="condition">Condition: </label>
            <br />
            <input
              name="condition"
              type="radio"
              value="New"
              onChange={conditionHandler}
              className="mx-2"
            />
            New
            <input
              name="condition"
              type="radio"
              value="Used"
              onChange={conditionHandler}
              className="mx-2"
            />
            Used
            <br />
            {showConditionError && <p>Please select one option.</p>}
            <br />
            <input
              id="waterproof"
              type="checkbox"
              onChange={(e) => setIsWaterProof(!isWaterProof)}
            />{' '}
            Waterproof
            <br />
            <br />
            <label htmlFor="features">Features: </label>
            <br />
            <input
              type="checkbox"
              value="Lightweight"
              onChange={featureHandler}
              className="mx-2"
            />
            Lightweight
            <input
              type="checkbox"
              value="Durable"
              onChange={featureHandler}
              className="mx-2"
            />
            Durable
            <br />
            <br />
            <label htmlFor="storageDate">Date of Storage: </label>
            <br />
            <input
              id="storageDate"
              type="date"
              className="form-control"
              required
              onChange={(e) => setStorageDate(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="storageUnitNumber">Storage Unit Number: </label>
            <br />
            <input
              id="storageUnitNumber"
              type="number"
              className="form-control"
              required
              onChange={(e) => setUnitNumber(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="storageUnitCost">Storage Unit Cost: </label>
            <br />
            <input
              id="storageUnitCost"
              type="number"
              className="form-control"
              required
              onChange={(e) => setUnitCost(e.target.value)}
            />
            <br />
            <br />
            <label htmlFor="vendorName">Vendor Name: </label>
            <br />
            <input
              id="vendorName"
              type="text"
              className="form-control"
              required
              onChange={(e) => setVendorName(e.target.value)}
            />
            <br />
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <br />
          </form>
          {showDetails && (
            <div className="my-3">
              <h3>Submitted Details: </h3>
              <p>Product Name: {productName}</p>
              <p>Quantity: {quantity}</p>
              <p>Category: {category}</p>
              <p>Condition: {condition}</p>
              <p>Waterproof: {isWaterProof ? `Yes` : `No`}</p>
              <p>
                Features: {features.length > 0 ? features.join(', ') : `none`}
              </p>
              <p>Date Of Storage: {storageDate}</p>
              <p>Storage Unit Number: {unitNumber}</p>
              <p>Unit Cost: ${unitCost}</p>
              <p>Vendor Name: {vendorName}</p>
              <p>Total Cost: ${quantity * unitCost}</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default App;
