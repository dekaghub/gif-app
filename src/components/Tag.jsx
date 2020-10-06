import React, { useState } from "react";
import useGif from "./useGif";

const Tag = () => {
  const [tag, setTag] = useState("random");
  const { gif, fetchGif } = useGif(tag);

  return (
    <div className="container">
      <h1> Random {tag} gif </h1>
      <img src={gif} width="500" alt="Random Gif" />
      <input value={tag} onChange={(e) => setTag(e.target.value)} />
      <button onClick={() => fetchGif(tag)}> Get {tag} gif </button>
    </div>
  );
};

export default Tag;
