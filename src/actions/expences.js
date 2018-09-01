import uuid from "uuid";
import database from '../firebase/firebase';
// ADD_EXPENSE
export const addExpence = (expence) => ({
  type: "ADD_EXPENCE",
  expence
});

export const startAddExpence = (expenceData = {}) => {
  return dispatch => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenceData;
    const expence = {
      description,note,amount,createdAt
    }
    database.ref('expences').push(expence).then((ref) => {
      dispatch(addExpence({
        id: ref.key,
        ...expence
      })); 
    });
  };
};
// REMOVE_EXPENSE
export const removeExpence = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});
// EDIT_EXPENSE
export const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update
});

//SET_EXPENCES
export const setExpences = (expences) => ({
  type: "SET_EXPENCES",
  expences
});

export const startSetExpences = () => {
  return (dispatch) => {
    return database.ref('expences').once('value').then((snapshot) => {
      const expences = [];
      snapshot.forEach((childSnapshot) => {
        expences.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setExpences(expences));
    });
    
  };
};
