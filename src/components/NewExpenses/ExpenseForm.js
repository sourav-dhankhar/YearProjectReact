import React, { useState } from "react";
import './ExpenseForm.css';

const ExpnseForm = (props) => {
    const [items, setItems] = useState({
        'title' : '',
        'amount': 0,
        'date': '',
        'id': ''
    });

    const titleHandler = (event) => {
        setItems((prevState) => {
            return {
                ...prevState,
                'title': event.target.value
            }
        })
    }
    const amountHandler = (event) => {
        setItems((prevState) => {
            return {
                ...prevState,
                'amount': event.target.value
            }
        })
    }
    const dateHandler = (event) => {
        setItems((prevState) => {
            return {
                ...prevState,
                'date': event.target.value
            }
        })
    }

    const handleFormSubmission = (event) => {
        event.preventDefault();
        console.log('form submission values ', items);
        props.onSubmissionForm(items);
        setItems({
            'title': '',
            'amount': '',
            'date': ''
        })
    }

    return (
        <form onSubmit={handleFormSubmission}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={items.title} onChange={titleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" value={items.amount} step="0.01" onChange={amountHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={items.date} onChange={dateHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )   
}

export default ExpnseForm;