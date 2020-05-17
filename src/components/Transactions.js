import React from 'react'
import { useSelector } from 'react-redux';

import Transaction from './Transaction'

function Transactions() {
  const transactions = useSelector(state => state.transactions);

  React.useEffect(() => {
    const data = localStorage.getItem('store');
    if (data) {
      JSON.parse(data)
    }
  })

  React.useEffect(() => {
    localStorage.setItem('store', JSON.stringify(transactions))
  })

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction =>
          <Transaction key={transaction.id} transaction={transaction} />
        )}
      </ul>
    </>
  )
}

export default Transactions
