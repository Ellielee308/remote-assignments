import React from "react";

const FloatingMenu = (props) => {
  return (
    <nav id="floating_menu">
      <ul id="floating_menu_list">
        <li className="floating_item">Item 1</li>
        <li className="floating_item">Item 2</li>
        <li className="floating_item">Item 3</li>
        <li className="floating_item">Item 4</li>
      </ul>
      <button id="floating_close" onClick={props.onClick}>
        X
      </button>
    </nav>
  );
};

export default FloatingMenu;
