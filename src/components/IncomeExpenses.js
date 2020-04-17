import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function IncomeExpenses() {

    const {transactions} = useContext(GlobalContext)

    const amount =  transactions.map (transaction=>transaction.amount);

    const total_income = amount.filter(item => item > 0).reduce((acc,current)=>{
        return acc+current;
    },0);

    const total_expense = amount.filter(item => item < 0).reduce((acc,current)=>{
        return acc+current;
    },0);

    return (
        <>
            <div className="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p className="money plus">+₹{total_income}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p className="money minus">-₹{Math.abs(total_expense)}</p>
                </div>
            </div>
        </>
    )
}

export default IncomeExpenses
