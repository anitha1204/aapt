// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import logoImg from "../assets/logo 1.png";
// import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
// import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
// import { FaInstagram } from "react-icons/fa";
// import { RiFacebookBoxLine } from "react-icons/ri";
// import { CiLinkedin } from "react-icons/ci";
// // import ResponsiveMenu from "./ResponsiveMenu.jsx";

// const Navbars = () => {
//     const [showMenu, setShowMenu] = useState(false);

//     const toggleMenu = () => {
//         setShowMenu(!showMenu);
//     };

//     return (
//         <>
//             <nav className="fixed top-0 right-0 w-full h-20 sm:h-[100px] bg-white shadow-md z-10 lg:rounded-b-[50px]">
//                 {/* Main navbar */}
//                 <div className="container mx-auto py-4 px-4 lg:px-0">
//                     <div className="flex justify-between items-center">
                        
//                         {/* Logo section */}
//                         <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
//                             <img
//                                 src={logoImg}
//                                 alt="Logo"
//                                 className=" h-14 sm:h-12 md:h-12 lg:h-20 lg:w-[110px] rounded mx-auto lg:ml-[-20px]"
//                             />
//                         </Link>


//                         {/* Navlinks section */}
//                         <div className="hidden md:block">
//                             <ul className="flex items-center gap-8 lg:gap-8 xl:gap-12 text-[12px] lg:text-[12px] xl:text-[12px] lg:mr-[-20px]">
//                                 <li className="py-2 ">
//                                     <NavLink
//                                         exact
//                                         to="/"
//                                         activeClassName="text-primary"
//                                         onClick={() => window.scrollTo(0, 0)}
//                                     >
//                                         HOME
//                                     </NavLink>
//                                 </li>
//                                 <li className="py-2 ">
//                                     <NavLink
//                                         to="/aboutUs"
//                                         activeClassName="text-primary"
//                                         onClick={() => window.scrollTo(0, 0)}
//                                     >
//                                         ABOUT US
//                                     </NavLink>
//                                 </li>
//                                 <li className="py-2 ">
//                                     <NavLink
//                                         to="/products"
//                                         activeClassName="text-primary"
//                                         onClick={() => window.scrollTo(0, 0)}
//                                     >
//                                         PRODUCTS
//                                     </NavLink>
//                                 </li>
//                                 <li className="py-2 ">
//                                     <NavLink
//                                         to="/blogs"
//                                         activeClassName="text-primary"
//                                         onClick={() => window.scrollTo(0, 0)}
//                                     >
//                                         BLOGS
//                                     </NavLink>
//                                 </li>
//                                 <li className="py-2 ">
//                                     <NavLink
//                                         to="/gallery"
//                                         activeClassName="text-primary"
//                                         onClick={() => window.scrollTo(0, 0)}
//                                     >
//                                         GALLERY
//                                     </NavLink>
//                                 </li>
//                                 <li className="py-2 ">
//                                     <NavLink
//                                         to="/download"
//                                         activeClassName="text-primary"
//                                         onClick={() => window.scrollTo(0, 0)}
//                                     >
//                                         DOWNLOAD
//                                     </NavLink>
//                                 </li>
//                                 <li className="py-2 ">
//                                     <NavLink
//                                         to="/contact"
//                                         activeClassName="text-primary"
//                                         onClick={() => window.scrollTo(0, 0)}
//                                     >
//                                         CONTACT US
//                                     </NavLink>
//                                 </li>
//                             </ul>
//                         </div>

//                         {/* Menu Toggle Button */}
//                         <div className="md:hidden flex items-center">
//                             <button onClick={toggleMenu} className="text-3xl">
//                                 {showMenu ? <HiMenuAlt3 /> : <HiMenuAlt1 />}
//                             </button>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Responsive Menu */}
//                 {showMenu && (
//                     <div className="md:hidden bg-white py-4 mt-[-8px]">
//                         <ul className="flex flex-col items-center gap-4">
//                             <li>
//                                 <NavLink
//                                     exact
//                                     to="/"
//                                     activeClassName="text-primary"
//                                     onClick={() => {
//                                         window.scrollTo(0, 0);
//                                         setShowMenu(false);
//                                     }}
//                                 >
//                                     HOME
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/aboutUs"
//                                     activeClassName="text-primary"
//                                     onClick={() => {
//                                         window.scrollTo(0, 0);
//                                         setShowMenu(false);
//                                     }}
//                                 >
//                                     ABOUT US
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/products"
//                                     activeClassName="text-primary"
//                                     onClick={() => {
//                                         window.scrollTo(0, 0);
//                                         setShowMenu(false);
//                                     }}
//                                 >
//                                     PRODUCTS
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/blogs"
//                                     activeClassName="text-primary"
//                                     onClick={() => {
//                                         window.scrollTo(0, 0);
//                                         setShowMenu(false);
//                                     }}
//                                 >
//                                     BLOGS
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/gallery"
//                                     activeClassName="text-primary"
//                                     onClick={() => {
//                                         window.scrollTo(0, 0);
//                                         setShowMenu(false);
//                                     }}
//                                 >
//                                     GALLERY
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/download"
//                                     activeClassName="text-primary"
//                                     onClick={() => {
//                                         window.scrollTo(0, 0);
//                                         setShowMenu(false);
//                                     }}
//                                 >
//                                     DOWNLOAD
//                                 </NavLink>
//                             </li>
//                             <li>
//                                 <NavLink
//                                     to="/contact"
//                                     activeClassName="text-primary"
//                                     onClick={() => {
//                                         window.scrollTo(0, 0);
//                                         setShowMenu(false);
//                                     }}
//                                 >
//                                     CONTACT US
//                                 </NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                 )}
//             </nav>
//         </>
//     );
// };

// export default Navbars;



import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/logo 1.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

const Navbars = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const navLinks = [
        { to: "/", label: "HOME" },
        { to: "/aboutUs", label: "ABOUT US" },
        { to: "/products", label: "PRODUCTS" },
        { to: "/blogs", label: "BLOGS" },
        { to: "/gallery", label: "GALLERY" },
        { to: "/download", label: "DOWNLOAD" },
        { to: "/contact", label: "CONTACT US" },
    ];

    return (
        <nav className="fixed top-0 w-full h-20 sm:h-[100px] bg-white shadow-md z-10 lg:rounded-b-[50px]">
            {/* Main navbar */}
            <div className="container mx-auto px-4 py-4 lg:px-0">
                <div className="flex justify-between items-center">
                    
                    {/* Logo section */}
                    <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
                        <img
                            src={logoImg}
                            alt="Logo"
                            className="h-14 sm:h-12 md:h-12 lg:h-20 lg:w-[110px] rounded"
                        />
                    </Link>

                    {/* Navlinks section for medium and larger screens */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-8 lg:gap-12 text-xs lg:text-[12px]">
                            {navLinks.map((link, index) => (
                                <li key={index} className="py-2">
                                    <NavLink
                                        to={link.to}
                                        className={({ isActive }) =>
                                            isActive ? "" : ""
                                        }
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Menu Toggle Button for small screens */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-3xl" aria-label="Toggle Menu">
                            {showMenu ? <HiMenuAlt3 /> : <HiMenuAlt1 />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Responsive Menu for small screens */}
            {showMenu && (
                <div className="md:hidden bg-white shadow-md">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) =>
                                        isActive ? "text-primary font-semibold" : "hover:text-primary"
                                    }
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                        setShowMenu(false);
                                    }}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbars;
