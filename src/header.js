import "./styles.css";
import logo from "./assets/logo.png";
export function Header() {
  return (
    <>
      <div className="header">
        <img className="logoImage" src={logo} height="42px" />
        <h2 className="headerText">Meme Generator</h2>
      </div>
    </>
  );
}
