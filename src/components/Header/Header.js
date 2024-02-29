import "./Header.scss";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Header = () => {
  return (
    <nav className="header">
      <Link className="header__font" to={"/"}>
        <h2>OUTFIT MATCHER</h2>
      </Link>
      <div className="header__wrapper">
        <Link to={`/matcher`}>
          <Button name="CREATE" />
        </Link>
        <Link to={`/wardrobe`}>
          <Button name="WARDROBE" />
        </Link>
        <Link to={`/favoritelook`}>
          <Button name="FAVOURITE" />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
