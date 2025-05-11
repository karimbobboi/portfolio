export default function NavBar(){
    return(
        <nav className="relative z-10 flex items-center justify-between flex-wrap bg-[#00187e] backdrop-blur-sm p-3 rounded-md m-1">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Abdulkarim Bobboi</span>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="#responsive-header" 
                        className="block mt-4 lg:inline-block lg:mt-0 text-[#efdfba] hover:text-white mr-4">
                        Home
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#efdfba] hover:text-white mr-4">
                        Projects
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-[#efdfba] hover:text-white">
                        Interests
                    </a>
                </div>
            </div>
        </nav>
    );
}