import proj1 from '../assets/proj1.png';
import proj2 from '../assets/proj2.png';
import proj3 from '../assets/proj3.png';

const projects = [
  {
    id: 1,
    title: 'Hackathon Ideas',
    short: 'Platform to share startup & hackathon ideas',
    description: 'Full-stack platform for publishing and browsing ideas. Features: authentication, categories, tags, comments, responsive UI.',
    stack: ['Laravel', 'PHP', 'MySQL', 'React.js', 'Bootstrap'],
    github: 'https://github.com/HackAdemy-164/hackaton-Lonigro-Samuel',
    live: '',
    image: proj1
  },
  {
    id: 2,
    title: 'React Demo App',
    short: 'Interactive single-page app with React',
    description: 'Demo app built with React to show components, state and responsive layouts.',
    stack: ['React.js', 'Bootstrap', 'JavaScript'],
    github: '#',
    live: '',
    image: proj2
  },
  {
    id: 3,
    title: 'Laravel CRUD App',
    short: 'Simple web app with Laravel & MySQL',
    description: 'Backend CRUD app in Laravel with authentication and RESTful API endpoints.',
    stack: ['Laravel', 'PHP', 'MySQL'],
    github: '#',
    live: '',
    image: proj3
  }
];

export default projects;
