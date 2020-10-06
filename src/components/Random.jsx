import React, { useState, useEffect } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const Random = () => {

    useEffect(() => {

        const fetchGif = () => {
    
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;
            const res = await axios.get(url)
            console.log(res)
        }

        fetchGif();
    }, [])

  return (
      <>

      </>
  );
}

export default Random;
