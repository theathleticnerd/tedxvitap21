import React from "react";
import "./about.css";

function About() {
  return (
    <div classname="about_container">
      <div className="about_inner_container">
        <div className="left1">
          <p>
            In the spirit of ideas worth spreading, TEDx is a program of local,
            self-organized events that bring people together to share a TED-like
            experience. At a TEDx event, TED Talks video and live speakers
            combine to spark deep discussion and connection. These local,
            self-organized events are branded TEDx, where x = independently
            organized TED event. The TED Conference provides general guidance
            for the TEDx program, but individual TEDx events are self-organized.
            (Subject to certain rules and regulations.)
          </p>
        </div>
        <div className="right1">
          <h2 style={{ fontFamily: "Josefin Sans" }}>About TEDx</h2>
          <h5> x = independently organized event</h5>
        </div>
      </div>
      <div className="about_inner_container">
        <div className="right1">
          <h1 style={{ fontFamily: "Josefin Sans" }}>
            About <br /> TED
          </h1>
        </div>
        <div className="left1">
          <p>
            In the spirit of ideas worth spreading, TEDx is a program of local,
            self-organized events that bring people together to share a TED-like
            experience. At a TEDx event, TED Talks video and live speakers
            combine to spark deep discussion and connection. These local,
            self-organized events are branded TEDx, where x = independently
            organized TED event. The TED Conference provides general guidance
            for the TEDx program, but individual TEDx events are self-organized.
            (Subject to certain rules and regulations.)
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
