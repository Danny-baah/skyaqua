
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import image1 from "../../../assets/plumbingImages/m3.webp";
import image2 from "../../../assets/plumbingImages/pi2.jpg";
import image3 from "../../../assets/plumbingImages/pi3.jpg";
import image4 from "../../../assets/plumbingImages/m5.webp";
import image5 from "../../../assets/plumbingImages/pi5.jpg";
import image6 from "../../../assets/plumbingImages/pi6.jpg";

const PlumbingImages = () => {
  return (
    <div className="container mx-auto px-4 py-8 relative">
      {/* Grid Container */}
      <div className="grid grid-cols-3 grid-rows-2 gap-6 h-110">
        {/* Image 1 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={image1}
            alt="Plumbing Work 1"
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 2 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={image2}
            alt="Plumbing Work 2"
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 3 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={image3}
            alt="Plumbing Work 3"
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 4 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={image4}
            alt="Plumbing Work 4"
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 5 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={image5}
            alt="Plumbing Work 5"
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Image 6 */}
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={image6}
            alt="Plumbing Work 6"
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Middle Link (Positioned Absolutely) */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Link
          to="/gallery" // Replace with your gallery route
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-center"
        >
          View Some Works
        </Link>
      </div>
    </div>
  );
};

export default PlumbingImages;