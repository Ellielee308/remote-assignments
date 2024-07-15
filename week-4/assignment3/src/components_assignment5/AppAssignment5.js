import "./assignment5.css";

import React from "react";
import { useState } from "react";

import Counter from "./Counter";

const AppAssignment5 = () => {
  const [counts, setCounts] = useState([0, 0, 0]);

  const increment = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const incrementAll = () => {
    const newCounts = counts.map((count) => count + 1);
    setCounts(newCounts);
  };

  const addCounter = () => {
    setCounts([...counts, 0]);
  };

  return (
    <div className="assignment5">
      <button className="plusBtn incremetAllBtn" onClick={incrementAll}>
        All + 1
      </button>
      <br />
      {counts.map((count, index) => (
        <Counter key={index} count={count} increment={() => increment(index)} />
      ))}
      <button className="addCounterBtn" onClick={addCounter}>
        Add a Counter
      </button>
    </div>
  );
};

export default AppAssignment5;
