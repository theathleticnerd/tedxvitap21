import React, { useState } from "react";
import Card from "./Card";
import Team1 from "./team1.json";
import "./card_container.css";
function CardContainer() {
  const [cards, setcard] = useState("");

  return (
    <div claasName="cardcontainer">
      <div className="main">
        <br />
        <br />
        <div className="flex_container">
          {Team1.map((card) => (
            <Card imgurl={card.imgurl} name={card.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
