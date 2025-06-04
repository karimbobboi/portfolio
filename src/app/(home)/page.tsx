"use client"

import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { Experience, Education, experiences, education } from '../types';

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
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

    return (
      <div className='w-full max-w-2xl'>
        <div className='bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-sm rounded-md p-3 sm:p-2 lg:p-4 border border-black/100 shadow-2xl'>
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
        </div>
      </div>
  );
}