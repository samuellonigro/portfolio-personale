import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="py-5 text-center">
      <Container>
        <motion.h1
          className="fw-bold hero-title neon-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Samuel 👋
        </motion.h1>

        <motion.p
          className="lead hero-lead text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Junior Full Stack Developer passionate about React.js, Laravel, and modern applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Button
            className="btn-primary custom"
            style={{ backgroundColor: "#50eea8", border: "none", color: "#000" }}
            href="#projects"
          >
            View My Projects
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}

