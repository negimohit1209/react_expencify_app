const expensesReducerdefaultState = [];
const expensesReducer = (state = expensesReducerdefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENCE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.update
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;
