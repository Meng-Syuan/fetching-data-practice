import React from "react";
import Name from "./Name";
import Visibility from "./Visibility";
import Description from "./Description";
import Topics from "./Topics";

const APItopic = ({ data }) => {
  return (
    <section>
      <article>
        <Name name={data.name} />
        <Visibility visibility={data.visibility} />
      </article>
      <Description description={data.description} />
      <Topics topics={data.topics} />
    </section>
  );
};

export default APItopic;
