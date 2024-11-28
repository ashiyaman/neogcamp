import { useState } from 'react';

const FavoriteMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState([]);
  const changeMoviesHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedMovies((prevValue) => [...prevValue, value]);
    } else {
      setSelectedMovies((prevValue) =>
        prevValue.filter((sport) => sport !== value)
      );
    }
  };
  return (
    <div>
      <label>Choose your Favorite Movies:</label>
      <br />
      <input type="checkbox" onChange={changeMoviesHandler} value="Action" />
      Action
      <br />
      <input type="checkbox" onChange={changeMoviesHandler} value="Comedy" />
      Comedy
      <br />
      <input type="checkbox" onChange={changeMoviesHandler} value="Drama" />
      Drama
      <br />
      <p>Selected Movies: {selectedMovies.join(', ')}</p>
      <br />
    </div>
  );
};

const FavoriteFruits = () => {
  const [selectedFruits, setSelectedFruits] = useState([]);
  const changeFruitsHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFruits((prevValue) => [...prevValue, value]);
    } else {
      setSelectedFruits((prevValue) =>
        prevValue.filter((color) => color !== value)
      );
    }
  };
  return (
    <div>
      <label>Choose your Favorite Fruits:</label>
      <br />
      <input type="checkbox" onChange={changeFruitsHandler} value="Apple" />
      Apple
      <br />
      <input type="checkbox" onChange={changeFruitsHandler} value="Banana" />
      Banana
      <br />
      <input type="checkbox" onChange={changeFruitsHandler} value="Orange" />
      Orange
      <br />
      {selectedFruits && <p>Selected Fruits: {selectedFruits.join(', ')}</p>}
      <br />
    </div>
  );
};

const FavoriteDrinks = () => {
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const changeDrinksHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedDrinks((prevValue) => [...prevValue, value]);
    } else {
      setSelectedDrinks((prevValue) =>
        prevValue.filter((instrument) => instrument !== value)
      );
    }
  };
  return (
    <div>
      <label>Choose your Favorite Drinks:</label>
      <br />
      <input type="checkbox" onChange={changeDrinksHandler} value="Coffee" />
      Coffee
      <br />
      <input type="checkbox" onChange={changeDrinksHandler} value="Tea" />
      Tea
      <br />
      <input type="checkbox" onChange={changeDrinksHandler} value="Juice" />
      Juice
      <br />
      <p>Selected Drinks: {selectedDrinks.join(', ')}</p>
      <br />
    </div>
  );
};

const FavoriteDesserts = () => {
  const [selectedDesserts, setSelectedDesserts] = useState([]);
  const changeDessertsHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedDesserts((prevValue) => [...prevValue, value]);
    } else {
      setSelectedDesserts((prevValue) =>
        prevValue.filter((animal) => animal !== value)
      );
    }
  };
  return (
    <div>
      <label>Choose your Favorite Desserts:</label>
      <br />
      <input type="checkbox" onChange={changeDessertsHandler} value="Cake" />
      Cake
      <br />
      <input
        type="checkbox"
        onChange={changeDessertsHandler}
        value="Ice Cream"
      />
      Ice Cream
      <br />
      <input type="checkbox" onChange={changeDessertsHandler} value="Pie" />
      Pie
      <br />
      <p>Selected Desserts: {selectedDesserts.join(', ')}</p>
      <br />
    </div>
  );
};

const FavoriteBookGenres = () => {
  const [selectedBookGenres, setSelectedBookGenres] = useState([]);
  const changeBookGenresHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedBookGenres((prevValue) => [...prevValue, value]);
    } else {
      setSelectedBookGenres((prevValue) =>
        prevValue.filter((car) => car !== value)
      );
    }
  };
  return (
    <div>
      <label>Choose your Favorite Book Genres:</label>
      <br />
      <input
        type="checkbox"
        onChange={changeBookGenresHandler}
        value="Fiction"
      />
      Fiction
      <br />
      <input
        type="checkbox"
        onChange={changeBookGenresHandler}
        value="Mystery"
      />
      Mystery
      <br />
      <input
        type="checkbox"
        onChange={changeBookGenresHandler}
        value="Biogragraphy"
      />
      Biography
      <br />
      <p>Selected Genres: {selectedBookGenres.join(', ')}</p>
      <br />
    </div>
  );
};

export default function App() {
  return (
    <main>
      <FavoriteMovies />
      <FavoriteFruits />
      <FavoriteDrinks />
      <FavoriteDesserts />
      <FavoriteBookGenres />
    </main>
  );
}
