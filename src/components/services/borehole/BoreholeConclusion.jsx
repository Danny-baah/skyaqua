import React from "react";
import { Link } from "react-router-dom";
import concludeImage1 from "../../../assets/boreholeImages/conclusion1.jpg";
import concludeImage2 from "../../../assets/boreholeImages/civil-engineer.jpg";

const BoreholeConclusion = () => {
  return (
    <div className="flex justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-4xl">
        {/* Images Section */}
        <div className="relative h-full">
          {/* First Image */}
          <img
            src={concludeImage1}
            alt="Borehole Drilling"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          {/* Second Image (Circular and Overlay) */}
          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={concludeImage2}
              alt="Civil Engineer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content Section */}
        <div className="space-y-6 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-900">Secure Your Water Future Today</h1>
          <h4 className="text-xl font-semibold text-gray-700">
            Reliable, Sustainable, and Tailored Solutions for Every Need
          </h4>
          <p className="text-gray-600">
            At SkyAqua, we provide high-quality borehole drilling services for residential,
            commercial, and geothermal needs. Our expert team ensures efficient and sustainable
            solutions tailored to your requirements. Contact us today to secure a reliable water
            source for your property.
          </p>
          {/* Button with Router Link */}
          <Link
            to="/contact"
            className="w-fit bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoreholeConclusion;