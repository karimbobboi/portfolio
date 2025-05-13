import { useRouter, usePathname } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function NavBar(){
    const router = useRouter();
    const pathname = usePathname();

    return(
        <nav className="pb-1 border-none bg-black">
            <div className="bg-[#00187e] relative z-10 flex items-center justify-between flex-wrap backdrop-blur-sm p-3 rounded-md">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Abdulkarim Bobboi</span>
                </div>
                <div className="w-full h-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                        <a
                            className={
                                `block cursor-pointer lg:inline-block mt-1 text-[#efdfba] mr-4 ${pathname === '/' ? 'font-semibold' : 'hover:text-white'}`
                            }
                            onClick={() => {
                                if(!router)
                                    return;
                                router.push('/')
                            }}
                        >
                            Home
                        </a>
                        <a
                            className={
                                `block cursor-pointer mt-4 lg:inline-block lg:mt-0 text-[#efdfba] mr-4 ${pathname.includes('projects') ? 'font-semibold' : 'hover:text-white'}`
                            }
                            onClick={() => {
                                if(!router)
                                    return;
                                router.push('/projects')
                            }}
                        >
                            Projects
                        </a>
                        <a 
                            className={
                                `block cursor-pointer mt-4 lg:inline-block lg:mt-0 text-[#efdfba] mr-4 ${pathname.includes('interests') ? 'font-semibold' : 'hover:text-white'}`
                            }
                            onClick={() => {
                                if(!router)
                                    return;
                                router.push('/interests')
                            }}
                        >
                            Interests
                        </a>

                        <Link 
                            href="https://www.linkedin.com/in/abdulkarim-bobboi-6b041a224/" target="_blank" 
                            className="float-end block cursor-pointer lg:inline-block lg:mt-0 text-[#efdfba] hover:text-white"
                        >
                            <FaLinkedin className="text-[1.7rem]" />
                        </Link>

                        <Link 
                            href="https://github.com/karimbobboi" target="_blank" 
                            className="float-end block cursor-pointer lg:inline-block lg:mt-0 text-[#efdfba] mr-3 hover:text-white"
                        >
                            <FaGithub className="text-[1.7rem]" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}