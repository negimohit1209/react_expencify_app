import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routers/Approuter';
import configureStore from './store/configureStore';
import { startSetExpences } from './actions/expences';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expences';
import "react-dates/lib/css/_datepicker.css";
import './firebase/firebase';
const store = configureStore();

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)
ReactDOM.render(<p>Loading ....</p>, document.getElementById('root'));

store.dispatch(startSetExpences()).then(() => {
    ReactDOM.render(jsx, document.getElementById('root'));
});
registerServiceWorker();
