import { useState } from 'react';

const FavoriteSports = () => {
  const [selectedSports, setSelectedSports] = useState([]);
  const changeSportsHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedSports((prevValue) => [...prevValue, value]);
    } else {
      setSelectedSports((prevValue) =>
        prevValue.filter((sport) => sport !== value)
      );
    }
  };
  return (
    <div>
      <label>Choose your Favorite Sport:</label>
      <br />
      <input type="checkbox" onChange={changeSportsHandler} value="Football" />
      Football
      <br />
      <input
        type="checkbox"
        onChange={changeSportsHandler}
        value="Basketball"
      />
      Basketball
      <br />
      <input type="checkbox" onChange={changeSportsHandler} value="Tennis" />
      Tennis
      <br />
      <input type="checkbox" onChange={changeSportsHandler} value="Swimming" />
      Swimming
      <br />
      {selectedSports && <p>Selected sports: {selectedSports.join(', ')}</p>}
      <br />
      <br />
    </div>
  );
};

const FavoriteColors = () => {
  const [selectedColors, setSelectedColors] = useState([]);
  const changeColorsHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedColors((prevValue) => [...prevValue, value]);
    } else {
      setSelectedColors((prevValue) =>
        prevValue.filter((color) => color !== value)
      );
    }
  };
  return (
    <div>
      <label>Choose your Favorite Colors:</label>
      <br />
      <input type="checkbox" onChange={changeColorsHandler} value="Red" />
      Red
      <br />
      <input type="checkbox" onChange={changeColorsHandler} value="Blue" />
      Blue
      <br />
      <input type="checkbox" onChange={changeColorsHandler} value="Green" />
      Green
      <br />
      <input type="checkbox" onChange={changeColorsHandler} value="Yellow" />
      Yellow
      <br />
      {selectedColors && <p>Selected Colors: {selectedColors.join(', ')}</p>}
      <br />
      <br />
    </div>
  );
};

const MusicalInstruments = () => {
  const [selectedInstruments, setSelectedInstruments] = useState([]);
  const changeInstrumentsHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedInstruments((prevValue) => [...prevValue, value]);
    } else {
      setSelectedInstruments((prevValue) =>
        prevValue.filter((instrument) => instrument !== value)
      );
    }
  };
  return (
    <div>
      <label>Choose your musical instruments:</label>
      <br />
      <input
        type="checkbox"
        onChange={changeInstrumentsHandler}
        value="Guitar"
      />
      Guitar
      <br />
      <input
        type="checkbox"
        onChange={changeInstrumentsHandler}
        value="Piano"
      />
      Piano
      <br />
      <input
        type="checkbox"
        onChange={changeInstrumentsHandler}
        value="Drums"
      />
      Drums
      <br />
      <p>Selected Instruments: {selectedInstruments.join(', ')}</p>
      <br />
      <br />
    </div>
  );
};

const FavoriteAnimals = () => {
  const [selectedAnimals, setSelectedAnimals] = useState([]);
  const changeAnimalsHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedAnimals((prevValue) => [...prevValue, value]);
    } else {
      setSelectedAnimals((prevValue) =>
        prevValue.filter((animal) => animal !== value)
      );
    }
  };
  return (
    <div>
      <label>Choose your Favorite Animals:</label>
      <br />
      <input type="checkbox" onChange={changeAnimalsHandler} value="Dog" />
      Dog
      <br />
      <input type="checkbox" onChange={changeAnimalsHandler} value="Cat" />
      Cat
      <br />
      <input type="checkbox" onChange={changeAnimalsHandler} value="Rabbit" />
      Rabbit
      <br />
      <p>Selected Animals: {selectedAnimals.join(', ')}</p>
      <br />
      <br />
    </div>
  );
};

const FavoriteCars = () => {
  const [selectedCars, setSelectedCars] = useState([]);
  const changeCarsHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCars((prevValue) => [...prevValue, value]);
    } else {
      setSelectedCars((prevValue) => prevValue.filter((car) => car !== value));
    }
  };
  return (
    <div>
      <label>Choose your Favorite Cars:</label>
      <br />
      <input type="checkbox" onChange={changeCarsHandler} value="Mercedes" />
      Mercedes
      <br />
      <input type="checkbox" onChange={changeCarsHandler} value="BMW" />
      BMW
      <br />
      <input type="checkbox" onChange={changeCarsHandler} value="Audi" />
      Audi
      <br />
      <p>Selected cars: {selectedCars.join(', ')}</p>
      <br />
      <br />
    </div>
  );
};

export default function App() {
  return (
    <main>
      <FavoriteSports />
      <FavoriteColors />
      <MusicalInstruments />
      <FavoriteAnimals />
      <FavoriteCars />
    </main>
  );
}
