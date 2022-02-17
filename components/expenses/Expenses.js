import React, { useState } from "react";

import ExpensesList from './ExpensesList';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import Expensefilter from '../Filter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";



const Expenses = props => {
    const [filterValue, setFilterValue]=useState('2022');
    
    const filterChangeHandler = (currentFilterValue) => {
        setFilterValue(currentFilterValue);
        console.log(currentFilterValue, filterValue);
    }

    let filteredArray = props.itens.filter(expense => {
        return (expense.date.getFullYear() == filterValue);
    });

    return (
        <li>
            <Card className='expenses'>
                <Expensefilter 
                    selected={filterValue} 
                    onFilterChange={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredArray}/>
                <ExpensesList itens={filteredArray} />
            </Card>
        </li>
    );
}

export default Expenses;