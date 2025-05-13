"use client"

import { useState } from 'react';
import Background from './components/Background';
import NavBar from './components/NavBar';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  techstack: string[];
}

interface Education {
  degree: string;
  uni: string;
  grade?: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Engineer Intern",
    company: "ZedSoft Limited",
    location: 'Leeds, UK',
    period: "July 2022 — September 2022",
    description: [
      "Collaborated within a small Agile team to develop a user-friendly dashboard for a cryptocurrency platform using Vue.js and Bootstrap",
      "Integrated RESTful APIs to facilitate seamless communication between the frontend and backend systems",
      "Contributed to the design and implementation of the platform's PostgreSQL database to optimise data management",
      "Conducted code reviews and collaborated with team members to maintain high-quality code standards"
    ],
    techstack: ["Vue.js", "Bootstrap", "PostgreSQL"]
  }
];

const education: Education[] = [
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

const ContactLink = ({ href, icon, tooltip }: { href: string; icon: React.ReactNode; tooltip: string }) => (
  <div className='has-tooltip'>
    <a 
      href={href}
      target='_blank'
      className='text-white/75 hover:text-[#2053d0] transition-colors'
    >
      {icon}
    </a>
    {/* On hover, show tooltip */}
    <span className='tooltip rounded p-1 bg-white/30 text-xs text-white/75 -mb-20'>{tooltip}</span>
  </div>
);

const TabContent = ({ activeTab }: { activeTab: 'experience' | 'education' }) => {
  if (activeTab === 'experience') {
    return (
      <div className='space-y-4'>
        {experiences.map((exp, index) => (
          <div key={index} className='space-y-1'>
            <h3 className='text-lg font-semibold text-white'>{exp.title}</h3>
            <div className='flex text-md font-light justify-between items-center text-white/90'>
              <p>{exp.company}</p>
              <p>{exp.location}</p>
            </div>
            <p className='text-sm text-white/75'>{exp.period}</p>
            <ul className='list-disc list-inside text-sm text-white/75 space-y-1'>
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className='grid auto-cols-max grid-flow-col gap-1 text-neutral-200 text-xs font-light pt-3'>
              {exp.techstack.map((item, i) => (
                <span key={i} className='bg-white/15 p-2 backdrop-blur rounded-full'>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className='space-y-4'>
      {education.map((edu, index) => (
        <div key={index} className='space-y-1'>
          <h3 className='text-lg font-semibold text-white'>{edu.degree} {edu.grade === 'Transferred' && (<span className='text-white/40 text-sm'>{`(${edu.grade})`}</span>)}</h3>
          <div className='flex text-md font-light justify-between items-center text-white/90'>
              <p>{edu.uni}</p>
              {edu.grade !== 'Transferred' && (<p>{edu.grade}</p>)}
            </div>
          <p className='text-xs text-white/75'>{edu.period}</p>
          <ul className='list-disc list-inside text-sm text-white/75 space-y-1'>
            {edu.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <main className='min-h-screen relative'>
      <header className="sticky top-0 z-50">
        <NavBar />
      </header>
      
      <div className='fixed inset-x-0 top-[60px] bottom-0 -z-10'>
        <Background />
      </div>

      <div className='relative py-20'>
        <div className='flex justify-center mb-12 mt-15'>
          <div className='w-full max-w-3xl p-3 rounded-lg'>
            <div className='space-y-4'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold text-white'>Hello, I'm Abdulkarim.</h1>
                <div className='space-y-4'>
                  <p className='text-white/80 leading-relaxed my-3'>
                    I am <span className='font-semibold text-white/90'>Abdulkarim</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>

              <div className='grid auto-cols-max grid-flow-col gap-3 text-neutral-400'>
                <ContactLink 
                  href="mailto:abdulkarimbobboi@gmail.com"
                  icon={<FaEnvelope className="w-[2.5rem] h-[2.5rem]" />}
                  tooltip="Send me an email"
                />
                <ContactLink 
                  href="https://github.com/karimbobboi"
                  icon={<FaGithub className="w-[2.5rem] h-[2.5rem]" />}
                  tooltip="GitHub profile"
                />
                <ContactLink 
                  href="https://www.linkedin.com/in/abdulkarim-bobboi-6b041a224/"
                  icon={<FaLinkedin className="w-[2.5rem] h-[2.5rem]" />}
                  tooltip="LinkedIn profile"
                />
                <ContactLink 
                  href="/cv.pdf"
                  icon={<FaFileAlt className="w-[2.5rem] h-[2.5rem]" />}
                  tooltip="View resume"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className='flex justify-center mt-10'>
          <div className='w-full max-w-3xl p-3 rounded-lg'>
            <div className='space-y-3'>
              <h1 className='text-3xl font-bold text-white'>Experience</h1>
              <div className='flex space-x-4 border-b border-white/20'>
                <button
                  onClick={() => setActiveTab('experience')}
                  className={`px-2 text-sm font-medium transition-colors ${
                    activeTab === 'experience' 
                      ? 'text-white border-b-2 border-white' 
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  Experience
                </button>
                <button
                  onClick={() => setActiveTab('education')}
                  className={`px-2 text-sm font-medium transition-colors ${
                    activeTab === 'education' 
                      ? 'text-white border-b-2 border-white' 
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  Education
                </button>
              </div>
              
              <div className='border border-gray-800 p-3 rounded bg-[#080028]/100'>
                <TabContent activeTab={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}