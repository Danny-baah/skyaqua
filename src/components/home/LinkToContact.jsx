
import { Link } from "react-router-dom"; // Import Link for routing
import EngineersImage from "../../assets/ReasonImages/engs.webp";
import FenceImage from "../../assets/ReasonImages/fence1.webp";
import AutoImage from "../../assets/ReasonImages/slate-automatic-driveway-gate-opening-1.jpg";
import PlumberImage from "../../assets/ReasonImages/whats-a-plumber-1.jpg.webp";
import BoreholeImage from "../../assets/ReasonImages/supervised-borehole-drilling-project.webp";
import EngineerImage from "../../assets/ReasonImages/istockphoto-1189913265-612x612.jpg"

const LinkToContact = () => {
  return (
    <div className="py-12 px-4 bg-gray-100">
      {/* Grid Layout for Images */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto relative">
        {/* Top Left Image */}
        <div className="col-span-1">
          <img
            src={EngineersImage}
            alt="Engineers"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Top Middle Image */}
        <div className="col-span-1">
          <img
            src={FenceImage}
            alt="Fence"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Top Right Image */}
        <div className="col-span-1">
          <img
            src={AutoImage}
            alt="Automatic Gate"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Middle Card */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center max-w-xs">
            <p className="text-lg font-semibold text-gray-800 mb-4">
              You've got some questions?
            </p>
            <Link
              to="/contact" // Replace with your contact route
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Let's Talk
            </Link>
          </div>
        </div>

        {/* Bottom Left Image */}
        <div className="col-span-1">
          <img
            src={PlumberImage}
            alt="Plumber"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Bottom Middle Image */}
        <div className="col-span-1">
          <img
            src={BoreholeImage}
            alt="Borehole Drilling"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Bottom Right Image */}
        <div className="col-span-1">
          <img
            src={EngineerImage}
            alt="Engineers"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default LinkToContact;