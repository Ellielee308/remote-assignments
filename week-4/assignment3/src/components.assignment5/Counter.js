import React from "react";

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="plusBtn" onClick={props.increment}>
        {" "}
        +1{" "}
      </button>
      <p> {props.count} </p>
    </div>
  );
};

export default Counter;
