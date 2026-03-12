import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    date: new Date(2023, 1 ,19),
    title: 'Toilet Paper',
    amount: 6.99,
  },
  {
    id: 'e2',
    date: new Date(2026, 1, 14),
    title: 'New Textbook',
    amount: 15.99,
  },
  {
    id: 'e1',
    date: new Date(2024, 1, 20),
    title: 'Sneakers',
    amount: 199.99,
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;