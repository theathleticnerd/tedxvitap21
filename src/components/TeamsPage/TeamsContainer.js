import React from 'react'
import { useState } from "react";
import coreteam from "./coreteam.json"
import designteam from "./designteam.json"
import webteam from "./webteam.json"
import Card from "../Teams/Card"
import "../Teams/card_container.css"

function TeamsContainer() {
    const [cards, setcard] = useState("");

    return (
      <div>
        <div className="main" style ={
            {
                paddingBottom: "0px",
                paddingTop: "100px",
            }
        }>
          <br />
          <br />
  
          <h3
            style={{
              textAlign: "center",
              backgroundColor: "#000",
              margin: "30px",
              paddingTop: "10px",
              fontSize:"1.5em",
            }}
          >
            Core Team
          </h3>
  
          <div className="flex_container">
            {coreteam.map((card) => (
              <Card
                imgurl={card.imgurl}
                name={card.name}
              />
            ))}
          </div>
        </div>
        <div className="main" style ={
            {
                paddingBottom: "0px",
                paddingTop: "0px",
            }
        }>
          <br />
          <br />
  
          <h3
            style={{
              textAlign: "center",
              backgroundColor: "#000",
              margin: "30px",
              paddingTop: "10px",
              fontSize:"1.5em",
            }}
          >
            Design Team
          </h3>
  
          <div className="flex_container">
            {designteam.map((card) => (
              <Card
                imgurl={card.imgurl}
                name={card.name}
              />
            ))}
          </div>
        </div>
        <div className="main" style ={
            {
                paddingBottom: "150px",
                paddingTop: "0px",
            }
        }>
          <br />
          <br />
  
          <h3
            style={{
              textAlign: "center",
              backgroundColor: "#000",
              margin: "30px",
              paddingTop: "10px",
              fontSize:"1.5em",
            }}
          >
            Web Team
          </h3>
  
          <div className="flex_container">
            {webteam.map((card) => (
              <Card
                imgurl={card.imgurl}
                name={card.name}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default TeamsContainer
