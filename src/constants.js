import project1 from "/assets/projects/project-1.jpg";
import project2 from "/assets/projects/project-2.jpg";
import project3 from "/assets/projects/project-3.jpg";
import project4 from "/assets/projects/project-4.jpg";

export const ABOUT_TEXT = "I’m a sophomore at the University of Connecticut, pursuing a degree in Computer Science. I have a passion for frontend development and enjoy exploring video game development, digital art, and 3D modeling. I love bringing creative ideas to life and collaborating on innovative projects in tech.";

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Develope",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "WhatDoIPlay",
    image: project1,
    description:
      "A website where users can discover a wide variety of video games based on various criteria including genre, system, length, and more.",
    technologies: ["React", "Tailwind", "HTML", "CSS", "Javascript"],
  },
  {
    title: "Metroidvania 2024",
    image: project2,
    description:
      "A first-person, sci-fi adventure game made in Unreal Engine.",
    technologies: ["Unreal Engine", "Blender"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "HTML", "CSS", "Javascript"],
  },
  {
    title: "Stratagem",
    image: project4,
    description:
      "A turn-based, local multiplayer strategy game made in Java, complete with graphics and animation.",
    technologies: ["Java"],
  },
];