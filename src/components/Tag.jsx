import React, { useState, useEffect } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const Tag = () => {

    const [gif, setGif] = useState('')
    const [tag, setTag] = useState('random')

    const fetchGif = async (tag) => {
    
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`;
        const {data} = await axios.get(url)

        const gifSrc = data.data.images.downsized_large.url;
        setGif(gifSrc)
    }

    useEffect(() => {
        fetchGif(tag);
    }, [tag])

    const tagGif = () => {
        fetchGif(tag);
    }


  return (
      <div className="container">
        <h1> Random {tag} gif </h1>
        <img src={gif} width="500" alt="Random Gif" />
        <input value={tag} onChange={(e) => setTag(e.target.value)}/>
        <button onClick={tagGif}> Random {tag} gif </button>
      </div>
  );
}

export default Tag;
