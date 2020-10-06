import React from "react";
import useGif from "./useGif";

const Random = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1> Random gif </h1>
      <img src={gif} width="500" alt="Random Gif" />
      <button onClick={fetchGif}> Random </button>
    </div>
  );
};

export default Random;
