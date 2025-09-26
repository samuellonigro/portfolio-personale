import React from "react";
import { Modal, Button, Badge } from "react-bootstrap";

export default function ProjectModal({ show, onHide, project }) {
  if (!project) return null;

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={project.image} alt={project.title} className="img-fluid mb-3" />
        <p>{project.description}</p>
        <div>
          {project.stack.map((tech, index) => (
            <Badge bg="secondary" key={index} className="me-2">
              {tech}
            </Badge>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        {project.github && (
          <Button
            variant="dark"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Button>
        )}
        {project.live && (
          <Button
            variant="primary"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </Button>
        )}
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
