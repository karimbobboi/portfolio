"use client"

import { usePathname} from "next/navigation";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function NavBar(){
    const pathname = usePathname();
    const [barOpen, setBarOpen] = useState(false);
    const pages = [
        {name: 'Home', path: '/'},
        {name: 'Projects', path: '/projects'},
        {name: 'Interests', path: '/interests'},
    ]

    return(
        <nav className="border-none bg-black fixed top-0 z-50 w-full">
            <div className="bg-[#00187e] relative z-10 flex items-center justify-between flex-wrap backdrop-blur-sm p-2 rounded-md">
                <div className="hidden sm:flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-lg md:text-xl tracking-tight">Abdulkarim Bobboi</span>
                </div>

                <div className={`
                    w-full hidden lg:flex lg:items-center lg:w-auto transition-all duration-300 ease-in-out
                    ${barOpen ? 'block' : 'hidden'}
                `}>
                    <div className="lg:flex-grow">
                        <>
                        {pages && pages.map((page, i) => (
                            <Link 
                                href={page.path}
                                key={i}
                                className={
                                    `block cursor-pointer lg:inline-block mr-4 ${pathname === page.path
                                    ? 'text-[#f5e5c0] font-semibold text-md' 
                                    : 'text-[#efdfba] hover:text-white text-sm'}`
                            }
                        >
                            {page.name}
                        </Link>
                        ))}
                        </>
                    </div>
                </div>

                <div className="flex items-center gap-3 sm:ml-auto">
                    <Link 
                        href="https://www.linkedin.com/in/abdulkarim-bobboi-6b041a224/" 
                        target="_blank" 
                        className="text-[#efdfba] hover:text-white transition-colors"
                    >
                        <FaLinkedin className="text-[1.5rem]" />
                    </Link>

                    <Link 
                        href="https://github.com/karimbobboi" 
                        target="_blank" 
                        className="text-[#efdfba] hover:text-white transition-colors"
                    >
                        <FaGithub className="text-[1.5rem]" />
                    </Link>
                </div>

                {/* Menu Button */}
                <div className="block lg:hidden">
                    <button
                        onClick={() => setBarOpen(!barOpen)}
                        className="flex items-center px-3 text-[#efdfba] hover:text-white"
                    >
                        {barOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>

                <div className={`
                    w-full lg:flex lg:hidden lg:items-center lg:w-auto transition-all duration-300 ease-in-out
                    ${barOpen ? 'block' : 'hidden'}
                `}>
                    <div className="lg:flex-grow flex flex-col lg:flex-row">
                        {pages.map((page, i) => (
                            <Link key={i}
                                href={page.path}
                                className={`
                                    block py-1 lg:py-0 lg:inline-block lg:mt-0 mr-4
                                    ${pathname === page.path
                                        ? 'text-[#f5e5c0] font-semibold text-md' 
                                        : 'text-[#efdfba] hover:text-white text-sm'}
                                `}
                                onClick={() => {
                                    setBarOpen(false);
                                }}
                            >
                                {page.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}