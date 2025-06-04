export const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export interface Experience {
  title: string;
  company: string;
  location: string;
  locationEmoji?: string;
  period: string;
  description: string[];
  techstack: string[];
}

export interface Education {
  degree: string;
  uni: string;
  grade?: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  techstack: string[];
  link?: string;
  github?: string;
  image?: string;
}

export const experiences: Experience[] = [
  {
    title: "Freelance Software Developer",
    company: "180 Degrees Consulting Sheffield",
    location: "Remote",
    period: "January 2025 — June 2025",
    description: [
      "Co-developed a mass email platform to support charity outreach across the UK",
      "Built a FastAPI backend and integrated Companies House API for real-time data retrieval",
      "Developed a responsive frontend using React and managed secure user workflows",
      "Collaborated in a two-person team, delivering the project under tight timelines with positive client feedback"
    ],
    techstack: ["React", "FastAPI", "PostgreSQL", "Python"]
  },
  {
    title: "IT Intern",
    company: "Aliph Technologies",
    location: "Abuja",
    locationEmoji: "🇳🇬",
    period: "December 2022 — April 2023",
    description: [
      "Assisted in developing and maintaining backend systems for a national airline booking platform",
      "Worked on Express.js APIs with session management and user authentication",
      "Supported the setup of network infrastructure and airport operations systems"
    ],
    techstack: ["Express.js", "JavaScript"]
  },
  {
    title: "Software Engineer Intern",
    company: "ZedSoft Limited",
    location: 'Leeds',
    locationEmoji: '🇬🇧',
    period: "July 2022 — September 2022",
    description: [
      "Contributed to frontend development of a data dashboard using Vue.js and Bootstrap",
      "Integrated REST APIs and supported backend connectivity",
      "Participated in Agile sprints, stand-ups, and version control with Git",
      "Helped design and manage the platform's PostgreSQL database"
    ],
    techstack: ["Vue.js", "Bootstrap", "PostgreSQL"]
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computing",
    uni: "University of Buckingham",
    grade: "First-Class Honours",
    period: "2023 — 2025",
    description: [
      "Awarded the Rhodri J. Jassim Prize for Best Performing Student in Part I Examinations",
      "Achieved a First-Class grade for final year project",
      "Relevant modules: Design, Implementation and Analysis of Algorithms, Advanced Web Applications Development, Object Oriented Programming, Principles of Database Systems, UX Design, Software Quality Assurance"
    ]
  },
  {
    degree: "Bachelor of Science in Computer Science",
    uni: "University of Leeds",
    grade: "Transferred",
    period: "2020 — 2022",
    description: [
      "Consistently achieved top marks in programming and algorithmic modules, including some of the highest scores in class",
      "Built a strong foundation in object-oriented programming, procedural programming, data structures, and algorithm design",
      "Relevant modules: Operating Systems, Procedural Programming, Networks, Computer Architecture"
    ]
  }
];

export const projects: Project[] = [
  {
    title: "Go Game",
    description: "A real-time web-based implementation of the board game of Go. It supports different board sizes and includes features like score calculation, move checking and special game rules like seki and ladder detection.",
    techstack: ["Vue.js", "JavaScript", "Bootstrap", "HTML5 Canvas"],
    image: `${basePath}/projects/go-game.png`,
    github: "https://github.com/karimbobboi/Go-Game",
    link: 'https://karimbobboi.github.io/Go-Game/',
  },
  {
    title: "Conway's Game of Life",
    description: "A modular C program that simulates Conway's Game of Life. I built it for the COMP1921 programming project while I was studying at the University of Leeds.",
    techstack: ["C", "CMake", "SDL"],
    image: `${basePath}/projects/game-of-life.gif`,
    github: "https://github.com/karimbobboi/game-of-life"
  },
  {
    title: "180connect",
    description: "A mass email platform built for 180 Degrees Consulting Sheffield. It allows the team easily send personalised messages to charities and non-profits across the UK. Developed in a small team of two and now being adopted by the organisation.",
    techstack: ["JavaScript", "React.js", "FastAPI", "Python", "PostgreSQL"],
    image: `${basePath}/projects/180connect.png`,  
    link: 'https://180-connect.vercel.app/'
  },
  {
    title: "9X9",
    description: "A lightweight web app that lets users download high-resolution images from IIIF manifests as either PDF or ZIP files. Ideal for quick access to digitised archival materials.",
    techstack: ["TypeScript", "Bootstrap", "React.js"],
    image: `${basePath}/projects/iiif.png`,
    github: "https://github.com/karimbobboi/9X9",
    link: 'https://karimbobboi.github.io/9X9/'
  },
  {
    title: "Portfolio website",
    description: "A personal portfolio website to showcase my projects, skills, and experience in software development.",
    techstack: ["Next.js", "TypeScript", "TailwindCSS", "React.js"],
    image: `${basePath}/projects/portfolio.png`,
    github: "https://github.com/karimbobboi/portfolio"
  },
];