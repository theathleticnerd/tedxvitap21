import styled from "styled-components";

export const TicketContainer = styled.div`
  background-color: red;
  height: 80vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
export const TicketButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #E62B1E;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    color: #E62B1E;
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
