import Expenses from "./components/Expenses/Expenses";
import React, {useState} from 'react';
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSES=[
    {
        id:'e1',
        title:"School Fee",
        amount: 250,
        date: new Date(2024, 2, 12)
    },
    {
        id:'e2',
        title:"Books",
        amount: 230,
        date: new Date(2024, 1, 22)
    },
    {
        id:'e3',
        title:"House Rent",
        amount: 700,
        date: new Date(2023, 11, 2)
    },
    {
        id:'e4',
        title:"Food",
        amount: 540,
        date: new Date(2023, 12, 2)
    }
];
const App=()=> {
    
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
    const addExpensehandler=(expense)=>{
        const updatedExpense = [expense, ...expenses];
        setExpenses(updatedExpense);
    }
     
    return (
        <div>
            <h2>Lets Get Started!!</h2>
            <h2>Enter The crenditals and add your expenses to the list.</h2>
            <NewExpense onAddExpense={addExpensehandler}/>
           <Expenses item={expenses}/>
        </div>
    )
};

export default App;
