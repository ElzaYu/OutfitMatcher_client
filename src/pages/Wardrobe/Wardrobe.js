import "./Wardrobe.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Wardrobe = () => {
  const [accessories, setAccessories] = useState([]);
  const [currentAccessory, setCurrentAccessory] = useState(null);
  const [tops, setTops] = useState([]);
  const [currentTop, setCurrentTop] = useState(null);
  const [bottoms, setBottoms] = useState([]);
  const [currentBottom, setCurrentBottom] = useState(null);
  const [shoes, setShoes] = useState([]);
  const [currentShoes, setCurrentShoes] = useState(null);

  useEffect(() => {
    const fetchedAccessories = async () => {
      try {
        const response = await axios.get(
          `${REACT_APP_SERVER_URL}/matcher/accessories`
        );
        const accessoriesData = response.data;
        // console.log(accessoriesData);
        setAccessories(accessoriesData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedAccessories();
  }, []);

  useEffect(() => {
    const fetchedTops = async () => {
      try {
        const response = await axios.get(
          `${REACT_APP_SERVER_URL}/matcher/tops`
        );
        const topsData = response.data;
        console.log(topsData);
        setTops(topsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedTops();
  }, []);

  useEffect(() => {
    const fetchedBottoms = async () => {
      try {
        const response = await axios.get(
          `${REACT_APP_SERVER_URL}/matcher/bottoms`
        );
        const bottomsData = response.data;
        console.log(bottomsData);
        setBottoms(bottomsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedBottoms();
  }, []);

  useEffect(() => {
    const fetchedShoes = async () => {
      try {
        const response = await axios.get(
          `${REACT_APP_SERVER_URL}/matcher/shoes`
        );
        const shoesData = response.data;
        // console.log(shoesData);
        setShoes(shoesData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchedShoes();
  }, []);

  const deleteAccessory = async (accessory_id) => {
    try {
      await axios.delete(
        `${REACT_APP_SERVER_URL}/matcher/accessories/${accessory_id}`
      );

      const updatedAccessories = accessories.filter(
        (accessory) => accessory.accessory_id !== accessory_id
      );
      setAccessories(updatedAccessories);
      console.log(updatedAccessories);
      setCurrentAccessory(null);
    } catch (error) {
      console.error("Failed to delete accessory:", error);
    }
  };

  const deleteTop = async (top_id) => {
    try {
      await axios.delete(`${REACT_APP_SERVER_URL}/matcher/tops/${top_id}`);

      const updatedTops = tops.filter((top) => top.top_id !== top_id);
      setTops(updatedTops);
      console.log(updatedTops);
      setCurrentTop(null);
    } catch (error) {
      console.error("Failed to delete top:", error);
    }
  };

  const deleteBottom = async (bottom_id) => {
    try {
      await axios.delete(
        `${REACT_APP_SERVER_URL}/matcher/bottoms/${bottom_id}`
      );

      const updatedBottom = bottoms.filter(
        (bottom) => bottom.bottom_id !== bottom_id
      );
      setBottoms(updatedBottom);
      console.log(updatedBottom);
      setCurrentBottom(null);
    } catch (error) {
      console.error("Failed to delete bottom:", error);
    }
  };

  const deleteShoes = async (shoes_id) => {
    try {
      await axios.delete(`${REACT_APP_SERVER_URL}/matcher/shoes/${shoes_id}`);

      const updatedShoes = shoes.filter((shoes) => shoes.shoes_id !== shoes_id);
      setShoes(updatedShoes);
      console.log(updatedShoes);
      setCurrentShoes(null);
    } catch (error) {
      console.error("Failed to delete shoes:", error);
    }
  };

  return (
    <section className="wardrobe">
      <Header />

      <div className="wardrobe__section">
        <div>
          <h2>Accessories</h2>
          <div className=" wardrobe__carousel">
            <div className="wardrobe__images">
              {accessories.map((item) => (
                <div>
                  <img src={item.accessory_image} alt="accessories" />
                  <Button
                    onClick={() => deleteAccessory(item.accessory_id)}
                    name="Delete"
                  />
                </div>
              ))}
            </div>
          </div>
          <Link className="wardrobe__button" to="/wardrobe/newaccessory">
            <Button name="Add" />
          </Link>
        </div>

        <div>
          <h2>Tops</h2>
          <div className=" wardrobe__carousel">
            <div className="wardrobe__images">
              {tops.map((item) => (
                <div>
                  <img src={item.top_image} alt="tops" />
                  <Button
                    onClick={() => deleteTop(item.top_id)}
                    name="Delete"
                  />
                </div>
              ))}
            </div>
          </div>
          <Link className="wardrobe__button" to="/wardrobe/newtop">
            <Button name="Add" />
          </Link>
        </div>

        <div>
          <h2>Bottoms</h2>
          <div className=" wardrobe__carousel">
            <div className="wardrobe__images">
              {bottoms.map((item) => (
                <div>
                  <img src={item.bottom_image} alt="bottoms" />
                  <Button
                    onClick={() => deleteBottom(item.bottom_id)}
                    name="Delete"
                  />
                </div>
              ))}
            </div>
          </div>
          <Link className="wardrobe__button" to="/wardrobe/newbottom">
            <Button name="Add" />
          </Link>
        </div>

        <div>
          <h2>Shoes</h2>
          <div className=" wardrobe__carousel">
            <div className="wardrobe__images">
              {shoes.map((item) => (
                <div>
                  <img src={item.shoes_image} alt="shoes" />
                  <Button
                    onClick={() => deleteShoes(item.shoes_id)}
                    name="Delete"
                  />
                </div>
              ))}
            </div>
          </div>
          <Link className="wardrobe__button" to="/wardrobe/newshoes">
            <Button name="Add" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Wardrobe;
