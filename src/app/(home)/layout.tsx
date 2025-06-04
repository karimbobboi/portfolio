"use client"

import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import WikiCommons from '../components/WikiCommons';
import NavBar from '../components/NavBar';

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

export default function Page({
  children,
}: {
children: React.ReactNode;
}) {
  return (
    // <div className="flex flex-col md:grid md:grid-cols-8 items-left justify-center gap-4 mt-4">
    //   <ProfileCard />
    //   {children}
    // </div>
    <main className='min-h-screen relative px-4 sm:px-6 lg:px-8'>      
          <div className='pt-16 sm:pt-20'>
            <NavBar />
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
                {children}
              </div>
    
            </div>
          </div>
        </main>
  );
}