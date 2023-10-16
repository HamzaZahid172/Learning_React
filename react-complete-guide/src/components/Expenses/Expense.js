import Card from "../UI/Card";
import "../Expenses/Expense.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>{" "}
    </li>
  );
};

export default Expense;
