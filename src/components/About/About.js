import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
          <Col md={10} style={{ textAlign: "left", color: "white" }}>
            <h1 className="project-heading" style={{ textAlign: "center" }}>
              Work <strong className="purple">Experience</strong>
            </h1>
            <h4 className="purple" style={{ marginTop: "1rem" }}>
              Software Engineer — Brainvire Infotech
            </h4>
            <p style={{ color: "rgb(200 200 220)" }}>
              Jan 2023 – Present · Onsite
            </p>
            <ul style={{ lineHeight: 1.8 }}>
              <li>
                Engineered and maintained multiple production-grade React 18
                and Next.js 12–15 applications with responsive, accessible, and
                SEO-optimised UI.
              </li>
              <li>
                Migrated three enterprise applications to React 18, modernising
                legacy patterns and resolving breaking dependencies for improved
                stability.
              </li>
              <li>
                Migrated a large Next.js codebase from v11 to v15, applying
                SSR, SSG, and ISR where appropriate to improve page-speed and
                Lighthouse scores.
              </li>
              <li>
                Reduced perceived wait time by about 40% on a PWA dashboard
                using Service Workers, IndexedDB caching, and TanStack Query data
                patterns.
              </li>
              <li>
                Built reusable React component libraries, interactive dashboards
                with Recharts, and integrated GraphQL and REST APIs with clear
                data contracts.
              </li>
              <li>
                Partnered on Git workflows, Azure Pipelines deployments, and
                quality gates with SonarQube; contributed to code reviews and
                agile delivery.
              </li>
            </ul>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
          <Col md={10} style={{ textAlign: "left", color: "white" }}>
            <h1 className="project-heading" style={{ textAlign: "center" }}>
              <strong className="purple">Education</strong>
            </h1>
            <p style={{ marginTop: "1rem", lineHeight: 1.7 }}>
              <strong>Bachelor of Engineering — Electronics &amp; Communication</strong>
              <br />
              Government Engineering College, Bhavnagar — Gujarat, India
              <br />
              <span style={{ color: "rgb(200 200 220)" }}>Jul 2017 — Jun 2021</span>
            </p>
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={10} style={{ textAlign: "left", color: "white" }}>
            <h1 className="project-heading" style={{ textAlign: "center" }}>
              <strong className="purple">Certifications</strong>
            </h1>
            <ul style={{ lineHeight: 1.9, marginTop: "1rem" }}>
              <li>
                The Complete JavaScript Course 2024: From Zero to Expert
              </li>
              <li>Next.js &amp; React — The Complete Guide (Incl. Two Paths!)</li>
              <li>
                React — The Complete Guide 2024 (incl. Next.js, Redux)
              </li>
              <li>
                Web Design for Beginners: Real World Coding in HTML &amp; CSS
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
