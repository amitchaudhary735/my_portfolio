import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import adminPanel from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Highlights from enterprise and product work — client codebases are
          often private, so demo and repository links are included only where
          available.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Pidilite Enterprise Dashboard"
              description="Next.js 15, React 18, Tailwind CSS, TanStack Query, PWA, and Recharts. Migrated multiple enterprise surfaces to React 18, delivered executive dashboards with real-time visualisation, and implemented offline-friendly caching (IndexedDB / Service Workers) that materially reduced wait time on slow networks."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="E-commerce Extension"
              description="Next.js 15, React 18, Magento, and Laravel API. Led migration from Next.js 11 to 15 with the App Router and dependency cleanup. Applied image optimisation, route prefetching, and dynamic imports to improve Core Web Vitals and overall storefront performance."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="Brainvire Learning Management System"
              description="Next.js 12 with Node.js and Express.js backend. Built a scalable LMS with SSR-driven course experiences, interactive learning content, and solid course management. Worked in agile sprints with iterative delivery, and tuned key landing and course pages for Lighthouse and SEO."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Real-time Chat Application"
              description="React 18, Node.js, Express.js, MongoDB, and Socket.io. Delivered live messaging, one-to-one calls, and group video experiences with a scalable real-time layer. Implemented role-based access so the UI and capabilities adapt cleanly from REST-backed permission rules."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adminPanel}
              title="Admin Panel — Base Structure"
              description="React 18, Node.js, and GraphQL. Created a permission-driven admin shell suitable as a starter for new products — module visibility follows API-driven roles for multi-tenant style setups. Maintained quality with SonarQube, Azure Boards, and Storybook for shared components."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
