import React from "react";
import ExpenseList from './ExpenseList';
import ExpenceListFilters from './ExpenceListFilters';

const ExpenceDashboardPage = () => (
    <div>
        <ExpenceListFilters />
        <ExpenseList />
    </div>

)
export default ExpenceDashboardPage;