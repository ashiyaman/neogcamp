import { useState } from 'react';

const MusicalInstrument = () => {
  const [musicalInstrument, setMusicalInstrument] = useState();
  return (
    <>
      <label>Select a musical instrument: </label>
      <select onChange={(event) => setMusicalInstrument(event.target.value)}>
        <option value="Guitar">Guitar</option>
        <option value="Piano">Piano</option>
        <option value="Drums">Drums</option>
      </select>
      <br />
      <p>Type: {musicalInstrument ? `${musicalInstrument}` : ``}</p>
    </>
  );
};

const Language = () => {
  const [language, setLanguage] = useState();
  return (
    <>
      <label>Select a language: </label>
      <select onChange={(event) => setLanguage(event.target.value)}>
        <option value="English">English</option>
        <option value="French">French</option>
        <option value="Spanish">Spanish</option>
      </select>
      {language && <p>Origin: {language}</p>}
    </>
  );
};

const CarBrand = () => {
  const cars = [
    {
      name: 'Audi',
      detail: 'German luxury automobile manufacturer',
    },
    {
      name: 'BMW',
      detail: 'Bavarian Motor Works, a german multinational company',
    },
    {
      name: 'Tesla',
      detail: 'American electric vehicle and clean energy company',
    },
  ];
  const [carBrand, setCarBrand] = useState();

  const carHandler = (event) => {
    const value = event.target.value;
    const selectedCar = cars.find((car) => car.name === value);
    setCarBrand(selectedCar);
  };

  return (
    <>
      <label>Select a car brand: </label>
      <select onChange={carHandler}>
        {cars.map((car) => (
          <option value={car.name}>{car.name}</option>
        ))}
      </select>
      <p>Details: {carBrand && `${carBrand.name} - ${carBrand.detail}`}</p>
    </>
  );
};

const Continent = () => {
  const continentDetails = [
    {
      name: 'Africa',
      detail: 'The second largest and second most populous continent',
    },
    {
      name: 'Asia',
      detail: 'The largest continent by land area and population',
    },
    {
      name: 'Europe',
      detail: 'The third most populous continent',
    },
  ];
  const [continent, setContinent] = useState();

  const continentHandler = (event) => {
    const value = event.target.value;
    const selectedContinent = continentDetails.find(
      (continent) => continent.name === value
    );
    setContinent(selectedContinent);
  };

  return (
    <>
      <label>Select a continent: </label>
      <select onChange={continentHandler}>
        {continentDetails.map((continentDetail) => (
          <option value={continentDetail.name}>{continentDetail.name}</option>
        ))}
      </select>
      <p>Details: {continent && `${continent.name} - ${continent.detail}`}</p>
    </>
  );
};

const MovieGenre = () => {
  const movies = [
    {
      name: 'Action',
      description: 'Films with exciting and fast paced sequences',
    },
    {
      name: 'Comedy',
      description: 'Films intended to make the audience laugh',
    },
    {
      name: 'Drama',
      description: 'Films with serious themes and emotions',
    },
  ];
  const [selectedMovie, setSelectedMovie] = useState();

  const movieHandler = (event) => {
    const value = event.target.value;
    const movieDetail = movies.find((movie) => movie.name === value);
    setSelectedMovie(movieDetail);
  };

  return (
    <>
      <label>Select a movie genre: </label>
      <select onChange={movieHandler}>
        {movies.map((movie) => (
          <option value={movie.name}>{movie.name}</option>
        ))}
      </select>
      <p>
        Description:{' '}
        {selectedMovie &&
          `${selectedMovie.name} - ${selectedMovie.description}`}
      </p>
    </>
  );
};

export default function App() {
  return (
    <main>
      <MusicalInstrument />
      <br />
      <Language />
      <br />
      <br />
      <CarBrand />
      <br />
      <br />
      <Continent />
      <br />
      <br />
      <MovieGenre />
    </main>
  );
}
