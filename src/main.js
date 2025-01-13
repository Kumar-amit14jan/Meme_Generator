import logo from "./assets/logo.png";
import meme from "./assets/meme.png";
export default function Main() {
  return (
    <>
      <main>
        <form>
          <div className="formContent">
            <div className="topText">
              <label htmlFor="topText">Top Text</label>
              <input
                id="topText"
                type="text"
                name="topText"
                placeholder="Top Text"
              />
            </div>
            <div className="bottomText">
              <label htmlFor="bottomText">Bottom Text</label>
              <input
                id="bottomText"
                type="text"
                name="bottomText"
                placeholder="Bottom Text"
              />
            </div>
          </div>
          <button className="getImageButton">Get a new meme image 🖼</button>
        </form>
        <div className="meme">
          <img src={meme} />
          <span className="top">top</span>
          <span className="bottom">top</span>
        </div>
      </main>
    </>
  );
}
