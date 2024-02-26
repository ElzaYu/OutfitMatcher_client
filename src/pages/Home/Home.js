import "./Home.scss";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav className="home">
      <div className="home__wrapper">
        <h1>
          OUTFIT <br /> MATCHER
        </h1>
        <div className="home__buttons">
          <Link to={`/matcher`}>
            <Button name="PICK YOUR OUTFIT" />
          </Link>
          <Link to={`/wardrobe`}>
            <Button name="YOUR WARDROBE" />
          </Link>
          <Link to={`/favoritelook`}>
            <Button name="FAVOURITE " />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Home;
