import "./Meme.css";
import { useState } from "react";
import memeData from "../memeData";
export default function Meme() {
    let url;
    function getImgHandler() {
        let math = parseInt(Math.random() *(memeData.data.memes.length));
    //    return memeData.data.memes[math].url
        url = memeData.data.memes[math].url;
    console.log(url);
    }
    return (<div className="meme">
        <div className="form">
            <div className="inputs">
                <input type="text" placeholder="Top Text" />
                <input type="text" placeholder="Bottom Text" />
            </div>
            <button className="get-img" onClick={getImgHandler}>Get a new meme image 🖼</button>
        </div>
    </div>)
}