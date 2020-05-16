export const remove = id => {
  return { type: 'REMOVE', payload: id }
}

export const add = transaction => {
  return { type: 'ADD', payload: transaction }
}