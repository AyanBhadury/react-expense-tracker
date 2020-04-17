import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
function AddTransaction() {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

   // console.log(addTransaction);

    const submitHandler = (e) => {

        e.preventDefault();
        

        const newTransaction = {
            id: Date.now(),
            text,
            amount: +amount
        }
        //console.log(newTransaction)
        addTransaction(newTransaction);


    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
