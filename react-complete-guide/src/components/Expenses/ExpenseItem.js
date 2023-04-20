import React, { useState } from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import "../Expenses/ExpenseItem.css";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickButton = () => {
    setTitle(`Updated ${title}`);
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">$ {props.amount}</p>
        <button className="btn" onClick={clickButton}> Change title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
