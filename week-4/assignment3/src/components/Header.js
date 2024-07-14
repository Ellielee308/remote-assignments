import React, { useState } from "react";

import Trigger from "./Trigger";
import FloatingMenu from "./FloatingMenu";

const Header = () => {
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <header>
      <h3>Website Title / Logo</h3>
      <nav>
        <Trigger onClick={() => setShowFloatingMenu(!showFloatingMenu)} />
        <ul className="menu">
          {items.map((item) => (
            <li className="item">{item}</li>
          ))}
        </ul>
        {showFloatingMenu ? (
          <FloatingMenu
            onClick={() => setShowFloatingMenu(!showFloatingMenu)}
          />
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
