import "./App.css";
import React, {useState} from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpense = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.49,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wood)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpense)
  const onAddExpenseHandler = (expense) => {
    setExpenses((preExpense) => [expense, ...preExpense]);
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={onAddExpenseHandler}/>
      <Expense items={expenses} />
    </div>
  );
};

export default App;
