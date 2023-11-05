import { Link, NavLink } from "react-router-dom";
import { FaBars, FaFacebook, FaTwitter, FaXmark } from "react-icons/fa6";
import { useState } from "react";
const Navbar = () => {


    const [isOpenMenu , setIsOpenMenu]=useState(false)

    const handleToggleMenu=()=>{
        setIsOpenMenu(!isOpenMenu)
    }

    const navItems =[
        {path: "/" , link: "Home"},
        {path: '/allblogs' , link: "All Blogs"},
        {path: '/addblogs' , link: "Add Blogs"},
        {path: '/wishlist' , link: "Wishlist"},
    ]

    return (
        <header className="bg-black text-white fixed top-0 left-0 right-0">
            <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
                <Link to='/' className="text-xl font-bold text-white">Book <span className="text-orange-500">Hub</span></Link>
               {/* navItems for large device */}
                <ul className="md:flex gap-12 text-lg hidden">
                   {
                    navItems.map(({path,link})=><li key={path} className="text-white">
                        <NavLink to={path}
                    className={({ isActive}) =>
                      isActive
                        ? "text-orange-500"
                        :"text-white"
                        
                    } >{link}</NavLink>
                    </li>)
                   }
                </ul>

                {/* nav icons where we have social actives */}
                <div className="text-white lg:flex gap-4 items-center hidden text-xl">
                    <a href="" className="hover:text-orange-400"><FaFacebook/></a>
                    <a href="" className="hover:text-orange-400"><FaTwitter/></a>

                    <button className="bg-orange-500 px-6 py-2 font-semibold rounded-lg text-white hover:bg-white hover:text-black transition-all duration-300 ease-in"> Log in</button>
                </div>

                {/* mobile responsive  */}
                <div className="md:hidden">
                    <button
                    onClick={handleToggleMenu}
                     className="cursor-pointer max-sm:ml-48 max-md:ml-96">
                        {
                            isOpenMenu ? <FaXmark className="w-5 h-5"/> : <FaBars className="w-5 h-5"/>
                        }
                     </button>
                </div>
 
             {/* menu Items for mobile */}
             <div>
             <button className="bg-orange-500 px-6 py-2 font-semibold rounded-lg text-white hover:bg-white hover:text-black transition-all duration-300 ease-in lg:hidden"> Log in</button>
             <ul className={`md:hidden gap-12 text-lg block space-y-2 px-4 py-6 mt-16 bg-white ${isOpenMenu ? "fixed top-0 left-0 w-full transition-all ease-out  duration-200":"hidden"}`}>
                   {
                    navItems.map(({path,link})=><li key={path} className="text-black">
                        <NavLink   to={path}
                    className={({ isActive}) =>
                      isActive
                        ? "text-orange-500"
                        :"text-black"
                        
                    } >{link}</NavLink>
                    </li>)
                   }
                </ul>
             </div>
            </nav>
        </header>
    );
};

export default Navbar;