import logo from "./assets/logo.png";
import meme from "./assets/meme.png";
import { useState, useEffect } from "react";
export default function Main() {
  const [memeImg, setMemeImg] = useState([]);
  const [memeInfo, setMemeInfo] = useState({
    meme: meme,
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
  });
  useEffect(function () {
    function allMeme() {
      fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((meme) => {
          setMemeImg(meme.data.memes);
        });
    }
    allMeme();
  }, []);
  function handleChangeEvent(event) {
    const { value, name } = event.currentTarget;
    setMemeInfo((prevMemeInfo) => ({ ...prevMemeInfo, [name]: value }));
  }

  function getImage(event) {
    event.preventDefault();
    const randomeNumber = Math.floor(Math.random() * memeImg.length);
    setMemeInfo((prev) => {
      return { ...prev, meme: memeImg[randomeNumber].url };
    });
  }
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
                onChange={handleChangeEvent}
                value={memeInfo.topText}
              />
            </div>
            <div className="bottomText">
              <label htmlFor="bottomText">Bottom Text</label>
              <input
                id="bottomText"
                type="text"
                name="bottomText"
                placeholder="Bottom Text"
                onChange={handleChangeEvent}
                value={memeInfo.bottomText}
              />
            </div>
          </div>
          <button className="getImageButton" onClick={getImage}>
            Get a new meme image 🖼
          </button>
        </form>
        <div className="meme">
          <img src={memeInfo.meme} />
          <span className="top">{memeInfo.topText}</span>
          <span className="bottom">{memeInfo.bottomText}</span>
        </div>
      </main>
    </>
  );
}
