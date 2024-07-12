import React, { useState } from "react";

import Trigger from "./Trigger";
import FloatingMenu from "./FloatingMenu";

const Header = () => {
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);

  return (
    <header>
      <h3>Website Title / Logo</h3>
      <nav>
        <Trigger onClick={() => setShowFloatingMenu(!showFloatingMenu)} />
        <ul className="menu">
          <li className="item">Item 1</li>
          <li className="item">Item 2</li>
          <li className="item">Item 3</li>
          <li className="item">Item 4</li>
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
