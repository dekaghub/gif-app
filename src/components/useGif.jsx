import { useState, useEffect } from "react";
import axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;

const useGif = (tag) => {

    const [gif, setGif] = useState('')

    const fetchGif = async (tag) => {
    
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url)
        const gifSrc = data.data.images.downsized_large.url;
        setGif(gifSrc)
    }

    useEffect(() => {
        fetchGif(tag);
    }, [tag])

  return { gif, fetchGif }
}

export default useGif;
