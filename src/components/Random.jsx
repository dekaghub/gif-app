import React, { useState, useEffect } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const Random = () => {

    const [gif, setGif] = useState('')

    const fetchGif = async () => {
    
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;
        const {data} = await axios.get(url)

        const gifSrc = data.data.images.downsized_large.url;
        setGif(gifSrc)
    }

    useEffect(() => {
        fetchGif();
    }, [])

    const randomGif = () => {
        fetchGif();
    }

  return (
      <div className="container">
        <h1> Random gif </h1>
        <img src={gif} width="500" alt="Random Gif" />
        <button onClick={randomGif}> Random </button>
      </div>
  );
}

export default Random;
