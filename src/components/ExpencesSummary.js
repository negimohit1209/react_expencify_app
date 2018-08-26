import React from "react";
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from "../selectors/expences";
import selectExpencesTotal from  '../selectors/expences-total';

const ExpencesSummary = ({ expenceCount, expencesTotal }) => {
    const exoenceWord = expenceCount === 1 ? "expence" : "expences";
    const formattedExpenceTotal = numeral(expencesTotal/100).format('$0,0.00');
    return(
        <div>
        <h1>Viewing {expenceCount} {exoenceWord}  totalling {formattedExpenceTotal}</h1>
        </div>
    )
}

const mapStateToProps = (state) =>{
    const visibleExpences = getVisibleExpenses(state.expences, state.filters);
    return {
        expenceCount: visibleExpences.length,
        expencesTotal:  selectExpencesTotal(visibleExpences)
    }
};

export default connect(mapStateToProps)(ExpencesSummary)