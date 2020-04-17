import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'



function Balance() {
    const {transactions} = useContext(GlobalContext)
   // console.log(transactions);

    const amount = transactions.map ((transaction)=>{
        return transaction.amount;
    })

    const total = amount.reduce ((accumulator,current)=>{
                return accumulator + current;
    },0)


    return (
        <>
            <h4>Your Balance</h4>
            <h1>₹{total}</h1>
        </>
    )
}

export default Balance
