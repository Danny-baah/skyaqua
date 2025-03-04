import React, { useState } from "react";
import plumberManImage from "../../../assets/plumbingImages/m6.webp";

const WaterTreatmentHeroSection = () => {
  const [visibleDescriptions, setVisibleDescriptions] = useState([]);

  const toggleDescription = (index) => {
    if (visibleDescriptions.includes(index)) {
      setVisibleDescriptions(visibleDescriptions.filter((i) => i !== index));
    } else {
      setVisibleDescriptions([...visibleDescriptions, index]);
    }
  };

  return (
    <div className="bg-blue-50 py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={plumberManImage}
            alt="Plumber working"
            className="w-3/4 md:w-2/3 h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-6 relative">
          <h5 className="text-blue-500 text-lg font-semibold">
            About Water Treatment
          </h5>
          <p className="text-gray-600">
            At SkyAqua, we are committed to providing clean, safe, and 
            high-quality water through our reliable water treatment measures. 
            We ensure that every drop meets the highest standards by implementing 
            strict purification processes and adhering to environmental and 
            health regulations.
          </p>

          <h3 className="text-xl font-bold">Our approach focuses on</h3>

          {/* List Items */}
          <ul className="space-y-4">
            {[
              {
                title: "Quality Assurance",
                description: "Regular testing and monitoring to maintain water purity.",
              },
              {
                title: "Advanced Treatment Methods",
                description: "Utilizing modern filtration and purification techniques.",
              },
              {
                title: "Environmental Responsibility",
                description: "Minimizing environmental impact through sustainable practices.",
              },
              {
                title: "Safety Compliance",
                description: "Meeting national and international water safety standards.",
              },
            ].map((item, index) => (
              <React.Fragment key={index}>
                <li
                  className="group flex items-center cursor-pointer transition-transform duration-300 hover:translate-x-2"
                  onClick={() => toggleDescription(index)}
                >
                  {/* Check Icon */}
                  <span className="text-green-500 mr-3">✔</span>

                  {/* Title */}
                  <h5 className="text-blue-500 font-semibold">{item.title}</h5>

                  {/* Arrow Icon */}
                  <span className="ml-auto text-sm">
                    {visibleDescriptions.includes(index) ? "▲" : "▼"}
                  </span>
                </li>

                {/* Description (Conditional) */}
                {visibleDescriptions.includes(index) && (
                  <p className="text-gray-600 mt-2 pl-8">{item.description}</p>
                )}

                {/* Horizontal Line */}
                <hr className="border-gray-300" />
              </React.Fragment>
            ))}
          </ul>

          {/* Marquee Text (Infinite Scrolling inside the second div) */}
          <div className="overflow-hidden relative h-8 mt-4">
            <p className="absolute whitespace-nowrap animate-marquee text-gray-600">
              With SkyAqua, you can trust that your water is treated with precision, care, and sustainability in mind. 
              &nbsp; • &nbsp; Clean water, healthy life! &nbsp; • &nbsp; Your trusted water partner!
            </p>
          </div>
        </div>
      </div>

      {/* Tailwind Keyframes for Marquee Animation */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }

          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default WaterTreatmentHeroSection;
