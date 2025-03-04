import IntegrityImage from "../../assets/coreValuesImages/3d-person-holding-a-green-shield-with-a-tick-mark-on-it-png.webp";
import SustainabilityImage from "../../assets/coreValuesImages/Meaning-of-Sustainability.png";
import InnovationImage from "../../assets/coreValuesImages/artificial-intelligence-icon-element-design-illustration-ai-technology-and-cyber-icon-element-futuristic-technology-service-and-communication-artificial-intelligen.webp";

const CoreValues = () => {
  return (
    <div className="bg-blue-50 py-12">
      {/* Heading */}
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">Our Core Values</h1>

      {/* Integrity Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8 flex items-center space-x-8 hover:shadow-lg transition-shadow duration-300">
        <img
          src={IntegrityImage}
          alt="Integrity"
          className="w-32 h-32 object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Integrity</h1>
          <p className="text-gray-600">
            We are committed to doing the right thing, even when no one is watching. We believe in building trust through transparency, honesty, and ethical practices in everything we do.
          </p>
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8 flex items-center space-x-8 hover:shadow-lg transition-shadow duration-300">
        <img
          src={SustainabilityImage}
          alt="Sustainability"
          className="w-32 h-32 object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Sustainability</h1>
          <p className="text-gray-600">
            We strive to create solutions that not only meet today's needs but also protect and preserve resources for future generations. By prioritizing environmental responsibility and social impact, we aim to contribute to a healthier, more sustainable world.
          </p>
        </div>
      </div>

      {/* Innovation Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8 flex items-center space-x-8 hover:shadow-lg transition-shadow duration-300">
        <img
          src={InnovationImage}
          alt="Innovation"
          className="w-32 h-32 object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Innovation</h1>
          <p className="text-gray-600">
            We embrace creativity and cutting-edge ideas to solve challenges, improve lives, and stay ahead in a rapidly evolving world. Through continuous learning and adaptation, we ensure that our solutions remain relevant, impactful, and transformative.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;