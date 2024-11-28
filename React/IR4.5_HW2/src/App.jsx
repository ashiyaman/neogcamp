import { useState } from 'react';

const ProgrammingLanguage = () => {
  const [programmingLanguage, setProgrammingLanguage] = useState('');
  const onChangeProgrammingLanguage = (event) => {
    setProgrammingLanguage(event.target.value);
  };

  return (
    <div>
      <form onChange={onChangeProgrammingLanguage}>
        <label>Select your proficiency in a programming language:</label>
        <br />
        <input type="radio" name="programmingLanguage" value="beginner" />
        Beginner
        <br />
        <input type="radio" name="programmingLanguage" value="intermediate" />
        Intermediate
        <br />
        <input type="radio" name="programmingLanguage" value="advanced" />
        Advanced
        <br />
      </form>
      <p>Selected proficiency level: {programmingLanguage}.</p>
    </div>
  );
};

const Destination = () => {
  const [destination, setDestination] = useState('');
  const onChangeDestination = (event) => {
    setDestination(event.target.value);
  };

  return (
    <div>
      <form onChange={onChangeDestination}>
        <label>Select your dream travel destination:</label>
        <br />
        <input type="radio" name="destination" value="beach" />
        Beach
        <br />
        <input type="radio" name="destination" value="mountain" />
        Mountain
        <br />
        <input type="radio" name="destination" value="city" />
        City
        <br />
      </form>
      <p>Selected travel destination: {destination}.</p>
    </div>
  );
};

const CoffeePreference = () => {
  const [coffeePreference, setCoffeePreference] = useState('');
  const onChangeCoffeePreference = (event) => {
    setCoffeePreference(event.target.value);
  };

  return (
    <div>
      <form onChange={onChangeCoffeePreference}>
        <label>Select your coffee preference:</label>
        <br />
        <input type="radio" name="coffeePreference" value="black" />
        Black Coffee
        <br />
        <input type="radio" name="coffeePreference" value="latte" />
        Latte
        <br />
        <input type="radio" name="coffeePreference" value="cappucino" />
        Cappucino
        <br />
      </form>
      <p>Selected coffee preference: {coffeePreference}.</p>
    </div>
  );
};

const Pet = () => {
  const [pet, setPet] = useState('');
  const onChangePet = (event) => {
    setPet(event.target.value);
  };

  return (
    <div>
      <form onChange={onChangePet}>
        <label>Select your preferred pet:</label>
        <br />
        <input type="radio" name="pet" value="dog" />
        Dog
        <br />
        <input type="radio" name="pet" value="cat" />
        Cat
        <br />
        <input type="radio" name="pet" value="fish" />
        Fish
        <br />
      </form>
      <p>Selected pet: {pet}.</p>
    </div>
  );
};

const Sport = () => {
  const [sport, setSport] = useState('');
  const onChangeSport = (event) => {
    setSport(event.target.value);
  };

  return (
    <div>
      <form onChange={onChangeSport}>
        <label>Select your favorite sport:</label>
        <br />
        <input type="radio" name="sport" value="football" />
        Football
        <br />
        <input type="radio" name="sport" value="basketball" />
        Basketball
        <br />
        <input type="radio" name="sport" value="tennis" />
        Tennis
        <br />
      </form>
      <p>Selected sport: {sport}.</p>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <ProgrammingLanguage />
      <br />
      <Destination />
      <br />
      <CoffeePreference />
      <br />
      <Pet />
      <br />
      <Sport />
    </div>
  );
}
