import React from "react";
import APItopic from "./APItopic";

const APItopics = (props) => {
  let results = props.data;
  let apiData = results.map((result) => (
    <APItopic data={result} key={result.id} />
  ));
  return <div className="article-wrapper">{apiData}</div>;
};

export default APItopics;
