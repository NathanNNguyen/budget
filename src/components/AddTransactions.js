import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../action';

const AddTransactions = () => {

  const dispatch = useDispatch()

  const [input, setInput] = useState({
    text: '',
    amount: ''
  })

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const submit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      text: input.text,
      amount: parseInt(input.amount)
    }
    dispatch(add(newTransaction))
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Transaction</label>
          <input
            name='text'
            value={input.text}
            onChange={handleInput}
            type="text"
            placeholder="Enter transaction"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            ( <span className='plus'>+ income</span> &nbsp; <span className='minus'>- expense</span> )
            </label>
          <input
            name='amount'
            value={input.amount}
            onChange={handleInput}
            type="number"
            placeholder="Enter amount"
          />
        </div>
        <button
          onClick={submit}
          className="btn">Add transaction
          <span></span></button>

      </form>
    </>
  )
}

export default AddTransactions;
