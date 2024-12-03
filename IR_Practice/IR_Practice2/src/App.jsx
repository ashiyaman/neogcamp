import { useState } from 'react';

const questions = [
  {
    id: 1,
    question: 'Favorite Color?',
    options: ['Red', 'Blue', 'Green', 'Yellow'],
  },
  {
    id: 2,
    question: 'Favorite Animal?',
    options: ['Dog', 'Cat', 'Bird', 'Fish'],
  },
  {
    id: 3,
    question: 'Favorite Food?',
    options: ['Pizza', 'Burger', 'Pasta', 'Salad'],
  },
];

export default function App() {
  const [showForm, setShowForm] = useState(true);

  const formHandler = (event) => {
    event.preventDefault();
    setShowForm(false);
  };

  return (
    <main>
      <h2>Polling App</h2>
      {showForm ? (
        <form onSubmit={formHandler}>
          {questions.map((item) => (
            <div key={item.id}>
              <h3>{item.question}</h3>
              <ul>
                {item.options.map((option, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      name={`question _${item.id}`}
                      value={option}
                      required
                    />
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button>Submit</button>
        </form>
      ) : (
        <h3>Thank You for Participating!</h3>
      )}
    </main>
  );
}
