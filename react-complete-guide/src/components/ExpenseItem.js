import './ExpenseItem.css'
function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>March 28th 2023</div>
      <div className='expense-item__description'>
        <h2>Car Insurance</h2>
        <p className='expense-item__price'>$ 294.3</p>
      </div>
    </div>
  );
}

export default ExpenseItem;
