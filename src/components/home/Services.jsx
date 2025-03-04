import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import PlumbingLogo from "../../assets/servicesImages/avc8kye98.webp";
import WaterLogo from "../../assets/servicesImages/lovepik-water-splash-vector-png-image_401140889_wh1200.png";
import FenceLogo from "../../assets/servicesImages/77-771262_electric-fencing-electric-fence-icon-png.png";
import BoreHoleLogo from "../../assets/servicesImages/png-clipart-machine-boring-well-drilling-borehole-water-well-water-vehicle-crane-thumbnail.png";
import AutoGateLogo from "../../assets/servicesImages/pngtree-automatic-gate-barrier-image_2224188.jpg";

const Services = () => {
  return (
    <div className="bg-gray-100 py-8">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h5 className="text-lg text-gray-600">Our Services</h5>
        <h1 className="text-3xl font-bold text-gray-800">24/7 Operation</h1>
      </div>

      {/* Grid of Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-4">
        {/* Plumbing Card */}
        <Link
          to="/plumbing" // Replace with your desired route
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center h-48 hover:-translate-y-2"
        >
          <img src={PlumbingLogo} alt="Plumbing" className="w-full h-24 object-contain" />
          <h4 className="text-center text-xl font-semibold mt-4">Plumbing</h4>
        </Link>

        {/* Water Treatment Card */}
        <Link
          to="/water" // Replace with your desired route
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center h-48 hover:-translate-y-2"
        >
          <img src={WaterLogo} alt="Water Treatment" className="w-full h-24 object-contain" />
          <h4 className="text-center text-xl font-semibold mt-4">Water Treatment</h4>
        </Link>

        {/* Electric Fence Installation Card */}
        <Link
          to="/efence" // Replace with your desired route
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center h-48 hover:-translate-y-2"
        >
          <img src={FenceLogo} alt="Electric Fence Installation" className="w-full h-24 object-contain" />
          <h4 className="text-center text-xl font-semibold mt-4">Electric Fence Installation</h4>
        </Link>

        {/* Borehole Drilling Card */}
        <Link
          to="/borehole" // Replace with your desired route
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center h-48 hover:-translate-y-2"
        >
          <img src={BoreHoleLogo} alt="Borehole Drilling" className="w-full h-24 object-contain" />
          <h4 className="text-center text-xl font-semibold mt-4">Borehole Drilling</h4>
        </Link>

        {/* Automatic Gate Installation Card */}
        <Link
          to="/autogate" // Replace with your desired route
          className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center justify-center h-48 hover:-translate-y-2"
        >
          <img src={AutoGateLogo} alt="Automatic Gate Installation" className="w-full h-24 object-contain" />
          <h4 className="text-center text-xl font-semibold mt-4">Automatic Gate Installation</h4>
        </Link>
      </div>
    </div>
  );
};

export default Services;