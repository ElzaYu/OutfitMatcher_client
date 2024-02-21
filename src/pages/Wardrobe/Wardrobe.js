import "./Wardrobe.scss";
import Button from "../../components/Button/Button";
import { useState } from "react";
import axios from "axios";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Wardrobe = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFile = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // const handleUpload = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("image", selectedFile);

  //     const response = await axios.post(
  //       `${REACT_APP_SERVER_URL}/upload`,
  //       formData
  //     );

  //     console.log(response.data); // Log the server response
  //   } catch (error) {
  //     console.error("Error uploading file:", error);
  //   }
  // };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", selectedFile);
    axios
      .post(`${REACT_APP_SERVER_URL}/upload`, formData)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <nav className="wardrobe">
      <div>Wardrobe</div>
      <input type="file" onChange={handleFile} />

      <Button onClick={handleUpload} name="Upload" />
    </nav>
  );
};

export default Wardrobe;
