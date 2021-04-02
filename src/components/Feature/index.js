import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Book Your Free Tickets Soon...</h1>
      <p>
        “The important thing is not to stop questioning. Curiosity has its own
        reason for existing.” <br />- Albert Einstein
      </p>
      <a href="https://www.eventbrite.com/e/tedxvitap-2021-the-unstoppable-tickets-149289744645">
        <FeatureButton>Tickets</FeatureButton>
      </a>
    </FeatureContainer>
  );
};

export default Feature;
