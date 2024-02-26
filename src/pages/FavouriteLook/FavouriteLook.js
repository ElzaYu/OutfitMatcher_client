import "./FavouriteLook.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const FavouriteLook = () => {
  const [saveList, setSaveList] = useState([]);
  const [currentOutfit, setCurrentOutfit] = useState(null);

  useEffect(() => {
    const fetchedFavouriteOutfit = async () => {
      try {
        const response = await axios.get(
          `${REACT_APP_SERVER_URL}/favouriteoutfit`
        );
        const favouriteOutfitData = response.data;
        console.log(favouriteOutfitData);
        setSaveList(favouriteOutfitData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedFavouriteOutfit();
  }, []);

  const deleteOutfit = async (id) => {
    try {
      await axios.delete(`${REACT_APP_SERVER_URL}/favouriteoutfit/${id}`);

      const updatedOutfits = saveList.filter((outfit) => outfit.id !== id);
      setSaveList(updatedOutfits);
      console.log(updatedOutfits);
      setCurrentOutfit(null);
    } catch (error) {
      console.error("Failed to delete outfit:", error);
    }
  };

  return (
    <nav className="look">
      <Header />
      <div className="look__wrapper">
        {saveList.map((item) => (
          <div key={item.id} className="look__column">
            <img className="look__image" src={item.accessory_image} />
            <img className="look__image" src={item.top_image} />
            <img className="look__image" src={item.bottom_image} />
            <img className="look__image" src={item.shoes_image} />
            <div className="look__button">
              <Button onClick={() => deleteOutfit(item.id)} name="Delete" />
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default FavouriteLook;
