import ExpenseItem from './ExpenseItem';

const Expenses = (props) => {
  return (
    <div>
      <ExpenseItem data={props.items[0]} />
      <ExpenseItem data={props.items[1]} />
    </div>
  );
};

export default Expenses;