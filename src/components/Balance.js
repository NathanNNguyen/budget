import React from 'react'
import { useSelector } from 'react-redux';

function Balance() {

  const transactions = useSelector(state => state.transactions)

  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      {total >= 0 ?
        <div>
          <h4 className='balance'>Your balance</h4>
          <h1 className={total < 0 ? 'minus' : 'plus'}>${total}</h1>
          <p>You're in a good place <span role='img' aria-label='happy'>😋</span></p>
        </div> :
        <div>
          <h4 className='balance'>Your balance</h4>
          <h1 className={total < 0 ? 'minus' : 'plus'}>${total}</h1>
          <p className='minus'>You've gone over your limit <span role='img' aria-label='sad'>😩</span></p>
        </div>}

    </>
  )
}

export default Balance
