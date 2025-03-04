import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"; // Long Arrows
import residentialImage from "../../../assets/boreholeImages/Residential-borehole-cost-Port-Elizabeth-1024x585.jpg";
import comertialImage from "../../../assets/boreholeImages/cormetial.jpg";
import geothermalImage from "../../../assets/boreholeImages/geothermal.png";
import rehabitationImage from "../../../assets/boreholeImages/rehabitation.webp";
import pumpImage from "../../../assets/boreholeImages/pump.jpg";

const BoreholeServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      image: residentialImage,
      title: "Residential Boreholes",
      description: "Reliable water solutions for homes and small properties.",
    },
    {
      image: comertialImage,
      title: "Commercial Boreholes",
      description: "Sustainable water sources for businesses, farms, and large-scale projects.",
    },
    {
      image: geothermalImage,
      title: "Geothermal Drilling",
      description: "Harnessing renewable energy for heating and cooling systems.",
    },
    {
      image: rehabitationImage,
      title: "Water Well Rehabilitation",
      description: "Restoring and optimizing existing wells for better performance.",
    },
    {
      image: pumpImage,
      title: "Pump Installation",
      description: "Expert installation and maintenance of borehole pumps.",
    },
    {
      image: residentialImage,
      title: "Custom Solutions",
      description: "Tailored borehole solutions to meet your specific needs.",
    },
  ];

  // Infinite Loop Navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  return (
    <div className="bg-white py-10 px-6 mt-12 relative">
      {/* Left Arrow - Positioned to the far left of the page */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-blue-600 transition-colors duration-300 z-20 pl-4"
      >
        <AiOutlineArrowLeft className="w-16 h-16" />
      </button>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Services</h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % services.length;
            const service = services[index];

            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Arrow - Positioned to the far right of the page */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-blue-600 transition-colors duration-300 z-20 pr-4"
      >
        <AiOutlineArrowRight className="w-16 h-16" />
      </button>
    </div>
  );
};

export default BoreholeServices;
