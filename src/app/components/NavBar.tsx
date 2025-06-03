"use client"
import React, { useState } from "react";
import { FaUser, FaCode } from 'react-icons/fa';

const NavButton = ({ isActive, onClick, icon, children }: { 
  isActive: boolean; 
  onClick: () => void; 
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center px-2 py-1 rounded-md transition-all duration-200 cursor-pointer min-w-[60px] ${
      isActive 
        ? 'bg-[#FFF5D6]/100 text-[#1F53FF]/100 shadow-sm' 
        : 'text-[#FFF5D6]/100 hover:text-[#1F53FF]/80'
    }`}
  >
    <div className="text-lg mb-1">
      {icon}
    </div>
    <span className="text-xs font-medium">
      {children}
    </span>
  </button>
);

export default function NavBar({activeSection, setActiveSection}: {
    activeSection: string, setActiveSection: any
}) {
    
  return (
    <div className="flex justify-center p-3 z-100">
      <div className="bg-black/40 rounded-md p-1 shadow-lg border border-black">
        <div className="flex items-center space-x-2">
          <NavButton
            isActive={activeSection === 'profile'}
            onClick={() => setActiveSection('profile')}
            icon={<FaUser />}
          >
            Profile
          </NavButton>
          <NavButton
            isActive={activeSection === 'projects'}
            onClick={() => setActiveSection('projects')}
            icon={<FaCode />}
          >
            Projects
          </NavButton>
        </div>
      </div>
    </div>
  );
}