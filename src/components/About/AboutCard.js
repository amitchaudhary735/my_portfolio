import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amit Chaudhary </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am a Frontend Engineer at Brainvire Infotech (since Jan 2023),
            building production-grade React 18 and Next.js 12–15 applications
            for enterprise clients.
            <br />I hold a Bachelor of Engineering in Electronics &amp;
            Communication from{" "}
            <span className="purple">
              Government Engineering College, Bhavnagar
            </span>{" "}
            (Jul 2017 — Jun 2021).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Web Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Amit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
