import React from "react";
import { Card, Button } from "react-bootstrap";

export default function ProjectCard({ project, onShow }) {
  return (
    <Card className="mb-4 shadow-sm project-card">
      <Card.Img variant="top" src={project.image} />
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
