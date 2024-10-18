import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/logo 1.png";
import { HiMenuAlt1, HiMenuAlt3, HiChevronDown, HiChevronUp } from "react-icons/hi";

const Navbars = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleProductsDropdown = () => {
    setShowProductsDropdown(!showProductsDropdown);
  };

  const handleDesktopItemClick = () => {
    setShowProductsDropdown(false); // Close dropdown on click for desktop view
  };

  return (
    <>
      <nav className="fixed top-0 right-0 w-full h-20 sm:h-[100px] bg-white shadow-md z-10 lg:rounded-b-[50px]">
        {/* Main navbar */}
        <div className="container mx-auto py-4 px-4 lg:px-0">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
              <img
                src={logoImg}
                alt="Logo"
                className="h-14 sm:h-12 md:h-12 lg:h-20 lg:w-[110px] rounded mx-auto lg:ml-[-20px]"
              />
            </Link>

            {/* Navlinks section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-8 lg:gap-8 xl:gap-12 text-[12px] lg:text-[12px] xl:text-[12px] lg:mr-[-20px]">
                <li className="py-2">
                  <NavLink exact to="/" activeClassName="text-primary" onClick={() => window.scrollTo(0, 0)}>
                    HOME
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="/aboutUs" activeClassName="text-primary" onClick={() => window.scrollTo(0, 0)}>
                    ABOUT US
                  </NavLink>
                </li>

                {/* PRODUCTS dropdown */}
                <li className="py-2 relative">
                  <button
                    onClick={toggleProductsDropdown}
                    className="flex items-center focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={showProductsDropdown}
                  >
                    PRODUCTS {showProductsDropdown ? <HiChevronUp /> : <HiChevronDown />}
                  </button>

                  {showProductsDropdown && (
                    <ul className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-20">
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link to="/granite-blocks" onClick={handleDesktopItemClick}>
                          Granite Blocks
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link to="/slabs" onClick={handleDesktopItemClick}>
                          Slabs
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link to="/monuments-sculptures" onClick={handleDesktopItemClick}>
                          Monuments & Sculptures
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link to="/counter-tops" onClick={handleDesktopItemClick}>
                          Counter Tops
                        </Link>
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100">
                        <Link to="/other-products" onClick={handleDesktopItemClick}>
                          Other Products
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>

                <li className="py-2">
                  <NavLink to="/blogs" activeClassName="text-primary" onClick={() => window.scrollTo(0, 0)}>
                    BLOGS
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="/gallery" activeClassName="text-primary" onClick={() => window.scrollTo(0, 0)}>
                    GALLERY
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="/download" activeClassName="text-primary" onClick={() => window.scrollTo(0, 0)}>
                    DOWNLOAD
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="/resources" activeClassName="text-primary" onClick={() => window.scrollTo(0, 0)}>
                    RESOURCES
                  </NavLink>
                </li>
                <li className="py-2">
                  <NavLink to="/contact" activeClassName="text-primary" onClick={() => window.scrollTo(0, 0)}>
                    CONTACT US
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Menu Toggle Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-3xl">
                {showMenu ? <HiMenuAlt3 /> : <HiMenuAlt1 />}
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Menu */}
        {showMenu && (
          <div className="md:hidden bg-white py-4 mt-[-8px]">
            <ul className="flex flex-col items-center gap-4">
              <li>
                <NavLink
                  exact
                  to="/"
                  activeClassName="text-primary"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setShowMenu(false);
                  }}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutUs"
                  activeClassName="text-primary"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    setShowMenu(false);
                  }}
                >
                  ABOUT US
                </NavLink>
              </li>

              {/* PRODUCTS dropdown for mobile */}
              <li>
                <button onClick={toggleProductsDropdown} className="flex items-center focus:outline-none">
                  PRODUCTS {showProductsDropdown ? <HiChevronUp /> : <HiChevronDown />}
                </button>

                {showProductsDropdown && (
                  <ul className="pl-4">
                    <li className="py-2">
                      <NavLink
                        to="/granite-blocks"
                        activeClassName="text-primary"
                        onClick={() => setShowMenu(false)}
                      >
                        Granite Blocks
                      </NavLink>
                    </li>
                    <li className="py-2">
                      <NavLink to="/slabs" activeClassName="text-primary" onClick={() => setShowMenu(false)}>
                        Slabs
                      </NavLink>
                    </li>
                    <li className="py-2">
                      <NavLink
                        to="/monuments-sculptures"
                        activeClassName="text-primary"
                        onClick={() => setShowMenu(false)}
                      >
                        Monuments & Sculptures
                      </NavLink>
                    </li>
                    <li className="py-2">
                      <NavLink to="/counter-tops" activeClassName="text-primary" onClick={() => setShowMenu(false)}>
                        Counter Tops
                      </NavLink>
                    </li>
                    <li className="py-2">
                      <NavLink
                        to="/other-products"
                        activeClassName="text-primary"
                        onClick={() => setShowMenu(false)}
                      >
                        Other Products
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <NavLink to="/blogs" activeClassName="text-primary" onClick={() => setShowMenu(false)}>
                  BLOGS
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" activeClassName="text-primary" onClick={() => setShowMenu(false)}>
                  GALLERY
                </NavLink>
              </li>
              <li>
                <NavLink to="/download" activeClassName="text-primary" onClick={() => setShowMenu(false)}>
                  DOWNLOAD
                </NavLink>
              </li>
              <li>
                <NavLink to="/resources" activeClassName="text-primary" onClick={() => setShowMenu(false)}>
                  RESOURCES
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="text-primary" onClick={() => setShowMenu(false)}>
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbars;




// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import logoImg from "../assets/logo 1.png";
// import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

// const Navbars = () => {
//     const [showMenu, setShowMenu] = useState(false);
//     const [showProductsDropdown, setShowProductsDropdown] = useState(false); // State for the dropdown

//     const toggleMenu = () => {
//         setShowMenu(!showMenu);
//     };

//     const toggleProductsDropdown = () => {
//         setShowProductsDropdown(!showProductsDropdown); // Toggle dropdown visibility
//     };

//     const navLinks = [
//         { to: "/", label: "HOME" },
//         { to: "/aboutUs", label: "ABOUT US" },
//         { to: "/products", label: "PRODUCTS", hasDropdown: true }, // Indicate this link has a dropdown
//         { to: "/blogs", label: "BLOGS" },
//         { to: "/gallery", label: "GALLERY" },
//         { to: "/download", label: "DOWNLOAD" },
//         { to: "/resources", label: "RESOURCES" },
//         { to: "/contact", label: "CONTACT US" },
//     ];

//     // Dropdown items for PRODUCTS
//     const productDropdownItems = [
//         "Granite ",
//         "Blocks",
//         "Slabs",
//         "Monuments & Sculptures",
//         "Countertops",
//         "Other Products"
//     ];

//     return (
//         <nav className="fixed top-0 w-full h-20 sm:h-[100px] bg-white shadow-md z-10 lg:rounded-b-[50px]">
//             {/* Main navbar */}
//             <div className="container mx-auto px-4 py-4 lg:px-0">
//                 <div className="flex justify-between items-center">
//                     {/* Logo section */}
//                     <Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center">
//                         <img
//                             src={logoImg}
//                             alt="Logo"
//                             className="h-14 sm:h-12 md:h-12 lg:h-20 lg:w-[110px] rounded"
//                         />
//                     </Link>

//                     {/* Navlinks section for medium and larger screens */}
//                     <div className="hidden md:block">
//                         <ul className="flex items-center gap-8 lg:gap-12 text-xs lg:text-[12px]">
//                             {navLinks.map((link, index) => (
//                                 <li key={index} className="relative py-2">
//                                     {/* Check if the link has a dropdown */}
//                                     {link.hasDropdown ? (
//                                         <>
//                                             <button
//                                                 onClick={toggleProductsDropdown} // Toggle the dropdown on click
//                                                 className="flex items-center text-gray-800 hover:text-primary"
//                                             >
//                                                 {link.label}
//                                             </button>
//                                             {/* Dropdown Menu */}
//                                             {showProductsDropdown && (
//                                                 <ul className="absolute  mt-2 bg-white shadow-md border rounded">
//                                                     {productDropdownItems.map((item, itemIndex) => (
//                                                         <li key={itemIndex} className="py-2 px-20 hover:bg-gray-100 text-[12px]">
//                                                             <NavLink
//                                                                 to={`/products/${item.replace(" ", "-").toLowerCase()}`} // Example routing
//                                                                 onClick={() => {
//                                                                     window.scrollTo(0, 0);
//                                                                     setShowMenu(false);
//                                                                     setShowProductsDropdown(false); // Close dropdown after click
//                                                                 }}
//                                                             >
//                                                                 {item}
//                                                             </NavLink>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             )}
//                                         </>
//                                     ) : (
//                                         <NavLink
//                                             to={link.to}
//                                             className={({ isActive }) =>
//                                                 isActive ? "text-primary font-semibold" : "hover:text-primary"
//                                             }
//                                             onClick={() => {
//                                                 window.scrollTo(0, 0);
//                                                 setShowMenu(false);
//                                             }}
//                                         >
//                                             {link.label}
//                                         </NavLink>
//                                     )}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Menu Toggle Button for small screens */}
//                     <div className="md:hidden flex items-center">
//                         <button onClick={toggleMenu} className="text-3xl" aria-label="Toggle Menu">
//                             {showMenu ? <HiMenuAlt3 /> : <HiMenuAlt1 />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Responsive Menu for small screens */}
//             {showMenu && (
//                 <div className="md:hidden bg-white shadow-md">
//                     <ul className="flex flex-col items-center gap-4 py-4">
//                         {navLinks.map((link, index) => (
//                             <li key={index}>
//                                 <NavLink
//                                     to={link.to}
//                                     className={({ isActive }) =>
//                                         isActive ? "text-primary font-semibold" : "hover:text-primary"
//                                     }
//                                     onClick={() => {
//                                         window.scrollTo(0, 0);
//                                         setShowMenu(false);
//                                     }}
//                                 >
//                                     {link.label}
//                                 </NavLink>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// };

// export default Navbars;
