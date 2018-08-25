import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routers/Approuter';
import configureStore from './store/configureStore';
import {addExpence} from './actions/expences';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expences';

const store = configureStore();

store.dispatch(
    addExpence({
        description: "water bill",
        amount: 500,
        createdAt: -11000
      })
);
store.dispatch(
    addExpence({
        description: "phone bill",
        amount: 100,
      createdAt: 1000
      })
);
store.dispatch(
    addExpence({
        description: "electricity bill",
        amount: 1200,
      createdAt: 100
      })
); 
console.log(store.getState());
const state = store.getState();
const visibleExpence = getVisibleExpenses(state.expences, state.filters);
console.log(visibleExpence);

// console.log(getVisibleExpenses(store.state.expences, store.state.filters));
const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
