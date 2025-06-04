"use client"
import React, { useState } from "react";
import { FaUser, FaCode } from 'react-icons/fa';
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavButton = ({ isActive, href, icon, children }: { 
  isActive: boolean; 
  href: string; 
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className={`
      relative flex flex-col items-center justify-center px-2 py-1 rounded-md 
      transition-all duration-200 ease-in-out cursor-pointer min-w-[60px]
      overflow-hidden
      ${isActive 
        ? 'text-[#1F53FF]' 
        : 'text-[#FFF5D6] hover:text-[#1F53FF]'
      }
    `}
  >
    <div 
      className={`
        absolute inset-0 transition-all duration-200 linear
        ${isActive 
          ? 'opacity-100 bg-[#FFF5D6]' 
          : 'opacity-0 bg-[#FFF5D6]/0'
        }
      `}
    />
    
    <div className={`
      relative z-10 flex flex-col items-center 
      transition-transform duration-300 ease-in-out
      ${isActive ? 'scale-105' : 'scale-100'}
    `}>
      <div className="text-lg mb-1 transition-all duration-300">
        {icon}
      </div>
      <span className="text-xs font-medium transition-all duration-300">
        {children}
      </span>
    </div>
  </Link>
);

const links = [
  {href: '/', label: 'Profile', icon: <FaUser />}, 
  {href: '/projects', label: 'Projects', icon: <FaCode />}
]

export default function NavBar() {
  const pathname = usePathname();
    
  return (
    <div className="flex justify-center p-3 z-100">
      <div className="bg-black/40 rounded-md p-1 shadow-lg border border-black">
        <div className="flex items-center space-x-2">
          {links.map(link => (
            <NavButton
              key={link.href}
              isActive={link.href === pathname}
              href={link.href}
              icon={link.icon}
            >
              {link.label}
            </NavButton>
          ))}
        </div>
      </div>
    </div>
  );
}