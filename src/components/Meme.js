import "./Meme.css";
import { useState, useEffect } from "react";
export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = useState([]);

  useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json()) //take the response and parse the json into javascript object
      .then((data) => setAllMeme(data.data.memes)); //get the data back
  }, []);

  let url;
  function getImgHandler() {
    let math = parseInt(Math.random() * allMeme.length);
    //    return memeData.data.memes[math].url
    url = allMeme[math].url;
    setMeme((prevState) => ({
      ...prevState,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="meme">
      <div className="form">
        <div className="inputs">
          <input
            type="text"
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Bottom Text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>
        <button className="get-img" onClick={getImgHandler}>
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme">
        {meme.randomImage !== "" && (
          <img src={meme.randomImage} alt="meme-img" className="meme--image" />
        )}
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
