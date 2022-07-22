import { Link } from "react-router-dom";
import "./menuBurger.css";

export default function MenuBurger() {
  return (
    <nav>
      <div className="navBar">
        <Link className="link" to="/home">
          Home
        </Link>
        <Link to="/projets">Projets</Link>
        <Link to="/experiences">Expériences</Link>
      </div>
    </nav>
  );
}
