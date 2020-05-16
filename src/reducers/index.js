const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
}

export const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'REMOVE':
      return {
        ...state,
        transactions: state.transactions.filter(trans => trans.id !== action.payload)
      }
    case 'ADD':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }

    default:
      return state
  }
}