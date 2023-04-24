import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  // First Approach using multiple useState hook to trigger the change in Doc
  // const [enterTitle, setEnterTitle] = useState("");
  // const [enterAmount, setEnterAmount] = useState("");
  // const [enterDate, setEnterDate] = useState("");

  // Second Approach using single useState hook to trigger the change in Doc
  const [userInput, setUserInput] = useState({
    enterTitle: "",
    enterAmount: "",
    enterDate: "",
  });

  const titleChangeHandler = (event) => {
    // First Approach
    // setEnterTitle(event.target.value);

    // In Second Approach Passing the object for multiple properties as argument
    // setUserInput({
    //   ...userInput,
    //   enterTitle: event.target.value,
    // });

    // In Second Approach Using the anonymous function
    setUserInput((prevState) => {
      return { ...userInput, enterTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnterAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enterAmount: event.target.value,
    // });

    setUserInput((prevState) => {
      return { ...userInput, enterAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    // setEnterDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterDate: event.target.value,
    // });

    setUserInput((prevState) => {
      return { ...userInput, enterDate: event.target.value };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-30"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__action">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
