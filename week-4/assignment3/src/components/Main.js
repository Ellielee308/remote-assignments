import React, { useState } from "react";

import ContentSection from "./ContentSection";

const Main = () => {
  const [goodTime, setGoodTime] = useState(false);
  const changeMessage = () => setGoodTime(!goodTime);

  return (
    <main>
      {goodTime ? (
        <h1 id="welcome" onClick={changeMessage}>
          Have a Good Time!
        </h1>
      ) : (
        <h1 id="welcome" onClick={changeMessage}>
          Welcome Message
        </h1>
      )}
      <ContentSection />
    </main>
  );
};

export default Main;
