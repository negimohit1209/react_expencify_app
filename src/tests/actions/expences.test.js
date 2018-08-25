import { addExpence, removeExpence, editExpense } from '../../actions/expences';

test("should setup remove expence action object", () => {
    const action = removeExpence({id: '123abc'});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});

test("should setup EDIT expence action object", () => {
    const action = editExpense('123abc', {note: "test test"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: '123abc',
        update: {
            note: "test test"
        }
    });
});

test("should setup ADD expence object with provided value", () => {
    const expenceData = {
        description: "rent",
        note: "last month rent",
        amount: 10003,
        createdAt: 100000
    }
    const action = addExpence(expenceData);
    expect(action).toEqual({
        type: "ADD_EXPENCE",
        expense: {
            ...expenceData,
            id: expect.any(String)
        }
    })
});
test("should setup ADD expence object with default value", () => {
    const action = addExpence();
    expect(action).toEqual({
        type: "ADD_EXPENCE",
        expense: {
            id: expect.any(String),
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        }
    })
});