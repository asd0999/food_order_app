import React from "react";
import bannerImage from "../../images/images.jpeg";

export default function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-inner">
        <img className="banner-inner-img" src={bannerImage} alt="banner" />
      </div>
    </div>
  );
}
