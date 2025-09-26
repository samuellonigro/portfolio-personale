import React from "react";
import { Container } from "react-bootstrap";
import { FaHtml5, FaReact, FaLaravel, FaPhp, FaDatabase, FaJava, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiBootstrap } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML / CSS", icon: <FaHtml5 /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Laravel / PHP", icon: <FaLaravel /> },
    { name: "MySQL / SQL", icon: <FaDatabase /> },
    { name: "Bootstrap", icon: <SiBootstrap /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Skills</h2>
        <div className="text-center">
          {skills.map((skill, index) => (
            <span key={index} className="skill-badge">
              {skill.icon} {skill.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
