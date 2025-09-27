import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Contact</h2>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <p>
              <FaEnvelope className="me-2" style={{ color: "#50eea8" }} />{" "}
              <a
                href="mailto:lonigrosamuel78@gmail.com"
                style={{ color: "#50eea8" }}
              >
                lonigrosamuel78@gmail.com
              </a>
            </p>
            <p>
              <FaLinkedin className="me-2" style={{ color: "#50eea8" }} />{" "}
              <a
                href="https://www.linkedin.com/in/samuel-lonigro-web"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#50eea8" }}
              >
                linkedin.com/in/samuel-lonigro-web
              </a>
            </p>
            <p>
              <FaGithub className="me-2" style={{ color: "#50eea8" }} />{" "}
              <a
                href="https://github.com/HackAdemy-164"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#50eea8" }}
              >
                github.com/HackAdemy-164
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}


