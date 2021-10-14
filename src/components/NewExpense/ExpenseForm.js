import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const titleArray = useState("First value doesn't exist");
  const enteredTitle = titleArray[0];
  const setEnteredTitle = titleArray[1];

  const [enteredAmount, setEnteredAmount] = useState("No first value");

  const [enteredDate, setEnteredDate] = useState("No first value");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // document.getElementById('').addEventListener('click', (event)=>{})
  const titleChangeHandler = (event) => {
    console.log(enteredTitle);
    setEnteredTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //     setUserInput((prevState) => {
    //       //this ensure you are using the latest state.
    //       // Whenever your state update depends on the previous state
    //       return { ...prevState, enteredTitle: event.target.value };
    //     });
  };

  const amountChangeHandles = (event) => {
    console.log(enteredAmount);
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    console.log(enteredDate);
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler}></input>
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandles}
          ></input>
        </div>
      </div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
