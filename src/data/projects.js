// Import immagini diverse da Unsplash per testing
const projects = [
  {
    id: 1,
    title: "Hackathon Ideas",
    short: "Platform to share startup & hackathon ideas",
    description:
      "Full-stack platform for publishing and browsing ideas. Features: authentication, categories, tags, comments, responsive UI.",
    stack: ["Laravel", "PHP", "MySQL", "React.js", "Bootstrap"],
    github: "https://github.com/HackAdemy-164/hackaton-Lonigro-Samuel",
    live: "",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470", // montagna
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", // mare
      "https://images.unsplash.com/photo-1519681393784-d120267933ba", // città
    ],
  },
  {
    id: 2,
    title: "React Demo App",
    short: "Interactive single-page app with React",
    description:
      "Demo app built with React to show components, state and responsive layouts.",
    stack: ["React.js", "Bootstrap", "JavaScript"],
    github: "#",
    live: "",
    images: [
      "https://images.unsplash.com/photo-1506765515384-028b60a970df", // paesaggio
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f", // laptop
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1", // foresta
    ],
  },
  {
    id: 3,
    title: "Laravel CRUD App",
    short: "Simple web app with Laravel & MySQL",
    description:
      "Backend CRUD app in Laravel with authentication and RESTful API endpoints.",
    stack: ["Laravel", "PHP", "MySQL"],
    github: "#",
    live: "",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085", // programmazione
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085", // (puoi sostituire con altra)
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", // codice su schermo
    ],
  },
];

export default projects;
