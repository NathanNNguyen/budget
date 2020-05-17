import React from 'react';
import Balance from './components/Balance';
import Expenses from './components/Expenses';
import Transactions from './components/Transactions';
import AddTransactions from './components/AddTransactions';

import './App.scss';

function App() {

  return (
    <div className="App">
      <h2>Budget App</h2>
      <div className='container'>
        <Balance />
        <Expenses />
        <Transactions />
        <AddTransactions />
      </div>
    </div>
  );
}

export default App;
