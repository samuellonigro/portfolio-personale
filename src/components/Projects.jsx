import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleShow = (project) => {
    setSelected(project);
    setShow(true);
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projects.map((project) => (
            <Col md={4} key={project.id}>
              <ProjectCard project={project} onShow={handleShow} />
            </Col>
          ))}
        </Row>
        <ProjectModal show={show} onHide={() => setShow(false)} project={selected} />
      </Container>
    </section>
  );
}
