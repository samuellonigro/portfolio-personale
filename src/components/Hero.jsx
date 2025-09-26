import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="py-5 bg-light text-center">
      <Container>
        <motion.h1
          className="fw-bold hero-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Samuel 👋
        </motion.h1>
        <p className="lead hero-lead">
          Junior Full Stack Developer passionate about React.js, Laravel, and modern applications.
        </p>
        <Button className="btn-primary custom" href="#projects">
          View My Projects
        </Button>
      </Container>
    </section>
  );
}
