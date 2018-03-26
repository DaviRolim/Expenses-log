export const ADD_EXPENSE = ({ state }, obj) => {
  console.log(state)
  state.Expenses.list.unshift(obj)
}

export const REMOVE_EXPENSE = ({ state }, obj) => {
  const index = state.Expenses.list.indexOf(obj)
  state.Expenses.list.splice(index, 1)
}
