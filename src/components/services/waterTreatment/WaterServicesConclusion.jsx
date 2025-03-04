import { Link } from "react-router-dom"; // Import Router for navigation
import gifImage from "../../../assets/waterTreatmentImage/watergif.gif";

const WaterServicesConclusion = () => {
  return (
    <div className="bg-blue-50 py-8 px-6 md:px-16 ">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Image Section */}
        <img
          src={gifImage}
          alt="Water Treatment GIF"
          className="w-full h-48 object-cover rounded-lg shadow-md"
        />

        {/* Text & Button Section */}
        <div className="text-center md:text-left space-y-4">
          <h3 className="text-xl font-semibold text-black">
            For quality water treatment <br />
            and other services...
          </h3>
          <Link
            to="/contact"
            className="inline-block border-1 border-black-600 text-blue-600 text-lg font-semibold px-6 py-3 rounded-md mt-4 hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WaterServicesConclusion;
