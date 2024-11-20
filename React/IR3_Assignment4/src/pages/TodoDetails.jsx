import { useParams } from 'react-router-dom';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function TodoDetails() {
  const todoId = useParams();

  const todos = [
    {
      id: 1,
      title: 'Buy Bread',
      description: 'Description of Todo 1',
      date: '24-02-24',
    },
    {
      id: 2,
      title: 'Go for a Walk',
      description: 'Description of Todo 2',
      date: '24-02-24',
    },
    {
      id: 3,
      title: 'Attend Painting class',
      description: 'Description of Todo 3',
      date: '24-02-24',
    },
    {
      id: 4,
      title: 'Buy flowers',
      description: 'Description of Todo 4',
      date: '24-02-24',
    },
    {
      id: 5,
      title: 'Visit Church',
      description: 'Description of Todo 5',
      date: '12-02-24',
    },
    {
      id: 6,
      title: 'Write Journal',
      description: 'Description of Todo 6',
      date: '13-03-24',
    },
    {
      id: 7,
      title: 'Water the plants',
      description: 'Description of Todo 7',
      date: '22-03-24',
    },
    {
      id: 8,
      title: 'Clean the windows',
      description: 'Description of Todo 8',
      date: '28-03-24',
    },
    {
      id: 9,
      title: 'Buy Gifts for Holi',
      description: 'Description of Todo 9',
      date: '24-03-24',
    },
  ];

  const todoData = todos.find((todo) => todo.id == todoId.todoId);

  return (
    <>
      <Header />
      <main className="container my-4">
        <div className="card">
          <h4 className="px-3 pt-3">Todo Details</h4>
          <div className="card-body">
            <p>ID: {todoData.id}</p>
            <p>Title: {todoData.title}</p>
            <p>Description: {todoData.description}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
