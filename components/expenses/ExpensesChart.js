import React from "react";

import Chart from '../chart/Chart'

const ExpensesChart  = props => {

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Fev', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Ago', value: 0 },
        { label: 'Set', value: 0 },
        { label: 'Out', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dez', value: 0 },    
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return (
        <Chart dataPoints={chartDataPoints} />        
    )
}

export default ExpensesChart;