import { useState } from 'react';

export default function App() {
  const questions = [
    {
      id: 1,
      question: 'What is 2 + 2?',
      options: ['3', '4', '5'],
      correctAnswer: '4',
    },
    {
      id: 2,
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin'],
      correctAnswer: 'Paris',
    },
    {
      id: 3,
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'J.K. Rowling', 'Stephen King'],
      correctAnswer: 'Harper Lee',
    },
  ];

  const [showResult, setShowResult] = useState(false);
  const [count, setCount] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [answer, setAnswer] = useState();
  const [score, setScore] = useState(0);

  const quizHandler = () => {
    if (currentQuestion.correctAnswer == answer) {
      setScore(score + 1);
    }
    if (count < questions.length) {
      setCount(count + 1);
      setCurrentQuestion(questions[count]);
    } else {
      setShowResult(true);
    }
  };

  return (
    <main>
      <h2>Quiz App</h2>
      {!showResult ? (
        <>
          <h3>Question {currentQuestion.id}</h3>
          <p>{currentQuestion.question}</p>
          <ul>
            {currentQuestion.options.map((option) => (
              <li key={option}>
                <input
                  type="radio"
                  name={`question_${currentQuestion.id}`}
                  value={option}
                  onChange={(event) => setAnswer(event.target.value)}
                />
                {option}
              </li>
            ))}
          </ul>
          {<button onClick={quizHandler}>Next</button>}
        </>
      ) : (
        <>
          <h4>Quiz Result</h4>
          <p>
            Your Score: {score} / {questions.length}
          </p>
        </>
      )}
    </main>
  );
}
