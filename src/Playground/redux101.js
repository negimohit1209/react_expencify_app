import { createStore } from "redux";

//Action generators

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
}
);

const decrementcount = ({ decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({setTo = 20} = {}) => ({
  type: 'SET',
  setTo
});

const resetCount = () => ({
  type: "RESET"
})

//Reducers
//1. Reducers are pure functions
//2. Never change state or action
const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
      case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
      case "RESET":
      return {
          count: 0
      }
      case "SET":
      return {
        count: action.setTo
      }
    default:
      return state
  }
});

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(setCount({ setTo: 100}));

store.dispatch(decrementcount({decrementBy: 10}));
// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 5
// });

store.dispatch(incrementCount({incrementBy: 5}));
// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 10
// }); 


store.dispatch(incrementCount());
// store.dispatch({
//     type: "INCREMENT"
// }); 

store.dispatch(decrementcount());

store.dispatch(resetCount());