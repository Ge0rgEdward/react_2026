import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2026");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses received year:", selectedYear);
    setFilteredYear(selectedYear);
  };

  console.log("Current filteredYear:", filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpenseItem data={props.items[0]} />
      <ExpenseItem data={props.items[1]} />
    </Card>
  );
};

export default Expenses;