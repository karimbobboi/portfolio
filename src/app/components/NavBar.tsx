import { useRouter, usePathname } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function NavBar(){
    const router = useRouter();
    const pathname = usePathname();

    const pages = [
        {name: 'Home', path: '/'},
        {name: 'Projects', path: '/projects'},
        {name: 'Interests', path: '/interests'},
    ]

    return(
        <nav className="border-none bg-black">
            <div className="bg-[#00187e] relative z-10 flex items-center justify-between flex-wrap backdrop-blur-sm p-2 rounded-md">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl tracking-tight">Abdulkarim Bobboi</span>
                </div>
                <div className="w-full h-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="lg:flex-grow">
                        <>
                        {pages && pages.map((page, i) => (
                            <a 
                                key={i}
                                className={
                                    `block cursor-pointer lg:inline-block mt-1 mr-4 ${pathname === page.path
                                    ? 'text-[#f5e5c0] font-semibold text-md' 
                                    : 'text-[#efdfba] hover:text-white text-sm'}`
                            }
                            onClick={() => {
                                if(!router)
                                    return;
                                router.push(page.path)
                            }}
                        >
                            {page.name}
                        </a>
                        ))}

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
                        </>
                    </div>
                </div>
            </div>
        </nav>
    );
}