import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters';
import moment from 'moment';
test("shound generate SET_START_DATE action", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        date: moment(0)
    })
});

test("shound generate SET_END_DATE action", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        date: moment(0)
    });
});

test("shound generate SET_TEXT_FILTER action with text", () => {
    const text = "abc";
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text
    });
});

test("shound generate SET_TEXT_FILTER action with default", () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    });
});

test("shound generate SORT_BY_DATE action", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});

test("shound generate SORT_BY_AMOUNT action", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});