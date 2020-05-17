import React from 'react'
import { useSelector } from 'react-redux';

import Transaction from './Transaction'

function Transactions() {
  const transactions = useSelector(state => state.transactions);

  return (
    <>
      <h3>Transactions</h3>
      <ul className="list">
        {transactions.map(transaction =>
          <Transaction key={transaction.id} transaction={transaction} />
        )}
      </ul>
    </>
  )
}

export default Transactions
