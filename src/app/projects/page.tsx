"use client"

import Background from '../components/Background';
import NavBar from '../components/NavBar';
import { FaGithub, FaLink } from "react-icons/fa";
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  url?: string;
  github?: string;
  featured?: boolean;
}

const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

const projects: Project[] = [
  {
    title: "Go Game",
    description: "A real-time web-based implementation of the board game of Go. It supports different board sizes and includes features like score calculation, move checking and special game rules like seki and ladder detection.",
    techStack: ["Vue.js", "JavaScript", "Bootstrap", "HTML5 Canvas"],
    image: "/projects/go-game.png",
    github: "https://github.com/karimbobboi/Go-Game",
    url: 'https://karimbobboi.github.io/Go-Game/',
    featured: true
  },
  {
    title: "9X9",
    description: "A lightweight web app that lets users download high-resolution images from IIIF manifests as either PDF or ZIP files. Ideal for quick access to digitised archival materials.",
    techStack: ["TypeScript", "Bootstrap", "React.js"],
    image: "/portfolio/projects/iiif.png",
    github: "https://github.com/karimbobboi/9X9",
    url: 'https://karimbobboi.github.io/9X9/'
  },
  {
    title: "Portfolio website",
    description: "A personal portfolio website to showcase my projects, skills, and experience in software development.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "React.js"],
    image: "/projects/portfolio.png",
    github: "https://github.com/karimbobboi/portfolio"
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className='group border border-white/20 rounded-sm overflow-hidden bg-[#080028]/100 hover:bg-[#080028]/66 transition-all w-full mx-auto mb-3'>
    <div className='p-2 space-y-2'>
      <header>
        <h2 className='text-xl font-normal text-white mb-2'>{project.title}</h2>
        <div className='flex flex-wrap gap-2'>
          {project.techStack.map((tech, i) => (
            <span key={i} className='px-2 py-1 text-xs font-light rounded-full bg-white/10 text-white/85'>
              {tech}
            </span>
          ))}
        </div>
      </header>

      <div className='flex flex-col md:flex-row gap-4'>
        <div className='md:w-1/2'>
          <div className='relative aspect-video overflow-hidden rounded-sm border border-gray-800'>
            <img 
              src={`${project.image}`} 
              alt={`Screenshot of ${project.title}`}
              className='w-full h-full object-cover'
              width={100} height={100}
            />
          </div>
        </div>

        <div className='md:w-1/2 flex flex-col justify-between'>
          <p className='text-white text-md leading-relaxed'>
            {project.description}
          </p>

          <div className='flex gap-4 mt-2 ms-auto'>
            {project.url && (
                <Link 
                    href={project.url}
                    target='_blank'
                    className='flex items-center gap-1 text-sm text-white hover:text-white transition-all'
                >
                    <FaLink />
                    <span className='font-light'>Live demo</span>
                </Link>
            )}
            {project.github && (
              <Link 
                  href={project.github}
                  target='_blank'
                  className='flex items-center gap-1 text-sm text-white hover:text-white transition-all'
              >
                  <FaGithub />
                  <span className='font-light'>Source</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Projects() {
  return (
    <main className='min-h-screen relative'>
      <header>
        <NavBar />
      </header>
      
      <div className='background-wrapper'>
        <Background />
      </div>

      <div className='container mx-auto px-4 py-16 w-full max-w-4xl'>
        <h1 className='text-3xl font-bold text-white mb-4'>Projects</h1>
        
        <div className='space-y-1'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}