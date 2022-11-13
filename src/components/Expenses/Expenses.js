import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart';
import { useState } from 'react';

const Expenses = (props) => {
    const [year, setYear] = useState('2022');
    const filteredExpense = props.expenses.filter( element => element.date.split('-')[0] === year);
    console.log('FileteredExpense ', filteredExpense);
    const onGettingYear = (yearData) => {
        setYear(yearData);
    }
    let items;
    if (filteredExpense.length === 0) {
        items = <p>No content available</p>
    } else {
        items = filteredExpense.length !== 0 && filteredExpense.map(item => <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />)
    }
    return (
        <div>
            <div className='expenses'>
                <ExpensesFilter year={year} onPassYear={onGettingYear} />
                <ExpenseChart expenses={filteredExpense}/>
                {items}
            </div>
        </div>
    )
}

export default Expenses;