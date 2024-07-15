import React from "react";

const ResultBox = (props) => {
  return (
    <div className="resultBox">
      <div className="basicInfo">
        <h1 className="title">{props.title}</h1>
        <span className="visibility">{props.visibility}</span>
      </div>
      <p className="description">{props.description}</p>
      <div className="topicBox">
        {props.topics.map((topic) => (
          <span class="topic">{topic}</span>
        ))}
      </div>
    </div>
  );
};

export default ResultBox;
