import { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div>
      <label for="feedback">Give your Feedback:</label>
      <textarea
        id="feedback"
        onChange={(event) => setFeedback(event.target.value)}
      ></textarea>
      <button onClick={() => setShowFeedback(true)}>Submit</button>
      {showFeedback && <p>{feedback}</p>}
    </div>
  );
};

const Review = () => {
  const [review, setReview] = useState('');
  const [showReview, setShowReview] = useState(false);

  return (
    <div>
      <label for="review">Write your Movie Review:</label>
      <textarea
        id="review"
        onChange={(event) => setReview(event.target.value)}
      ></textarea>
      <button onClick={() => setShowReview(true)}>Submit Review</button>
      {showReview && <p>{review}</p>}
    </div>
  );
};

const Message = () => {
  const [message, setMessage] = useState('');

  const clickHandler = () => {
    const capitalizeMessage = message.toUpperCase();
    alert(`Message: ${capitalizeMessage}!`);
  };

  return (
    <div>
      <label for="message">Enter your Message:</label>
      <textarea
        id="message"
        onChange={(event) => setMessage(event.target.value)}
      ></textarea>
      <button onClick={clickHandler}>Display Message</button>
    </div>
  );
};

const Notes = () => {
  const [notes, setNotes] = useState('');
  const [showNotes, setShowNotes] = useState(false);

  return (
    <div>
      <label for="notes">Take your Notes:</label>
      <textarea
        id="notes"
        onChange={(event) => setNotes(event.target.value)}
      ></textarea>
      <button onClick={() => setShowNotes(true)}>Save Notes</button>
      {showNotes && <p>Notes Saved: {notes}</p>}
    </div>
  );
};

const Question = () => {
  const [question, setQuestion] = useState('');
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <div>
      <label for="question">Ask your Question:</label>
      <textarea
        id="question"
        onChange={(event) => setQuestion(event.target.value)}
      ></textarea>
      <button onClick={() => setShowQuestion(true)}>Submit Question</button>
      {showQuestion && (
        <p>
          Your Question:{' '}
          {question.charAt(question.length - 1) === '?'
            ? question
            : `${question}?`}
        </p>
      )}
    </div>
  );
};

const Comment = () => {
  const [comment, setComment] = useState('');
  const [showComment, setShowComment] = useState(false);

  return (
    <div>
      <label for="comment">Leave your Comment:</label>
      <textarea
        id="comment"
        onChange={(event) => setComment(event.target.value)}
      ></textarea>
      <button onClick={() => setShowComment(true)}>Submit Comment</button>
      {showComment && <p>\\{comment}</p>}
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Feedback />
      <br />
      <br />
      <Review />
      <br />
      <br />
      <Message />
      <br />
      <br />
      <Notes />
      <br />
      <br />
      <Question />
      <br />
      <br />
      <Comment />
    </div>
  );
}
