import React from "react";
import icon1 from "../../icons/american.png";
import icon2 from "../../icons/bakery.png";
import icon3 from "../../icons/bbq.png";
import icon4 from "../../icons/bubbletea.png";
import icon5 from "../../icons/burger.png";
import icon6 from "../../icons/coffeeandtea.png";
import icon7 from "../../icons/dessert.png";
import icon8 from "../../icons/fastfood.png";
import icon9 from "../../icons/icecreamandyogurt.png";
import icon10 from "../../icons/pizza.png";
import icon11 from "../../icons/sandwich.png";

export default function Banner() {
  return (
    <div className="banner-container">
      <img className="banner-icons" src={icon1} alt="banner" />
      <img className="banner-icons" src={icon2} alt="banner" />
      <img className="banner-icons" src={icon3} alt="banner" />
      <img className="banner-icons" src={icon4} alt="banner" />
      <img className="banner-icons" src={icon5} alt="banner" />
      <img className="banner-icons" src={icon6} alt="banner" />
      <img className="banner-icons" src={icon7} alt="banner" />
      <img className="banner-icons" src={icon8} alt="banner" />
      <img className="banner-icons" src={icon9} alt="banner" />
      <img className="banner-icons" src={icon10} alt="banner" />
      <img className="banner-icons" src={icon11} alt="banner" />
    </div>
  );
}
