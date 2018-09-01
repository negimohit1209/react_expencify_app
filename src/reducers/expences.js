const expensesReducerdefaultState = [];
const expensesReducer = (state = expensesReducerdefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENCE":
      return [...state, action.expence];
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
      case "SET_EXPENCES":
        return action.expences
    default:
      return state;
  }
};

export default expensesReducer;
