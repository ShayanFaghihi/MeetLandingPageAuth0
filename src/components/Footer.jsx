import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer>
      <Container className="column-space">
        <h2>Experience more together</h2>
        <p>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <button className="purple">
          Download <span>V1.3</span>
        </button>
      </Container>
    </footer>
  );
};

export default Footer;
