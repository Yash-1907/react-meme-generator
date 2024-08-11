import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    console.log("Random Number  " + randomNumber);
    const url = memesArray[randomNumber].url;
    setMemeImage(url);
  }

  return (
    <main>
      <div className="form">
        <div className="form--input--group">
          <input type="text" placeholder="Top Text" className="form--input" />
          <input
            type="text"
            placeholder="Bottom Text"
            className="form--input"
          />
        </div>
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image
        </button>
        <img src={memeImage} className="meme--image" />
      </div>
    </main>
  );
}
