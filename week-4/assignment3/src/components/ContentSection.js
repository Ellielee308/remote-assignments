import React from "react";
import { useState } from "react";

import Content from "./Content";

const ContentSection = () => {
  const [moreContent, setMoreContent] = useState(false);

  return (
    <div id="section">
      <h2 id="secondarytitle">Section Title</h2>
      <Content />
      <button id="call" onClick={() => setMoreContent(!moreContent)}>
        Call to Action
      </button>
      {moreContent && <Content />}
    </div>
  );
};

export default ContentSection;
