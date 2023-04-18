import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import "../Expenses/ExpenseItem.css";
const ExpenseItem = (props) => {
  const clickButton = () => {
    console.log('Clicked!!!!!');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">$ {props.amount}</p>
        <button  onClick={clickButton}></button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
