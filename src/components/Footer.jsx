import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="text-center py-3">
      <Container>
        <small>© {new Date().getFullYear()} Samuel Lonigro - All rights reserved</small>
      </Container>
    </footer>
  );
}
