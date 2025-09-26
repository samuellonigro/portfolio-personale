import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>About Me</h2>
              <p>
                Junior Full Stack Developer con solida conoscenza del back-end
                e una forte inclinazione per il front-end, specializzato in{" "}
                <strong>React.js</strong>.  
                Appassionato di Intelligenza Artificiale, database e nuove
                tecnologie, sempre motivato a crescere e contribuire a progetti
                innovativi.
              </p>
            </motion.div>
          </Col>
          <Col md={6} className="text-center">
            <motion.img
              src={profile}
              alt="Samuel Lonigro"
              className="about-profile rounded-circle shadow-lg"
              width="250"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
