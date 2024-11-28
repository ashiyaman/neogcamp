import { useState } from 'react';

const GenderForm = () => {
  const [gender, setGender] = useState('');

  const onChangeHandler = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
      <form onChange={onChangeHandler}>
        <label>Select gender: </label>
        <br />
        <input type="radio" value="Female" name="gender" />
        Female
        <input type="radio" value="Male" name="gender" />
        Male
        <input type="radio" value="Other" name="gender" />
        Other
      </form>
      <p>Selected gender: {gender}</p>
    </div>
  );
};

const MealPreferance = () => {
  const [mealPreferance, setMealPreferance] = useState('');

  const mealPreferanceHandler = (event) => {
    setMealPreferance(event.target.value);
  };
  return (
    <div>
      <form onChange={mealPreferanceHandler}>
        <label>Choose your meal preferance:</label>
        <br />
        <input type="radio" name="mealPreferance" value="Veg" />
        Veg
        <input type="radio" name="mealPreferance" value="Non-Veg" />
        Non-Veg
      </form>
      <p>Selected meal preferance: {mealPreferance}</p>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <GenderForm />
      <MealPreferance />
    </main>
  );
}
