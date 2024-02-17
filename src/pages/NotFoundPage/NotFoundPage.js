import React from "react";
import { Link } from "react-router-dom";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import "./NotFoundPage.scss";

export default function NotFoundPage() {
  return (
    <section>
      <div>
        <Link to="/">
          <div>
            <img src={arrowBack} alt="arrow back" />
          </div>
        </Link>
        <h1>Page Not Found</h1>
      </div>
    </section>
  );
}
