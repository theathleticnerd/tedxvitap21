import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Quote of the Day</h1>
      <p>
        “The important thing is not to stop questioning. Curiosity has its own
        reason for existing.” <br />- Albert Einstein
      </p>
      <FeatureButton>Tickets</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
