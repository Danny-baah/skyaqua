import  { useState } from "react";
import fenceImage from "../../../assets/electricImages/Electric-Fence.jpg";

const ElectricFenceHeroSection = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="p-10 bg-blue-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img
            src={fenceImage}
            alt="Electric Fence"
            className="w-3/4 h-[350px] object-cover rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="bg-blue-50 p-6 rounded-lg h-[500px] overflow-y-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Our Installation Process
          </h1>
          <p className="text-gray-600 mb-8">
            We follow a structured and professional approach to ensure a durable
            and efficient electric fence system.
          </p>

          {/* Site Assessment & Planning */}
          <div>
            <h3
              className="text-xl font-semibold text-gray-700 cursor-pointer flex items-center justify-between"
              onClick={() => toggleSection("siteAssessment")}
            >
              Site Assessment & Planning
              <span className="text-blue-600">
                {openSection === "siteAssessment" ? "▲" : "▼"}
              </span>
            </h3>
            {openSection === "siteAssessment" && (
              <ul className="mt-4 pl-6 text-gray-600 list-disc">
                <li>We evaluate your property to determine the best fence layout.</li>
                <li>Discuss your specific needs (security, livestock control, etc.)</li>
                <li>Choose the appropriate fencing materials and power source (mains, battery, or solar-powered).</li>
              </ul>
            )}
            <hr className="my-4 border-gray-300" />
          </div>

          {/* Material Selection */}
          <div>
            <h3
              className="text-xl font-semibold text-gray-700 cursor-pointer flex items-center justify-between"
              onClick={() => toggleSection("materialSelection")}
            >
              Material Selection
              <span className="text-blue-600">
                {openSection === "materialSelection" ? "▲" : "▼"}
              </span>
            </h3>
            {openSection === "materialSelection" && (
              <ul className="mt-4 pl-6 text-gray-600 list-disc">
                <li>High-quality electric fence wires (galvanized, poly wire, or tape).</li>
                <li>Insulators and posts for durability and proper electrical conductivity.</li>
                <li>A reliable energizer (choosing the right power output based on fence length).</li>
              </ul>
            )}
            <hr className="my-4 border-gray-300" />
          </div>

          {/* Fence Installation */}
          <div>
            <h3
              className="text-xl font-semibold text-gray-700 cursor-pointer flex items-center justify-between"
              onClick={() => toggleSection("fenceInstallation")}
            >
              Fence Installation
              <span className="text-blue-600">
                {openSection === "fenceInstallation" ? "▲" : "▼"}
              </span>
            </h3>
            {openSection === "fenceInstallation" && (
              <ul className="mt-4 pl-6 text-gray-600 list-disc">
                <li>Install strong and weather-resistant fence posts.</li>
                <li>Run electric wires and attach them securely using insulators.</li>
                <li>Connect the energizer and test voltage levels.</li>
              </ul>
            )}
            <hr className="my-4 border-gray-300" />
          </div>

          {/* Testing & Safety Check */}
          <div>
            <h3
              className="text-xl font-semibold text-gray-700 cursor-pointer flex items-center justify-between"
              onClick={() => toggleSection("testingSafetyCheck")}
            >
              Testing & Safety Check
              <span className="text-blue-600">
                {openSection === "testingSafetyCheck" ? "▲" : "▼"}
              </span>
            </h3>
            {openSection === "testingSafetyCheck" && (
              <ul className="mt-4 pl-6 text-gray-600 list-disc">
                <li>Test the fence voltage to ensure proper functionality.</li>
                <li>Ensure the fence is safe for animals and people.</li>
                <li>Provide guidelines on how to use and maintain the system effectively.</li>
              </ul>
            )}
            <hr className="my-4 border-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricFenceHeroSection;