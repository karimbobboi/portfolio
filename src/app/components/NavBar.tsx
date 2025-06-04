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
              Profile
            </NavButton>
          ))}
        </div>
      </div>
    </div>
  );
}