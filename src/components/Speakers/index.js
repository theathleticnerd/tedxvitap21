import React from "react";
import Ria from "../../images/Ria.jpg";
import Janaki from "../../images/Janaki.jpg";
import Vinusha from "../../images/Vinusha.jpg";
import Vanitha from "../../images/Vanitha.jpg";
import Domitilla from "../../images/Domitilla.jpg";
import Andrew from "../../images/Andrew.jpg";
import Sahithi from "../../images/Sahithi.jpg";
const Speakers = () => {
  return (
    <div>
      <div className="whole">
        <div className="team">
          <h1 style={{ color: "#fff", textAlign: "center" }}>Speakers</h1>
          <div className="wrapper">
            <div className="inside">
              <img style={{ width: "200px", height: "200px" }} src={Andrew} />
              <br />
              <h2>Andrew Cotton</h2>
              <p>Redbull Athlete, Global speaker</p>
            </div>

            <div className="inside">
              <img style={{ width: "200px", height: "200px" }} src={Sahithi} />
              <br />
              <h2>Sahithi Divi</h2>
              <p>Founder of ImpactScientist</p>
            </div>

            <div className="inside">
              <img style={{ width: "200px", height: "200px" }} src={Vanitha} />
              <br />
              <h2>Vanitha Datla</h2>
              <p>Vice Chairperson at Elico Ltd</p>
            </div>

            <div className="inside">
              <img style={{ width: "200px", height: "200px" }} src={Ria} />
              <br />
              <h2>Mx. Ria Sharma</h2>
              <p>Co-Founder of The Jimme Foundation </p>
            </div>

            <div className="inside">
              <img style={{ width: "200px", height: "200px" }} src={Janaki} />
              <br />
              <h2>Janaki Subramaniam</h2>
              <p>Pilot @ IndiGo</p>
            </div>

            <div className="inside">
              <img style={{ width: "200px", height: "200px" }} src={Vinusha} />
              <br />
              <h2>Vinusha MK </h2>
              <p>Founder - Four Seasons Pastry </p>
            </div>
            <div className="inside" />
            <div className="inside">
              <img
                style={{ width: "200px", height: "200px" }}
                src={Domitilla}
              />
              <br />
              <h2>Domitilla Quadrelli</h2>
              <p>Community Manager & WMBootcamp Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
