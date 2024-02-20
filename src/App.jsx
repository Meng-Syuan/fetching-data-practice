import React, { useEffect, useState } from "react";
import APItopics from "./APItopics";
import MoreBtn from "./MoreBtn";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(1);
  useEffect(() => {
    fetch(`https://api.github.com/orgs/facebook/repos?per_page=5&page=${query}`)
      .then((response) => response.json())
      .then((responseData) => {
        if (query === 1) {
          setData(responseData);
        } else {
          setData((prevData) => [...prevData, ...responseData]); //將原有的資料與新的資料合併成同一個資料
        }
      })
      .catch((Error) => console.log("Fetching and Parsing Error: " + Error));
  }, [query]);

  const handleMoreBtn = () => {
    setQuery((prevPage) => prevPage + 1);
  };
  return (
    <>
      <APItopics data={data} />
      <MoreBtn displayMoreContent={handleMoreBtn} />
    </>
  );
}

export default App;
