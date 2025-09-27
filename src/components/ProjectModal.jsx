import React from "react";
import { Modal, Button, Badge, Carousel } from "react-bootstrap";

export default function ProjectModal({ show, onHide, project }) {
  if (!project) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
      contentClassName="custom-modal"
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title className="text-accent">{project.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Carousel auto-play anche nel modal */}
        {project.images && project.images.length > 0 && (
          <Carousel
            slide={true}
            fade
            controls={true}
            indicators={true}
            interval={2500}
            ride="carousel"
            pause={false}
            wrap={true}
          >
            {project.images.map((img, index) => (
              <Carousel.Item key={index} style={{ height: "400px" }}>
                <img
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="d-block w-100"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",   // 👈 elimina bande nere
                    borderRadius: "12px",
                  }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}

        {/* Descrizione */}
        <p className="mt-3">{project.description}</p>

        {/* Stack */}
        <div>
          {project.stack.map((tech, index) => (
            <Badge bg="dark" key={index} className="me-2 custom-badge">
              {tech}
            </Badge>
          ))}
        </div>
      </Modal.Body>

      <Modal.Footer>
        {project.github && (
          <Button
            className="btn-primary custom"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Button>
        )}
        {project.live && (
          <Button
            className="btn-primary custom"
            href={project.live}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </Button>
        )}
        <Button className="btn-primary custom" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}






