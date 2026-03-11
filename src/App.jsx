import './App.css';
import Expenses from './components/Expenses';

const App = () => {
  const expenses = [
    {
      date: new Date(2026, 1, 14),
      title: 'New book',
      price: 29.99,
    },
    {
      date: new Date(2026, 1, 14),
      title: 'New Textbook',
      price: 15.99,
    },
  ];

  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
};

export default App;