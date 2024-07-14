import React from "react";

const FloatingMenu = (props) => {
  const floatingItems = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <nav id="floating_menu">
      <ul id="floating_menu_list">
        {floatingItems.map((floatingItem) => (
          <li className="floating_item">{floatingItem}</li>
        ))}
      </ul>
      <button id="floating_close" onClick={props.onClick}>
        X
      </button>
    </nav>
  );
};

export default FloatingMenu;
