import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { User, FolderGit2, Wrench, Mail } from "lucide-react";

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand-custom">
          Samuel Lonigro
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="nav-link-custom">
              <User className="me-2" size={18} /> About
            </Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">
              <FolderGit2 className="me-2" size={18} /> Projects
            </Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">
              <Wrench className="me-2" size={18} /> Skills
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">
              <Mail className="me-2" size={18} /> Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}



