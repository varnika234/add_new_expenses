import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, {useState} from 'react';

function ExpenseItem(props){
   
   const [newTitle, setNewTitle] = useState("hi");

   const [title, setTitle] = useState(props.title);
   const clickHandler = () => {
      setTitle(newTitle);
    }
   const changeHandler = (event) =>{
      setNewTitle(event.target.value);// event sari values rakhta hai..so value is in it
   }

 return (
     <Card className="expense-item">
       <ExpenseDate date={props.date} />
        <div className="expense-item_description">
           <h2>{title}</h2>
           <div className="expense-item_price">${props.amount}</div>
        </div>
        <input type='text' value={newTitle} onChange={changeHandler}/>
        <button onClick={clickHandler}> Change Title</button>
    </Card>
 );
}

export default ExpenseItem;
