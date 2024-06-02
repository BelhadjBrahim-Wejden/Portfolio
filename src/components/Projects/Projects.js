import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ui from "../../Assets/Projects/ui.PNG";
import clickandcollect from "../../Assets/Projects/clickandcollect.PNG";
import settings from "../../Assets/Projects/settings.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clickandcollect}
              isBlog={false}
              title="“Click and collect website” project"
              description="The AURES group has chosen to migrate its click and collect website developed in Windev to a Full Web, 
responsive application. As part of a team of 6 people (interns), my role was to lead this team as project 
manager and to review the code of the frontend and backend parts.
"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={settings}
              isBlog={false}
              title="“ETK Setting” project"
              description="Set up a web application which is used to configure the entire AURES platform, including 
the management and monitoring of profiles, printers, and other devices."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ui}
              isBlog={false}
              title="“AURES UI” project"
              description="Develop a UI style guide (AURES UI)."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
