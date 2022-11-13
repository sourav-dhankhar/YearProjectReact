import React from "react";
import ExpnseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpenses = (props) => {
    const onNewExpenseItem = (formData) => {
        const formItems = {
            ...formData,
            'id': 'id_' + Math.random().toString(),
        }
        console.log('formItems ', formItems);
        props.getExpenseForm(formItems);
    }
    return (
        <div className="new-expense">
            <ExpnseForm onSubmissionForm={onNewExpenseItem}/>
        </div>
    )
}

export default NewExpenses;