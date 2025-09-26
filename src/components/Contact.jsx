import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Contact</h2>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <p>
              <FaEnvelope className="me-2 text-primary" />{" "}
              <a href="mailto:lonigrosamuel78@gmail.com">
                lonigrosamuel78@gmail.com
              </a>
            </p>
            <p>
              <FaLinkedin className="me-2 text-primary" />{" "}
              <a
                href="https://www.linkedin.com/in/samuel-lonigro-web"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/samuel-lonigro-web
              </a>
            </p>
            <p>
              <FaGithub className="me-2 text-dark" />{" "}
              <a
                href="https://github.com/HackAdemy-164"
                target="_blank"
                rel="noreferrer"
              >
                github.com/HackAdemy-164
              </a>
            </p>
            <p>
              <FaPhone className="me-2 text-success" /> +39 388 367 1089
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
