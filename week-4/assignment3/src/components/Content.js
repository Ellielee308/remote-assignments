import React from "react";

const Content = () => {
  const contentBoxes = [
    "Content Box 1",
    "Content Box 2",
    "Content Box 3",
    "Content Box 4",
  ];

  return (
    <ul className="content">
      {contentBoxes.map((contentBox) => (
        <li className="box">{contentBox}</li>
      ))}
    </ul>
  );
};

export default Content;
