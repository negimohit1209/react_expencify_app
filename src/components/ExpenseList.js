import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenceListItem';
import selectExpences from '../selectors/expences';
const ExpenseList = (props) => (
    <div>
        <h1>expenceList</h1>
        {props.expences.map((expence) => {
            return <ExpenseListItem key={expence.id} {...expence}/>
        })}
    </div>
)

const mapStateToProps = (state)=>{
    return {
        expences : selectExpences(state.expences, state.filters)
    }
};

export default connect(mapStateToProps)(ExpenseList);
