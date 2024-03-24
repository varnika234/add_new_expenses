import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [newamount, setAmount] = useState('');
    const [newdate, setDate] = useState('');


    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    };

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData={
            title:title,
            amount:newamount,
            date: new Date(newdate)
        }
        props.onSaveExpenseData(expenseData);
        console.log(expenseData);
        setAmount('');
        setDate('');
        setTitle('');
    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense_control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={newamount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type='date' value={newdate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense_actions'>
                <button type='submit'>Add Expenses</button>
            </div>
        </form>
    )

}

export default ExpenseForm;