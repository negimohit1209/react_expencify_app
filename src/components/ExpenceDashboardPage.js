import React from "react";
import ExpenseList from './ExpenseList';
import ExpenceListFilters from './ExpenceListFilters';
import ExpencesSummary from './ExpencesSummary';
const ExpenceDashboardPage = () => (
    <div>
        <ExpencesSummary />
        <ExpenceListFilters />
        <ExpenseList />
    </div>

)
export default ExpenceDashboardPage;