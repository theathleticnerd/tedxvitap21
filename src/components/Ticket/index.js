import React from "react";
import { TicketContainer, TicketButton } from "./TicketElements";

const Ticket = () => {
  return (
    <div style={{ backgroundColor: "black", padding: "100px" }}>
      <TicketContainer>
        <table>
          <th style={{ alignItems: "left" }}>
            <h1
              class="heading"
              style={{
                fontFamily: "sans-serif",
                color: "black",
                fontSize: "800px",
                alignItems: "left",
              }}
            >
              X
            </h1>
          </th>
          <th style={{ color: "black" }}> Lorem ipsum </th>
          <th style={{ color: "black" }}>Lorem Ipsum</th>

          <th>
            <h1
              style={{
                fontFamily: "sans-serif",
                fontSize: "20px",
                verticalAlign: "middle",
                display: "table-cell",
                width: "250px",
                height: "200px",
                padding: "40px",
              }}
            >
              Ticket Details
            </h1>
          </th>
        </table>
      </TicketContainer>
    </div>
  );
};

export default Ticket;
