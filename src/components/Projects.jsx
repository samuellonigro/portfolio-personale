import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

export default function Projects() {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleShow = (project) => {
    setSelected(project);
    setShow(true);
  };

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
              >
                <ProjectCard project={project} onShow={handleShow} />
              </motion.div>
            </Col>
          ))}
        </Row>
        <ProjectModal show={show} onHide={() => setShow(false)} project={selected} />
      </Container>
    </section>
  );
}


