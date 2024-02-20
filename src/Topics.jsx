import React from "react";
import Topic from "./Topic";

const Topics = (props) => {
  let topics = props.topics;
  let topicTitle = [];
  for (let i = 0; i < topics.length; i++) {
    topicTitle.push(<Topic data={topics[i]} key={i} />);
  }

  return <div className="topic-wrapper">{topicTitle}</div>;
};

export default Topics;
