import Button from "../Button/Button";
import "./Modal.scss";
import icon from "../../assets/Icons/close-24px.svg";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="modal">
      <div onClick={onClose} className="overlay">
        <div onClick={onClose} className="modal-content">
          <img onClick={onClose} className="closeBtn" src={icon} alt="close" />
          {/* <Button  name="X" /> */}
          <p>ADDED</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
