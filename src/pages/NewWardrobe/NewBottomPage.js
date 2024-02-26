import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./NewTopPage.scss";
import { Link } from "react-router-dom";
import errorIcon from "../../assets/Icons/error-24px.svg";
import Button from "../../components/Button/Button";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function NewBottomPage() {
  const navigate = useNavigate();
  const [bottomDetails, setBottomDetails] = useState({
    category: "",
    brand: "",
    color: "",
    bottom_image: "",
  });

  const [hasError, setHasError] = useState({
    category: false,
    brand: false,
    color: false,
    bottom_image: false,
  });

  async function handleBottom(event) {
    event.preventDefault();

    const errors = {};
    if (!bottomDetails.category || bottomDetails.category.trim() === "") {
      errors.category = true;
    }
    if (!bottomDetails.brand || bottomDetails.brand.trim() === "") {
      errors.brand = true;
    }
    if (!bottomDetails.color || bottomDetails.color.trim() === "") {
      errors.color = true;
    }
    if (
      !bottomDetails.bottom_image ||
      bottomDetails.bottom_image.trim() === ""
    ) {
      errors.bottom_image = true;
    }

    setHasError(errors);

    const hasValidationError = Object.values(errors).indexOf(true) >= 0;

    if (hasValidationError) {
      return;
    }

    try {
      const response = await axios.post(
        `${REACT_APP_SERVER_URL}/matcher/bottoms`,
        bottomDetails
      );
      if (response?.data) {
        console.log("Created Accessory", response.data);
        navigate("/wardrobe");
      }
    } catch (error) {
      console.log(error?.response?.data?.error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBottomDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("bottom_image", selectedFile);
    axios
      .post(`${REACT_APP_SERVER_URL}/upload`, formData)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <section className="warehouse">
      <form className="warehouse__main" onSubmit={handleBottom}>
        <div className="warehouse__subcontainer">
          <div className="warehouse__wrap-address">
            <h2 className="warehouse__wrap-title">Bottom Details</h2>

            <div className="warehouse__field">
              <label className="warehouse__label">
                <span className="warehouse__label-text">Category</span>
                <br />
                <input
                  className={`warehouse__input ${
                    hasError.category ? "input__error" : ""
                  }`}
                  name="category"
                  placeholder="Category"
                  value={bottomDetails.category}
                  onChange={handleChange}
                />
                <span className="warehouse__input-error">
                  <img src={errorIcon} alt="!" />
                  This field is required
                </span>
              </label>
            </div>

            <div className="warehouse__field">
              <label className="warehouse__label">
                <span className="warehouse__label-text">Brand</span>
                <br />
                <input
                  className={`warehouse__input ${
                    hasError.brand ? "input__error" : ""
                  }`}
                  name="brand"
                  placeholder="Brand"
                  value={bottomDetails.brand}
                  onChange={handleChange}
                />
                <span className="warehouse__input-error">
                  <img src={errorIcon} alt="!" />
                  This field is required
                </span>
              </label>
            </div>

            <div className="warehouse__field">
              <label className="warehouse__label">
                <span className="warehouse__label-text">Color</span>
                <br />
                <input
                  className={`warehouse__input ${
                    hasError.color ? "input__error" : ""
                  }`}
                  name="color"
                  placeholder="Color"
                  value={bottomDetails.color}
                  onChange={handleChange}
                />
                <span className="warehouse__input-error">
                  <img src={errorIcon} alt="!" />
                  This field is required
                </span>
              </label>
            </div>

            <div className="warehouse__field">
              <label className="warehouse__label">
                <span className="warehouse__label-text">Image Link</span>
                <br />
                <input
                  className={`warehouse__input ${
                    hasError.bottom_image ? "input__error" : ""
                  }`}
                  name="bottom_image"
                  placeholder="JPG/JPEG link of an image"
                  value={bottomDetails.bottom_image}
                  onChange={handleChange}
                />
                <span className="warehouse__input-error">
                  <img src={errorIcon} alt="!" />
                  This field is required
                </span>
              </label>
            </div>
          </div>
        </div>
        {/* <div>
          <input type="file" onChange={handleFile} />
          <Button onClick={handleUpload} name="Upload" />
        </div> */}

        <div className="warehouse__button">
          <Link to="/wardrobe" className="warehouse__button-cancel">
            Cancel
          </Link>
          <Button name="+ Add Bottom" type="submit" />
        </div>
      </form>
    </section>
  );
}
