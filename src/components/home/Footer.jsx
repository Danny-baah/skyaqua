import { FaFacebookF, FaLinkedin, FaSquareTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* First Column - Services */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/plumbing" className="text-white hover:text-gray-400 transition-colors duration-300">
                Plumbing
              </Link>
            </li>
            <li>
              <Link to="/automatic-gate-installation" className="text-white hover:text-gray-400 transition-colors duration-300">
                Automatic Gate Installation
              </Link>
            </li>
            <li>
              <Link to="/water-treatment" className="text-white hover:text-gray-400 transition-colors duration-300">
                Water Treatment
              </Link>
            </li>
            <li>
              <Link to="/electric-fence-installation" className="text-white hover:text-gray-400 transition-colors duration-300">
                Electric Fence Installation
              </Link>
            </li>
            <li>
              <Link to="/borehole-drilling" className="text-white hover:text-gray-400 transition-colors duration-300">
                Borehole Drilling
              </Link>
            </li>
          </ul>
        </div>

        {/* Second Column - Address */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Address</h3>
          <p>Accra Ghana</p>
          <p>Tema-West</p>
          <p>P.O box 799, Afienya Street</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700 transition-colors duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <FaSquareTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/233592728931"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 transition-colors duration-300"
            >
              <RiWhatsappFill className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Third Column - Say Hello */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-4">Say Hello</h3>
          <p>skyaqua@gmail.com</p>
          <p>+233 592 728 931</p>
        </div>
      </div>

      {/* Centered Message */}
      <h2 className="text-center mt-8 text-lg text-gray-300">
        Our Services are provided across anywhere in Ghana
      </h2>

      {/* Horizontal Line */}
      <hr className="border-gray-700 my-8 max-w-4xl mx-auto" />

      {/* Copyright Message */}
      <p className="text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Sky Aqua. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;