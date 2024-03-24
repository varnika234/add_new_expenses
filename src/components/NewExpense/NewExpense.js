import React from 'react';
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props)=>{

    const saveExpense = (expenseData)=>{
        const expense_Data= {
            ...expenseData,
            id: Math.random().toString()

        }
        props.onAddExpense(expense_Data);
        console.log(expense_Data);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpense}/>
        </div>
    )


}

export default NewExpense;