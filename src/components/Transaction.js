import React from 'react'
import { remove } from '../action/index';
import { useDispatch } from 'react-redux';

function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? '-' : '+';
  const dispatch = useDispatch();

  return (
    <div>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        <button onClick={() => dispatch(remove(transaction.id))} className="delete-btn">x</button>
      </li>
    </div>
  )
}

export default Transaction
