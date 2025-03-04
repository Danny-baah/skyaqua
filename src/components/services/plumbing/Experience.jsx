import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import plumberLadyImage from "../../../assets/plumbingImages/m1.webp";
import plumberManImage from "../../../assets/plumbingImages/m2.webp";

const Experience = () => {
  const [count, setCount] = useState(0);

  // Counting animation for "Years of Experience"
  useEffect(() => {
    if (count < 20) {
      const timer = setTimeout(() => setCount(count + 1), 100); // Adjust speed here
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <div className="bg-blue-50 py-16">
      <div className="container mx-auto px-6 max-w-6xl"> {/* Added padding and reduced max-width */}
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* First Column */}
          <div className="space-y-6">
            <h4 className="text-blue-600 text-lg font-semibold">
              TRUSTED SINCE 2005
            </h4>
            <h1 className="text-4xl font-bold text-gray-900">
              Our Commitment to Quality Service
            </h1>
            <p className="text-lg text-gray-600">
              Dedicated to providing the finest plumbing services with honesty and integrity. Come explore our journey.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center border-b border-gray-200 pb-3 hover:translate-x-2 transition-transform duration-300">
                <span className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✔</span>
                </span>
                Experienced Professionals
              </li>
              <li className="flex items-center border-b border-gray-200 pb-3 hover:translate-x-2 transition-transform duration-300">
                <span className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✔</span>
                </span>
                Customer Satisfaction
              </li>
              <li className="flex items-center border-b border-gray-200 pb-3 hover:translate-x-2 transition-transform duration-300">
                <span className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  <span className="text-white text-sm">✔</span>
                </span>
                Quality Workmanship
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>

          {/* Second Column */}
          <div className="relative">
            {/* Years of Experience Button */}
            <button className="absolute top-12 left-0 bg-blue-600 text-white px-6 py-4 rounded-lg shadow-lg z-10 w-48">
              <div className="flex items-center space-x-2">
                <h3 className="text-4xl font-bold">{count}+</h3>
                <p className="text-sm">
                  Years of <br /> Experience
                </p>
              </div>
            </button>

            {/* Images */}
            <div className="flex space-x-4 mt-48"> {/* Increased margin-top */}
              <img
                src={plumberManImage}
                alt="Plumber Man"
                className="w-1/2 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
              <img
                src={plumberLadyImage}
                alt="Plumber Lady"
                className="w-1/2 h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;