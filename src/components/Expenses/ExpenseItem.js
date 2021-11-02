import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);
  const resultArray = useState(props.title);
  let title = resultArray[0];
  const setTitle = resultArray[1];

  const clickedHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description"></div>
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickedHandler}>Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
