const initialState = {
  transactions: []
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