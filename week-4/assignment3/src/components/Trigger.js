import React from "react";

const Trigger = (props) => {
  return (
    <button id="trigger" onClick={props.onClick}>
      <div className="trigger_item"></div>
      <div className="trigger_item"></div>
      <div className="trigger_item"></div>
    </button>
  );
};

export default Trigger;
