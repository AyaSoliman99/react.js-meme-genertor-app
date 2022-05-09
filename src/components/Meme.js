import "./Meme.css";
import { useState } from "react";
import memeData from "../memeData";
export default function Meme() {
    // const [memeImage, setMemeImage] = useState("");
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg",
    })
    const [allMemeImages, setAllMemeImages] = useState(memeData)
    let url;
    function getImgHandler() {
        let math = parseInt(Math.random() *(allMemeImages.data.memes.length));
    //    return memeData.data.memes[math].url
        url = memeData.data.memes[math].url;
        console.log(url);
        setMeme(prevState => ({
                ...prevState,
                randomImage: url,
        }));
    }
    return (<div className="meme">
        <div className="form">
            <div className="inputs">
                <input type="text" placeholder="Top Text" />
                <input type="text" placeholder="Bottom Text" />
            </div>
            <button className="get-img" onClick={getImgHandler}>Get a new meme image 🖼</button>
        </div>
        {meme.randomImage !== "" && <img src={meme.randomImage} alt="meme-img" />}
    </div>)
}