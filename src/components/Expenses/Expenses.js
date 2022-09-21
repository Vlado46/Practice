import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2022");
  const filteredYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={year} onSelectYear={filteredYearHandler} />
        <ExpenseItem
          title={props.expenseItem[0].title}
          amount={props.expenseItem[0].amount}
          date={props.expenseItem[0].date}
        />
        <ExpenseItem
          title={props.expenseItem[1].title}
          amount={props.expenseItem[1].amount}
          date={props.expenseItem[1].date}
        />
        <ExpenseItem
          title={props.expenseItem[2].title}
          amount={props.expenseItem[2].amount}
          date={props.expenseItem[2].date}
        />
        <ExpenseItem
          title={props.expenseItem[3].title}
          amount={props.expenseItem[3].amount}
          date={props.expenseItem[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
