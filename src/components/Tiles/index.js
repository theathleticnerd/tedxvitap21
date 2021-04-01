import React from "react";
import "./speakers.css";
import sweet3 from "../../images/sweet-3.jpg";
import Ria from "../../images/Ria.jpg";
import Janaki from "../../images/Janaki.jpg";
import Vinusha from "../../images/Vinusha.jpg";
import Vanitha from "../../images/Vanitha.jpg";
import Domitilla from "../../images/Domitilla.jpg";
import Andrew from "../../images/Andrew.jpg";
import Sahithi from "../../images/Sahithi.jpg";
const Tile = () => {
  return (
    <div>
      <div id="speak" class="whole">
        <br />
        <br />
        <h1 style={{ color: "#fff", textAlign: "center" }}>Speakers</h1>
        <br />
        <div class="wrapper">
          {/*<div class="box blackbox">Box 1</div>*/}
          <div class="box whitebox">
            <img src={Andrew} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Andrew Cotton</h3>
            <br />
            <p>Redbull Athlete, Global speaker</p>
          </div>
          <div class="box whitebox">
            <img src={Sahithi} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Sahithi Divi</h3>
            <br />
            <p>Founder of ImpactScientist</p>
          </div>
          <div class="box whitebox">
            <img src={Vanitha} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Vanitha Datla</h3>
            <br />
            <p>Vice Chairperson & Managing Director at Elico Ltd</p>
          </div>
          <div class="box blackbox">Box 8</div>
          <div class="box blackbox">Box 9</div>
        </div>
        <div class="wrapper">
          <div class="box blackbox">Box 1</div>
          {/*  <div class="box blackbox">Box 2</div>*/}
          <div class="box whitebox">
            <img src={Ria} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Mx. Ria Sharma</h3>
            <br />
            <p>Co founder of The Jimme Foundation </p>
          </div>
          <div class="box whitebox">
            <img src={Janaki} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Janaki Subramaniam</h3>
            <br />
            <p>Pilot @ IndiGo</p>
          </div>
          <div class="box whitebox">
            <img src={Vinusha} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Vinusha MK </h3>
            <br />
            <p>Chief Baking Officer at Four Seasons Pastry </p>
          </div>
          {/* <div class="box blackbox">Box 9</div>*/}
          <div class="box whitebox">
            <img src={Domitilla} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Domitilla Quadrelli</h3>
            <br />
            <p>WMBootcamp Founder</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          Previous Year's Speakers
        </h1>
        <br />
        {/*<div class="wrapper">
          <div class="box whitebox">
            <img src={sweet3} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Domitilla Quadrelli</h3>
            <br />
            <p>Public Speaker</p>
          </div>
          <div class="box whitebox">
            <img src={sweet3} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Kakashi Hatake</h3>
            <br />
            <p>Public Speaker</p>
          </div>
          <div class="box whitebox">
            <img src={sweet3} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Kakashi Hatake</h3>
            <br />
            <p>Public Speaker</p>
          </div>
          <div class="box whitebox">
            <img src={sweet3} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Kakashi Hatake</h3>
            <br />
            <p>Public Speaker</p>
          </div>
          <div class="box blackbox">Box 9</div>
        </div>
        <div class="wrapper">
          <div class="box blackbox">Box 1</div>
          <div class="box whitebox">
            <img src={sweet3} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Kakashi Hatake</h3>
            <br />
            <p>Public Speaker</p>
          </div>
          <div class="box whitebox">
            <img src={sweet3} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Kakashi Hatake</h3>
            <br />
            <p>Public Speaker</p>
          </div>
          <div class="box whitebox">
            <img src={sweet3} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Kakashi Hatake</h3>
            <br />
            <p>Public Speaker</p>
          </div>
          <div class="box whitebox">
            <img src={sweet3} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Kakashi Hatake</h3>
            <br />
            <p>Public Speaker</p>
          </div>
        </div>
        <div class="wrapper">
          <div class="box whitebox">
            <img src={sweet3} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Kakashi Hatake</h3>
            <br />
            <p>Public Speaker</p>
          </div>
          <div class="box whitebox">
            <img src={sweet3} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Kakashi Hatake</h3>
            <br />
            <p>Public Speaker</p>
          </div>
          <div class="box whitebox">
            <img src={sweet3} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Kakashi Hatake</h3>
            <br />
            <p>Public Speaker</p>
          </div>
          <div class="box whitebox">
            <img src={sweet3} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Kakashi Hatake</h3>
            <br />
            <p>Public Speaker</p>
          </div>
          <div class="box blackbox">Box 9</div>
        </div>
        <div class="wrapper">
          <div class="box blackbox">Box 1</div>
          <div class="box blackbox">Box 2</div>
          <div class="box blackbox">Box 3</div>
          <div class="box whitebox">
            <img src={sweet3} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Kakashi Hatake</h3>
            <br />
            <p>Public Speaker</p>
          </div>
          <div class="box whitebox">
            <img src={sweet3} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Kakashi Hatake</h3>
            <br />
            <p>Public Speaker</p>
          </div>
          <div class="box whitebox">
            <img src={sweet3} width="100%" height="100%" />
          </div>
          <div class="box redbox">
            <br /> <br />
            <h3>Kakashi Hatake</h3>
            <br />
            <p>Public Speaker</p>
          </div>
        </div>*/}
        <br />
        <br />
      </div>
    </div>
  );
};

export default Tile;
