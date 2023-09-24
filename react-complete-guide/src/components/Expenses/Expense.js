import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
import "../Expenses/Expense.css";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";

const Expense = (props) => {
  const [filterYear, setFilterYear] = useState("2021");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expenseContent = <p>No Expense Found</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseContent}
    </Card>
  );
};

export default Expense;
