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

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
