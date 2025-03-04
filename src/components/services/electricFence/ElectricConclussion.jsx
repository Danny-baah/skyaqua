import { Link } from "react-router-dom";

const ElectricConclussion = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 lg:px-16 py-12 text-center bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Secure Your Property with a Reliable Electric Fence
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Whether you need to protect your farm, home, or business, our expert electric fence installation ensures safety, efficiency, and peace of mind.  
        Our durable and high-performance fencing solutions are customized to fit your specific needs.
      </p>
      <p className="text-lg text-gray-600 mb-6">
        Don't compromise on security—invest in a trusted fencing system today!
      </p>
      <Link
        to="/contact"
        className="inline-block bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Get a Free Quote
      </Link>
    </div>
  );
};

export default ElectricConclussion;
