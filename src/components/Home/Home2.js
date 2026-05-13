import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a frontend engineer with 3+ years of experience building
              scalable, performant web applications using{" "}
              <i>
                <b className="purple">React, Next.js,</b>
              </i>{" "}
              and modern JavaScript (ES6+).
              <br />
              <br />
              I enjoy{" "}
              <i>
                <b className="purple">
                  migrating enterprise apps, optimising page speed,
                </b>
              </i>{" "}
              and delivering clean, component-driven UIs. I work comfortably
              with{" "}
              <i>
                <b className="purple">REST and GraphQL</b>
              </i>
              , TanStack Query, and CI/CD workflows using Git and Azure.
              <br />
              <br />
              I collaborate in agile, distributed teams and care about{" "}
              <i>
                <b className="purple">accessibility, SEO,</b>
              </i>{" "}
              and measurable improvements in Core Web Vitals and Lighthouse
              scores.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/amitchaudhary735"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chaudharyamit735/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:chaudharyamit735@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
