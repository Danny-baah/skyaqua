import { useState } from 'react';
import { Link } from 'react-router-dom';
import AquaIcon from "../../../assets/heroSectionImages/water.gif";

const Navbar = () => {
  // State to manage dropdown visibility
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center md:justify-center md:gap-20">
        {/* Company Name and Logo */}
        <h1 className="pl-5 text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
          Sky <img src={AquaIcon} alt="Water Icon" className="w-12 h-12 mx-2" /> Aqua Enterprise
        </h1>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none pr-2">
            {isMobileMenuOpen ? (
              // Close icon (X)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Navbar Links */}
        <ul className={`md:flex space-x-8 list-none p-0 m-0 ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link 
              to="/" 
              className="text-gray-800 hover:text-gray-600 text-lg no-underline relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
          <li
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
            className="relative"
          >
            <div // Changed from Link to div since it doesn't need a route
              className="text-gray-800 hover:text-gray-600 text-lg no-underline relative group cursor-pointer"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
            </div>
            {showServicesDropdown && (
              <ul className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 border border-gray-200 rounded-lg shadow-lg p-2 min-w-[150px] z-50 transition-all duration-300">
                <li>
                  <Link 
                    to="/borehole" 
                    className="text-white hover:text-gray-300 block py-1 px-2 no-underline relative group"
                  >
                    Borehole Drilling
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/plumbing" 
                    className="text-white hover:text-gray-300 block py-1 px-2 no-underline relative group"
                  >
                    Plumbing
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/water" 
                    className="text-white hover:text-gray-300 block py-1 px-2 no-underline relative group"
                  >
                    Water Treatment
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/autogate" 
                    className="text-white hover:text-gray-300 block py-1 px-2 no-underline relative group"
                  >
                    Automatic Gate Installation
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/efence" 
                    className="text-white hover:text-gray-300 block py-1 px-2 no-underline relative group"
                  >
                    Electric Fence
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Company Dropdown */}
          <li
            onMouseEnter={() => setShowCompanyDropdown(true)}
            onMouseLeave={() => setShowCompanyDropdown(false)}
            className="relative"
          >
            <div // Changed from Link to div since it doesn't need a route
              className="text-gray-800 hover:text-gray-600 text-lg no-underline relative group cursor-pointer"
            >
              Company
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
            </div>
            {showCompanyDropdown && (
              <ul className="absolute top-full left-1/2 transform -translate-x-1/2 bg-black bg-opacity-80 border border-gray-200 rounded-lg shadow-lg p-2 min-w-[150px] z-50 transition-all duration-300">
                <li>
                  <Link 
                    to="/team" 
                    className="text-white hover:text-gray-300 block py-1 px-2 no-underline relative group"
                  >
                    Team
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/gallery" 
                    className="text-white hover:text-gray-300 block py-1 px-2 no-underline relative group"
                  >
                    Gallery
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link 
              to="/contact" 
              className="text-gray-800 hover:text-gray-600 text-lg no-underline relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;