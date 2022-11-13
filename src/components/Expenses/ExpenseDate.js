import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const date = props.date.split('-');
    const month = date[1];
    const day = date[2];
    const year = date[0];

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;