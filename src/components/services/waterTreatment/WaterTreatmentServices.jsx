import React, { useState, useRef } from "react";
import water1Image from "../../../assets/waterTreatmentImage/water1.jpg";
import water2Image from "../../../assets/waterTreatmentImage/water2.jpg";
import water3Image from "../../../assets/waterTreatmentImage/water3.webp";

const WaterTreatmentServices = () => {
  const [showServices, setShowServices] = useState(false);
  const servicesRef = useRef(null); // Ref to target services section

  const services = [
    "Water Purification",
    "Wastewater Treatment",
    "Disinfection",
    "Softening & Conditioning",
    "Desalination",
    "Industrial Water Treatment",
    "Sludge Treatment",
    "Stormwater Management",
    "Groundwater Remediation",
    "Monitoring & Testing",
    "Customized Solutions",
    "Emergency Water Treatment",
    "Environmental Water Treatment",
    "POU & POE Systems",
    "Zero Liquid Discharge (ZLD)",
    "Nutrient Removal",
    "Odor & Taste Control",
    "Legionella Control",
    "Rainwater Harvesting",
    "Advanced Technologies",
  ];

  // Show services and scroll down smoothly
  const handleViewServices = () => {
    setShowServices(true);
    setTimeout(() => {
      servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300); // Ensures smooth transition
  };

  // Hide services without scrolling back up
  const handleHideServices = () => {
    setShowServices(false);
  };

  return (
    <div className="bg-blue-50 py-15 px-6 md:px-16">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
        Our Water Treatment Services
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
        <img
          src={water1Image}
          alt="Water Treatment 1"
          className="w-full h-72 object-cover rounded-lg shadow-md"
        />
        <img
          src={water2Image}
          alt="Water Treatment 2"
          className="w-full h-72 object-cover rounded-lg shadow-md"
        />
        <img
          src={water3Image}
          alt="Water Treatment 3"
          className="w-full h-72 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* View Services Button (Only Show if Services are Hidden) */}
      {!showServices && (
        <div className="flex justify-center">
          <button
            onClick={handleViewServices}
            className="bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            View All Services
          </button>
        </div>
      )}

      {/* Services Grid (Smooth Roll-Down Animation) */}
      <div
        ref={servicesRef}
        className={`transition-all duration-700 overflow-hidden ${
          showServices ? "max-h-[1200px] opacity-100 mt-12" : "max-h-0 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-100 text-blue-800 text-center font-semibold py-4 px-3 rounded-md shadow-sm"
            >
              {service}
            </div>
          ))}
        </div>

        {/* Hide Services Button (Only Show if Services are Visible) */}
        {showServices && (
          <div className="flex justify-center mt-7 ">
            <button
              onClick={handleHideServices}
              className="bg-blue-600 text-white text-lg font-semibold px-6 py-3  rounded-lg  hover:bg-blue-700 transition duration-300"
            >
              Hide Services
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaterTreatmentServices;
