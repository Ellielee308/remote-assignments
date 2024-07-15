import React from "react";
import { useState, useEffect } from "react";
import "./stylesheet.css";

import ResultBox from "./ResultBox";

const AppAssignment4 = () => {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);

  const loadMorePage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const getData = () => {
    const url = `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`;
    return fetch(url)
      .then((responses) => {
        return responses.json();
      })
      .then((responses) => {
        return setResults([...results, ...responses]);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div>
      <div className="contentBox">
        {results.map((result, index) => {
          return (
            <ResultBox
              key={index}
              title={result.name}
              visibility={result.visibility}
              description={result.description}
              topics={result.topics}
            />
          );
        })}
      </div>
      <button className="moreBtn" onClick={loadMorePage}>
        More
      </button>
    </div>
  );
};

export default AppAssignment4;
