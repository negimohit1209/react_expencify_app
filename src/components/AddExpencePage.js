import React from "react";
import ExpenceForm from "./ExpenceForm";
import { connect } from 'react-redux';
import { addExpence } from '../actions/expences';
const AddExpencePage = (props) => (
    <div>
        <h1>Add Expence</h1>
        <ExpenceForm 
            onSubmit = {(expence) => {
                props.dispatch(addExpence(expence));
                props.history.push('/');
            }}
        />
    </div>
)

export default connect()(AddExpencePage);