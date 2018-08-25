import expensesReducer from '../../reducers/expences';
import expences from '../fixtures/expences';
import moment from 'moment';

test('should setup default state', () => {
    const state = expensesReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual([]);
});

test('should remove expence by ID', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: "1"
    };
    const state = expensesReducer(expences, action);
    expect(state).toEqual([expences[1], expences[2]]);
});

test('should not remove expence if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: "-1"
    };
    const state = expensesReducer(expences, action);
    expect(state).toEqual(expences);
});


test('should add expence', () => {
    const expense = {
        id: "4",
        description: "test",
        note: "tets",
        amount: 100,
        createdAt: moment(0)
      }
    const action = {
        type: 'ADD_EXPENCE',
        expense
    };
    const state = expensesReducer(expences, action);
    expect(state).toEqual([...expences, expense]);
});

test('should edit an expence', () => {
    const amount = 122200;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expences[1].id,
        update: {
            amount
        }
    };
    const state = expensesReducer(expences, action);
    expect(state[1].amount).toBe(amount);
});

test('should not edit an expence if not found', () => {
    const amount = 122200;
    const action = {
        type: 'EDIT_EXPENSE',
        id: "-1",
        update: {
            amount
        }
    };
    const state = expensesReducer(expences, action);
    expect(state).toEqual(expences);
});

