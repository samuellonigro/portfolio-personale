import React from "react";
import { Card, Button, Carousel } from "react-bootstrap";

export default function ProjectCard({ project, onShow }) {
  return (
    <Card className="mb-4 shadow-sm project-card">
      {/* Carousel di screenshot dentro la card */}
      {project.images && project.images.length > 0 ? (
        <Carousel
          slide={true}
          fade
          controls={false}
          indicators={false}
          interval={2000}
          ride="carousel"   // 👈 forza autoplay
          pause={false}
          wrap={true}
        >
          {project.images.map((img, index) => (
            <Carousel.Item key={index} style={{ height: "220px" }}>
              <img
                className="d-block w-100"
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                style={{
                  objectFit: "cover",
                  height: "220px",
                  width: "100%",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p className="text-center text-danger">⚠️ Nessuna immagine trovata</p>
      )}

      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.short}</Card.Text>
        <Button
          className="btn-primary custom me-2"
          href={project.github}
          target="_blank"
        >
          Code
        </Button>
        <Button className="btn-primary custom" onClick={() => onShow(project)}>
          Details
        </Button>
      </Card.Body>
    </Card>
  );
}




