import { useState } from 'react';

const FeedbackApp = () => {
  const questions = [
    {
      id: 1,
      question: 'Rate the overall experience:',
      options: ['Excellent', 'Good', 'Average', 'Poor'],
    },
    {
      id: 2,
      question: 'How likely are you to recommend us to a friend or colleague?',
      options: ['Very Likely', 'Likely', 'Unlikely', 'Very Unlikely'],
    },
  ];

  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState([]);

  const formHandler = () => {
    setShowFeedback(true);
  };

  return (
    <>
      <h2>Feedback App</h2>
      {!showFeedback ? (
        <form onSubmit={formHandler}>
          {questions.map((item) => (
            <div key={item.id}>
              <h4>{item.question}</h4>
              <ul>
                {item.options.map((option, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      name={`question_${item.id}`}
                      value={option}
                      onChange={(event) =>
                        setAnswers([...answers, event.target.value])
                      }
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
        <div>
          <h4>Thank You for Your Feedback!</h4>
          <p>Your Answers: {answers.join(', ')}</p>
        </div>
      )}
    </>
  );
};

const FavMovieApp = () => {
  const questions = [
    {
      id: 1,
      question: 'Favorite Movie Genre?',
      options: ['Action', 'Comedy', 'Drama', 'Sci-Fi'],
    },
    {
      id: 2,
      question: 'Favorite Movie of All Time?',
      options: [
        'The Shawshank Redemption',
        'The Godfather',
        'Pulp Fiction',
        'The Dark Knight',
      ],
    },
  ];

  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState([]);

  const formHandler = () => {
    setShowFeedback(true);
  };

  return (
    <>
      <h2>Favorite Movie App</h2>
      {!showFeedback ? (
        <form onSubmit={formHandler}>
          {questions.map((item) => (
            <div key={item.id}>
              <h4>{item.question}</h4>
              <ul>
                {item.options.map((option, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      name={`question_${item.id}`}
                      value={option}
                      onChange={(event) =>
                        setAnswers([...answers, event.target.value])
                      }
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
        <div>
          <h4>Thank You for Sharing Your Favorites!</h4>
          <p>{answers.join(', ')}</p>
        </div>
      )}
    </>
  );
};

export default function App() {
  return (
    <main>
      <FeedbackApp />
      <FavMovieApp />
    </main>
  );
}
