import React from "react";
import agriImage from "../../../assets/electricImages/agri-e-fence.jpg";
import periImage from "../../../assets/electricImages/peri-e-fence.jpg";
import solaImage from "../../../assets/electricImages/solae-e-fence.jpg";
import porImage from "../../../assets/electricImages/por-e-fence.jpg";

const services = [
  {
    title: "Agricultural Electric Fencing",
    image: agriImage,
    points: [
      "Ideal for livestock containment.",
      "Prevents predators from entering.",
      "Can be solar-powered for remote locations.",
    ],
  },
  {
    title: "Perimeter Security Fencing",
    image: periImage,
    points: [
      "Protects homes, businesses, and industrial areas.",
      "Acts as a strong deterrent against intruders.",
      "Can be integrated with alarm systems.",
    ],
  },
  {
    title: "Solar-Powered Electric Fencing",
    image: solaImage,
    points: [
      "Eco-friendly and cost-effective.",
      "Perfect for remote locations.",
      "Works efficiently without grid power.",
    ],
  },
  {
    title: "Portable & Temporary Electric Fences",
    image: porImage,
    points: [
      "Easy to install and relocate.",
      "Used for short-term livestock control or event security.",
      "Commonly used in rotational grazing.",
    ],
  },
];

const ElectricServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-16 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Electric Fencing Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 h-[450px] flex flex-col"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <ul className="list-disc list-inside text-gray-600 flex-grow">
                {service.points.map((point, i) => (
                  <li key={i} className="mb-1">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectricServices;
