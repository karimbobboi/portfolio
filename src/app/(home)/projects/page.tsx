import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Project, projects } from '@/app/types';

const ProjectCard = ({ project }: { project: Project }) => (
  <div className='space-y-3 p-2 sm:p-2 rounded-md bg-white/5 border hover:border-dashed border-black/100 hover:bg-white/10 transition-all duration-200'>
    <div className='space-y-2'>
      <h3 className='text-base sm:text-lg font-normal text-white'>{project.title}</h3>
      <p className='text-white/90 text-xs sm:text-sm leading-relaxed font-light'>
        {project.description}
      </p>
    </div>

    <div className='flex gap-2'>
      {project.link && (
        <a 
          href={project.link} 
          target='_blank' 
          rel='noopener noreferrer'
          className='flex items-center gap-1 text-xs text-[#FFF5D6]/90 hover:text-[#1F53FF] transition-colors duration-200'
        >
          <FaExternalLinkAlt className='w-3 h-3' />
          <span>Live Demo</span>
        </a>
      )}
      {project.github && (
        <a 
          href={project.github} 
          target='_blank' 
          rel='noopener noreferrer'
          className='flex items-center gap-1 text-xs text-[#FFF5D6]/90 hover:text-[#1F53FF] transition-colors duration-200'
        >
          <FaGithub className='w-3 h-3' />
          <span>Source Code</span>
        </a>
      )}
    </div>
    
    <div className='flex flex-wrap gap-1 pt-2 border-t border-white/10'>
      {project.techstack.map((tech, i) => (
        <span 
          key={i} 
          className='py-1 px-2 bg-black/70 text-[#FFF5D6]/90 text-xs rounded-xs border border-black/100'
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default function ProjectsSection(){
  return(
  <div className='w-full max-w-2xl'>
    <div className='bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm rounded-md p-3 sm:p-2 lg:p-4 border border-black/100 shadow-2xl'>
      <div className='space-y-4 animate-in fade-in duration-300'>
        <div className='space-y-4'>
          <h2 className='text-lg font-normal text-[#FFF5D6] border-b border-white/10 pb-2'>
            Projects
          </h2>
          <div className='space-y-4'>
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>  
)};