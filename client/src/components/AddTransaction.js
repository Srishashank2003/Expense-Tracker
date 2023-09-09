import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount,
    };
    console.log(text);
    if (text.length <= 24) {
      addTransaction(newTransaction);
      setText("");
      setAmount(0);
    } else {
      alert("Name Character Exceeded");
    }
  };

  return (
    <>
      <h3>Add New Transaction:</h3>
      <form onSubmit={onSubmit} className="holder">
        <div className="form-control">
          <label htmlFor="text" className="input_text">
            Text:
          </label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Incomes or Expenses"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount" className="input_amount">
            Amount: <br />
            (Negative - Expense, Positive - Income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Amount"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};
