import React from "react";
import { Container } from "react-bootstrap";

export default function Skills() {
  const skills = [
    "HTML / CSS",
    "React.js",
    "Laravel / PHP",
    "MySQL / SQL",
    "Bootstrap",
    "Java",
    "C++",
    "GitHub",
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Skills</h2>
        <div className="text-center">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

