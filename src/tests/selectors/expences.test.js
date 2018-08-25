import getVisibleExpenses from "../../selectors/expences";
import moment from "moment";
const expences = [
  {
    id: "1",
    description: "gum",
    note: "",
    amount: 195,
    createdAt: 0
  },
  {
    id: "2",
    description: "rent",
    note: "",
    amount: 109500,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "credit card",
    note: "",
    amount: 4500,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
test("should filter text by value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleExpenses(expences, filters);
  expect(result).toEqual([expences[2], expences[1]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  };
  const result = getVisibleExpenses(expences, filters);
  expect(result).toEqual([expences[2], expences[0]]);
});

test("should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0)
  };
  const result = getVisibleExpenses(expences, filters);
  expect(result).toEqual([expences[0], expences[1]]);
});

test("should sortBy date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const result = getVisibleExpenses(expences, filters);
  expect(result).toEqual([expences[2], expences[0], expences[1]]);
});

test("should sortBy amount", () => {
    const filters = {
      text: "",
      sortBy: "amount",
      startDate: undefined,
      endDate: undefined
    };
    const result = getVisibleExpenses(expences, filters);
    expect(result).toEqual([expences[1], expences[2], expences[0]]);
  });
