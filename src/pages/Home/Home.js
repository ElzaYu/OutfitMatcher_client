import "./Home.scss";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav className="home">
      <div>Outfit Matcher</div>
      <div className="home__buttons">
        <Link to={`/matcher`}>
          <Button name="Pick your outfit" />
        </Link>
        <Link to={`/wardrobe`}>
          <Button name="Wardrobe" />
        </Link>
        <Link to={`/favoritelook`}>
          <Button name="Favorite Looks" />
        </Link>
      </div>
    </nav>
  );
};

export default Home;
