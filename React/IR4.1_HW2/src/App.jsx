import { useState } from 'react';

function ChangeImage() {
  const [selctedImage, setSelectedimage] = useState(
    'https://www.placehold.co/150x150?text=Image+1'
  );
  const images = [
    'https://www.placehold.co/50x50?text=Image+1',
    'https://www.placehold.co/50x50?text=Image+2',
    'https://www.placehold.co/50x50?text=Image+3',
  ];
  return (
    <div>
      <div>
        <img src={selctedImage} style={{ height: 150, width: 150 }} />;
      </div>
      <div>
        <img
          src={images[0]}
          onClick={() => setSelectedimage(images[0])}
          style={{ cursor: 'pointer' }}
        />
        <img
          src={images[1]}
          onClick={() => setSelectedimage(images[1])}
          style={{ cursor: 'pointer' }}
        />
        <img
          src={images[2]}
          onClick={() => setSelectedimage(images[2])}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <hr />
    </div>
  );
}

function AddItem() {
  const [itemCount, setItemCount] = useState(1);
  const [itemList, setItemList] = useState([]);

  return (
    <div>
      <button
        onClick={() => {
          setItemCount(itemCount + 1);
          setItemList([...itemList, `Item ${itemCount}`]);
        }}
      >
        Add Item
      </button>
      <ul>
        {itemList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

function ChangeBgColor() {
  const [color, setColor] = useState('lightblue');
  const colors = [
    'lightblue',
    'lightgray',
    'lightpink',
    'lightgreen',
    'lightyellow',
  ];
  return (
    <div style={{ backgroundColor: color, margin: '5px' }}>
      <p>Background color is {color}.</p>
      <button
        onClick={() => {
          setColor(colors[Math.floor(Math.random() * colors.length)]);
          console.log(color);
        }}
      >
        Change Color
      </button>
      <hr />
    </div>
  );
}

function ToggleLoading() {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <p>{loading ? 'Loading...' : 'Content has loaded.'}</p>
      <button onClick={() => setLoading(!loading)}>Toggle Loading</button>
      <hr />
    </div>
  );
}

function SelectItem() {
  const [selectedItem, setSelectedItem] = useState('Item 1');
  const items = ['Item 1', 'Item 2', 'Item 3'];
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li
            style={{ cursor: 'pointer', paddingBottom: '5px' }}
            onClick={() => setSelectedItem(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <p>Selected Item: {selectedItem}.</p>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <ChangeImage />
      <AddItem />
      <ChangeBgColor />
      <ToggleLoading />
      <SelectItem />
    </main>
  );
}
