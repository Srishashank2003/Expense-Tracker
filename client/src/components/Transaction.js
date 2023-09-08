import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      <button
        onClick={() => deleteTransaction(transaction._id)}
        className="delete-btn"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
      <div className="li__text">{transaction.text} </div>
      <span>
        {sign}${numberWithCommas(Math.abs(transaction.amount))}
      </span>
    </li>
  );
};
