import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseHandler = (AddExpense) => {
    const expenseData = {
      ...AddExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveAddExpense={saveExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
