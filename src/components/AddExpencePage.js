import React from "react";
import ExpenceForm from "./ExpenceForm";
import { connect } from "react-redux";
import { startAddExpence } from "../actions/expences";

class AddExpencePage extends React.Component {
  onSubmit = expence => {
    this.props.startAddExpence(expence);
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenceForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpence : (expence) => dispatch(startAddExpence(expence))
}) ;
export default connect(undefined, mapDispatchToProps)(AddExpencePage);
