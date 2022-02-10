import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState(''); 
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [addExpense, setAddExpense] = useState(false);
/*const [userInput, setUserInput] = useState ({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
});*/
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        }); 
        */
       /* setUserInput((prevState) => {
           return { ...prevState, enteredTitle: event.target.value)}
       }); */
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        }); 
        */
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        }); 
        */
    }
    
    let addExpenseContent;

    const submitHandler = (event) => {
        event.preventDefault();
        let aux = addExpense;
        setAddExpense(addExpense => {
               return (!addExpense) });
        if (aux) {
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount, 
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    };
    if (!addExpense) {
        addExpenseContent = 
        <div>
            <div className='new-expense__controls'>
                <label>Title</label>
                <input 
                    type='text' 
                    value={enteredTitle} 
                    onChange={titleChangeHandler}
                    />
            </div>
            <div className='new-expense__controls'>
                <label>Amount</label>
                <input 
                    type='number' 
                    min="0.01" 
                    step="0.01" 
                    value={enteredAmount}
                    onChange ={amountChangeHandler}
                    />
            </div>
            <div className='new-expense__controls'>
                <label>Date</label>
                <input 
                    type='date' 
                    min="2020-01-01" 
                    max="2022-12-31" 
                    value={enteredDate} 
                    onChange={dateChangeHandler} />
            </div>
        
            <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
            </div>
            </div>
        
    }
    
    else {

        return (
        <form onSubmit={submitHandler}>
                <div className='new-expense__actions'>
                    <button type='submit'>Add New Expense</button>
                </div>
        </form>)

    }
        
        return (
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    {addExpenseContent}
                </div>
            </form>
        );
};

export default ExpenseForm;
