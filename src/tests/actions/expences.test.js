import { addExpence, removeExpence, editExpense } from '../../actions/expences';

test("should setup remove expence actiion object", () => {
    const action = removeExpence({id: '123abc'});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    });
});