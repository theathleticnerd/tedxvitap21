import React, { useState } from "react";
import Card from "./Card";
import Team1 from "./team1.json";
import "./card_container.css";
function CardContainer() {
  const [cards, setcard] = useState("");

  return (
    <div>
      <div className="main">
        <br />
        <br />
        <h3
          style={{
            backgroundColor: "#000",
            margin: "0",
            padding: "0px 0px 0px 100px",
          }}
        >
          Speakers:
        </h3>

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
