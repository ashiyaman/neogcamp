import { useState } from 'react';

const EducationLevel = () => {
  const [educationLevel, setEducationLevel] = useState('');
  const onChangeEducationLevel = (event) => {
    setEducationLevel(event.target.value);
  };

  return (
    <div>
      <form onChange={onChangeEducationLevel}>
        <label>Choose your higher education level:</label>
        <br />
        <input type="radio" name="educationLevel" value="High School" />
        High School
        <br />
        <input type="radio" name="educationLevel" value="bachelors degree" />
        Bachelor's Degree
        <br />
        <input type="radio" name="educationLevel" value="masters degree" />
        Master's Degree
        <br />
        <input type="radio" name="educationLevel" value="Ph.D" />
        Ph.D
        <br />
      </form>
      {educationLevel !== '' && (
        <p>Education level: I have a {educationLevel}.</p>
      )}
    </div>
  );
};

const MusicGenre = () => {
  const [genre, setGenre] = useState('');
  const onChangeMusicGenre = (event) => {
    setGenre(event.target.value);
  };

  return (
    <div>
      <form onChange={onChangeMusicGenre}>
        <label>Choose your favorite music genre:</label>
        <br />
        <input type="radio" name="MusicGenre" value="pop" />
        Pop
        <br />
        <input type="radio" name="MusicGenre" value="rock" />
        Rock
        <br />
        <input type="radio" name="MusicGenre" value="hiphop" />
        Hip Hop
        <br />
        <input type="radio" name="MusicGenre" value="classical" />
        Classical
        <br />
      </form>
      {genre !== '' && <p>I like {genre} music.</p>}
    </div>
  );
};

const PaymentMethod = () => {
  const [paymentmethod, setPaymentMethod] = useState('');
  const onChangePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div>
      <form onChange={onChangePaymentMethod}>
        <label>Select your preferred payment method:</label>
        <br />
        <input type="radio" name="PaymentMethod" value="creditcard" />
        Credit Card
        <br />
        <input type="radio" name="PaymentMethod" value="paypal" />
        Paypal
        <br />
        <input type="radio" name="PaymentMethod" value="bitcoin" />
        Bitcoin
        <br />
        <input type="radio" name="PaymentMethod" value="cash" />
        cash
        <br />
      </form>
      {paymentmethod !== '' && <p>Selected payment method: {paymentmethod}.</p>}
    </div>
  );
};

const Weather = () => {
  const [weather, setWeather] = useState('');
  const onChangeWeather = (event) => {
    setWeather(event.target.value);
  };

  return (
    <div>
      <form onChange={onChangeWeather}>
        <label>Choose your preferred weather:</label>
        <br />
        <input type="radio" name="weather" value="sunny" />
        Sunny
        <br />
        <input type="radio" name="weather" value="rainy" />
        Rainy
        <br />
        <input type="radio" name="weather" value="cloudy" />
        Cloudy
        <br />
        <input type="radio" name="Weather" value="snowy" />
        Snowy
        <br />
      </form>
      {weather !== '' && <p>Selected weather: I like {weather} weather.</p>}
    </div>
  );
};

const Occupation = () => {
  const [occupation, setOccupation] = useState('');
  const onChangeOccupation = (event) => {
    setOccupation(event.target.value);
  };

  return (
    <div>
      <form onChange={onChangeOccupation}>
        <label>Choose your occupation:</label>
        <br />
        <input type="radio" name="occupation" value="student" />
        Student
        <br />
        <input type="radio" name="Occupation" value="teacher" />
        Teacher
        <br />
        <input type="radio" name="Occupation" value="engineer" />
        Engineer
        <br />
        <input type="radio" name="Occupation" value="doctor" />
        Doctor
        <br />
      </form>
      <p>Selected occupation: {occupation}.</p>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <EducationLevel />
      <br />
      <MusicGenre />
      <br />
      <PaymentMethod />
      <br />
      <Weather />
      <br />
      <Occupation />
    </div>
  );
}
