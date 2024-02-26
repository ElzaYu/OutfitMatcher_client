import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Draggable from "react-draggable";
import "./Matcher.scss";
import Header from "../../components/Header/Header";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Matcher2 = () => {
  const [accessories, setAccessories] = useState([]);
  const [tops, setTops] = useState([]);
  const [bottoms, setBottoms] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);
  const [selectedShoes, setSelectedShoes] = useState(null);
  const dropBoxElement = useRef(null);
  const [saveList, setSaveList] = useState([]);

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
        // console.log(topsData);
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
        // console.log(bottomsData);
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

  const contentUpdate = () => {
    window.location.reload();
  };

  const handleDoubleClick = () => {};

  const handleDragStop = (event, dragData) => {
    const dragEl = dragData.node.getBoundingClientRect();
    // console.log(dragEl);
    const dropEl = dropBoxElement.current.getBoundingClientRect();
    // console.log(dropEl);
    const itemId = parseInt(dragData.node.dataset.itemId, 10);
    const itemImage = dragData.node.dataset.itemSrc;
    console.log("Item ID:", itemId);
    console.log("Type of Item ID:", typeof itemId);
    console.log("Item Image:", itemImage);
    console.log("Type of Item Image:", typeof itemImage);

    const isInsideDropBox =
      dragEl.x >= dropEl.x &&
      dragEl.y >= dropEl.y &&
      dragEl.x <= dropEl.x + dropEl.width &&
      dragEl.y <= dropEl.y + dropEl.height;

    console.log("Is Inside Drop Box:", isInsideDropBox);

    const selectedAccessoryItem = accessories.find(
      (accessory) =>
        accessory.accessory_id === itemId &&
        accessory.accessory_image === itemImage
    );
    const selectedTopItem = tops.find(
      (top) => top.top_id === itemId && top.top_image === itemImage
    );
    const selectedBottomItem = bottoms.find(
      (bottom) =>
        bottom.bottom_id === itemId && bottom.bottom_image === itemImage
    );
    const selectedShoesItem = shoes.find(
      (shoes) => shoes.shoes_id === itemId && shoes.shoes_image === itemImage
    );

    console.log("Selected Bottom Item:", selectedAccessoryItem);
    console.log("Selected Top Item:", selectedTopItem);
    console.log("Type of top_id:", typeof tops[0].top_id);
    console.log("Type of top_image:", typeof tops[0].top_image);
    console.log("Selected Bottom Item:", selectedBottomItem);
    console.log("Selected Shoes Item:", selectedShoesItem);
    console.log("Type of shoes_id:", typeof shoes[0].shoes_id);
    console.log("Type of shoes_image:", typeof shoes[0].shoes_image);

    if (isInsideDropBox) {
      if (selectedTopItem) {
        console.log("Selected top!");
        setSelectedTop(selectedTopItem);
      } else if (selectedBottomItem) {
        console.log("Selected bottom!");
        setSelectedBottom(selectedBottomItem);
      } else if (selectedAccessoryItem) {
        console.log("Selected accessory!");
        setSelectedAccessory(selectedAccessoryItem);
      } else if (selectedShoesItem) {
        console.log("Selected shoes!");
        setSelectedShoes(selectedShoesItem);
      }
      setSaveList([...saveList, itemId]);
    } else {
      console.log("Deselected Item!");
      setSaveList(saveList.filter((item) => item !== itemId));
    }
  };

  const contentSave = async () => {
    console.log(saveList);

    try {
      const dataToSend = {
        accessory_id: selectedAccessory ? selectedAccessory.accessory_id : null,
        accessory_image: selectedAccessory
          ? selectedAccessory.accessory_image
          : null,
        top_id: selectedTop ? selectedTop.top_id : null,
        top_image: selectedTop ? selectedTop.top_image : null,
        bottom_id: selectedBottom ? selectedBottom.bottom_id : null,
        bottom_image: selectedBottom ? selectedBottom.bottom_image : null,
        shoes_id: selectedShoes ? selectedShoes.shoes_id : null,
        shoes_image: selectedShoes ? selectedShoes.shoes_image : null,
      };
      console.log("Data to send:", dataToSend);
      const response = await axios.post(
        `${REACT_APP_SERVER_URL}/favouriteoutfit`,
        dataToSend
      );
      const favouriteOutfitData = response.data;
      console.log(favouriteOutfitData);
      setSaveList((saveList) => [...saveList, favouriteOutfitData]);
    } catch (error) {
      console.log(error);
    }
    alert("SAVED");
    // navigate("/");
  };

  return (
    <section className="outfit">
      <div>
        <Header />
      </div>

      <div className="outfit__section">
        <div className="outfit__carousel outfit__carousel--vertical">
          <h2>Tops</h2>
          <div className="outfit__images outfit__images--vertical">
            {tops.map((item) => (
              <Draggable
                key={item.top_id}
                axis="both"
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                onDoubleClick={handleDoubleClick}
                onStop={handleDragStop}
              >
                <div
                  className="handle"
                  data-item-id={item.top_id}
                  data-item-src={item.top_image}
                >
                  <img src={item.top_image} />
                </div>
              </Draggable>
            ))}
          </div>
        </div>

        <div className="outfit--wrapper">
          <div className="outfit__carousel outfit__carousel--horizontal">
            <h2>Accesories</h2>
            <div className="outfit__images outfit__images--horizontal">
              {accessories.map((item) => (
                <Draggable
                  key={item.accessory_id}
                  axis="both"
                  handle=".handle"
                  defaultPosition={{ x: 0, y: 0 }}
                  onDoubleClick={handleDoubleClick}
                  onStop={handleDragStop}
                >
                  <div
                    className="handle"
                    data-item-id={item.accessory_id}
                    data-item-src={item.accessory_image}
                  >
                    <img
                      className="images--accessories"
                      src={item.accessory_image}
                    />
                  </div>
                </Draggable>
              ))}
            </div>
          </div>

          <div className="outfit__box">
            <button className="outfit__box--button" onClick={contentUpdate}>
              CANCEL
            </button>
            <div className="outfit__box--size" ref={dropBoxElement}>
              Drag images into this box
            </div>
            <button className="outfit__box--button" onClick={contentSave}>
              SAVE
            </button>
          </div>

          <div className="outfit__carousel outfit__carousel--horizontal">
            <h2>Shoes</h2>
            <div className="outfit__images outfit__images--horizontal">
              {shoes.map((item) => (
                <Draggable
                  key={item.shoes_id}
                  axis="both"
                  handle=".handle"
                  defaultPosition={{ x: 0, y: 0 }}
                  onDoubleClick={handleDoubleClick}
                  onStop={handleDragStop}
                >
                  <div
                    className="handle"
                    data-item-id={item.shoes_id}
                    data-item-src={item.shoes_image}
                  >
                    <img
                      // className="outfit__images"
                      src={item.shoes_image}
                    />
                  </div>
                </Draggable>
              ))}
            </div>
          </div>
        </div>

        <div className="outfit__carousel outfit__carousel--vertical">
          <h2>Bottoms</h2>
          <div className="outfit__images outfit__images--vertical">
            {bottoms.map((item) => (
              <Draggable
                key={item.bottom_id}
                axis="both"
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                onStop={handleDragStop}
              >
                <div
                  className="handle"
                  data-item-id={item.bottom_id}
                  data-item-src={item.bottom_image}
                >
                  <img
                    // className="outfit__images"
                    src={item.bottom_image}
                  />
                </div>
              </Draggable>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Matcher2;
