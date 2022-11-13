import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import { useState } from 'react';

const ExpenseItem = (props) => {
    //const expenseItem = props.item;
    const [expenseItem, setExpenseItem] = useState(props.title);
    const expenseAmount = props.amount;

    const changeItem = () => {
        setExpenseItem('Helllo KI haal chaal');
    }

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{expenseItem}</h2>
                <div className='expense-item__price'>{expenseAmount}</div>
            </div>
            <button onClick={changeItem}>Click Here</button>
        </div>
    )
}

export default ExpenseItem;