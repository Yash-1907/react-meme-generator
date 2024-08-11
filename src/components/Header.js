import troll from "../assets/troll.png";
import "../styles.css";

export default function Header() {
  return (
    <header className="header">
      <img src={troll} className="header--img" />
      <h4 className="header--project">Learn React</h4>
    </header>
  );
}
