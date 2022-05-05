import "./Meme.css"
export default function Meme() {
    return (<div className="meme">
        <form>
            <div className="inputs">
                <input type="text" placeholder="Top Text" />
                <input type="text" placeholder="Bottom Text" />
            </div>
            <button className="get-img">Get a new meme image 🖼</button>
        </form>
    </div>)
}