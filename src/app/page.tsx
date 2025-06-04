"use client"

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt, FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap, FaBriefcase, FaCode, FaHeart, FaUser, FaExternalLinkAlt, FaUsers } from 'react-icons/fa';
import NavBar from './components/NavBar';
import WikiCommons from './components/WikiCommons';
import { Experience, Education, Project, experiences, education, projects } from './types';

const SocialLinks = () => (
  <div className='flex justify-start'>
    <ContactLink 
      href="mailto:abdulkarimbobboi@gmail.com"
      icon={<FaEnvelope className="w-8 h-8" />}
      tooltip="Send me an email"
    />
    <ContactLink 
      href="https://github.com/karimbobboi"
      icon={<FaGithub className="w-8 h-8" />}
      tooltip="GitHub profile"
    />
    <ContactLink 
      href="https://www.linkedin.com/in/abdulkarim-bobboi-6b041a224/"
      icon={<FaLinkedin className="w-8 h-8" />}
      tooltip="LinkedIn profile"
    />
    <ContactLink 
      href="/portfolio/cv.pdf"
      icon={<FaFileAlt className="w-8 h-8" />}
      tooltip="View resume"
    />
  </div>
);

const ContactLink = ({ href, icon, tooltip }: { href: string; icon: React.ReactNode; tooltip: string }) => (
  <div className='group relative'>
    <a
      href={href}
      target='_blank'
      className='block p-1.5 rounded-lg hover:bg-white/10 transition-all duration-100'
    >
      <div className='text-white/90 group-hover:text-[#FFF5D6] group-hover:scale-110 transition-all duration-100'>
        {icon}
      </div>
    </a>
    <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/20 z-10'>
      {tooltip}
    </span>
  </div>
);

const ExperienceCard = ({ exp }: { exp: Experience }) => (
  <div className='space-y-3 p-2 sm:p-2 rounded-md bg-white/5 border hover:border-dashed border-black/100 hover:bg-white/10 transition-all duration-100 w-full'>
    <div>
      <h3 className='text-base sm:text-lg font-normal text-white'>{exp.title}</h3>
      <div className='text-[#FFF5D6] text-sm sm:text-base font-normal'>{exp.company}</div>
      <div className='flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 text-white/70 text-xs sm:text-sm mt-1'>
        <div className='flex items-center gap-1'>
          <FaMapMarkerAlt className='w-3 h-3' />
          <span className='flex items-center gap-1'>
            {exp.location}
            <span className="text-lg">{exp.locationEmoji}</span>
          </span>
        </div>
        <div className='flex items-center gap-1'>
          <FaCalendarAlt className='w-3 h-3' />
          <span>{exp.period}</span>
        </div>
      </div>
    </div>
    
    <ul className='space-y-1 text-white/90'>
      {exp.description.map((desc, i) => (
        <li key={i} className='flex items-start gap-2 text-sm leading-relaxed font-light'>
          <span className='text-white mt-2 w-1 h-1 rounded-full bg-current flex-shrink-0'></span>
          <span>{desc}</span>
        </li>
      ))}
    </ul>
    
    <div className='flex flex-wrap gap-1 pt-2 border-t border-white/10'>
      {exp.techstack.map((tech, i) => (
        <span key={i} className='py-1 px-2 bg-black/70 text-[#FFF5D6]/90 text-xs rounded-xs border border-black/100'>
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const EducationCard = ({ edu }: { edu: Education }) => (
  <div className='space-y-3 p-2 rounded-md bg-white/5 border hover:border-dashed border-black/100 hover:bg-white/10 transition-all duration-100'>
    <div className=''>
      <h3 className='text-lg font-normal text-white'>{edu.degree}</h3>
      <div className='text-[#FFF5D6] font-normal'>{edu.uni}</div>
      <div className='flex justify-between gap-4 text-white/70 text-sm'>
        <div className='flex items-center gap-1'>
          {edu.grade && (
            <span className='text-md flex items-center gap-1 hover:text-[#FFF5D6]/100 cursor-pointer'>
              {edu.grade}
            </span>
          )}
        </div>
        <div className='flex items-center gap-1'>
          <FaCalendarAlt className='w-3 h-3' />
          <span>{edu.period}</span>
        </div>
      </div>
    </div>
    
    <ul className='space-y-1 text-white/90'>
      {edu.description.map((desc, i) => (
        <li key={i} className='flex items-start gap-2 text-sm leading-relaxed'>
          <span className='text-white mt-2 w-1 h-1 rounded-full bg-current flex-shrink-0'></span>
          <span>{desc}</span>
        </li>
      ))}
    </ul>
  </div>
);

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

const TabButton = ({ isActive, onClick, icon, children }: { 
  isActive: boolean; 
  onClick: () => void; 
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-md font-normal transition-all duration-100 text-sm ${
      isActive 
        ? 'bg-black/80 text-[#FFF5D6]/90 shadow-lg shadow-[#1F53FF]/30 border-black border-2' 
        : 'text-gray-300 bg-white/0 border-transparent hover:text-[#FFF5D6]/100 hover:border-1 hover:border-white/60 hover:border-dashed active:border-black/100'
    }`}
  >
    {icon}
    {children}
  </button>
);

export default function Home() {
  const [activeSection, setActiveSection] = useState<'profile' | 'projects'>('profile');
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <main className='min-h-screen relative px-4 sm:px-6 lg:px-8'>      
      <div className='pt-16 sm:pt-20'>
        <NavBar activeSection={activeSection} setActiveSection={setActiveSection} />
      </div>
      
      <div className='relative min-h-screen pb-20'>
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8'>
          
          {/* Left side */}
          <div className='flex items-start justify-center lg:sticky lg:top-8 py-4 sm:py-6 lg:py-8'>
            <div className='space-y-4 w-full'>
              <div className='w-full max-w-md mx-auto'>
                <div className='bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm rounded-md p-2 sm:p-4 border border-black/100 shadow-2xl'>
                  <div className='space-y-3 sm:space-y-4'>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl bg-gradient-to-r from-[#FFFAEB] via-white to-[#1F53FF] inline-block text-transparent bg-clip-text font-light leading-tight'>
                      Hello, I'm <span className='font-normal'>Abdulkarim</span>
                    </h1>
                    <p className='text-[#FFF5D6]/90 text-sm sm:text-base leading-relaxed font-light'>
                      I'm a Computing graduate and software developer, with a focus on full-stack development. I enjoy building useful, interesting applications and working across the stack, from UI design to APIs and data.
                    </p>
                    <div className='pt-2'>
                      <SocialLinks />
                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full max-w-md mx-auto hidden lg:block'>                
                <WikiCommons />
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className='flex items-start justify-center py-4 sm:py-6 lg:py-8'>
            <div className='w-full max-w-2xl'>
              <div className='bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm rounded-md p-3 sm:p-2 lg:p-4 border border-black/100 shadow-2xl'>
                {activeSection === 'profile' && (
                  <>
                    <div className='flex mb-4 border-b border-white/10 pb-2'>
                      <div className='grid grid-cols-2 bg-white/10 rounded-md p-1 gap-1 border w-full sm:w-auto'>
                        <TabButton
                          isActive={activeTab === 'experience'}
                          onClick={() => setActiveTab('experience')}
                          icon={<FaBriefcase className='w-4 h-4' />}
                        >
                          Experience
                        </TabButton>
                        <TabButton
                          isActive={activeTab === 'education'}
                          onClick={() => setActiveTab('education')}
                          icon={<FaGraduationCap className='w-4 h-4' />}
                        >
                          Education
                        </TabButton>
                      </div>
                    </div>

                    <div className='mt-4'>
                      {activeTab === 'experience' && (
                        <div className='space-y-4 animate-in fade-in duration-300'>
                          {experiences.map((exp, i) => (
                            <ExperienceCard key={i} exp={exp} />
                          ))}
                        </div>
                      )}

                      {activeTab === 'education' && (
                        <div className='space-y-4 animate-in fade-in duration-300'>
                          {education.map((edu, i) => (
                            <EducationCard key={i} edu={edu} />
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                )}

                {activeSection === 'projects' && (
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
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}