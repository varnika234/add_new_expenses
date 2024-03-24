import Expenses from "./components/Expenses/Expenses";
import React, {useState} from 'react';
import NewExpense from "./components/NewExpense/NewExpense";

let DUMMY_EXPENSES=[
    {
        id:'e1',
        title:"School Fee",
        amount: 250,
        date: new Date(2021, 5, 12)
    },
    {
        id:'e2',
        title:"Books",
        amount: 230,
        date: new Date(2021, 2, 22)
    },
    {
        id:'e3',
        title:"House Rent",
        amount: 700,
        date: new Date(2021, 4, 2)
    },
    {
        id:'e4',
        title:"Food",
        amount: 540,
        date: new Date(2021, 2, 2)
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
            <NewExpense onAddExpense={addExpensehandler}/>
           <Expenses item={expenses}/>
        </div>
    )
};

export default App;
