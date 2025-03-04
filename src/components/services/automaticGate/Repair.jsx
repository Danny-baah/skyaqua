
import repairImage from "../../../assets/automaticGateImages/m1.webp";
import { Link } from "react-router-dom";

const Repair = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold text-black mb-6">Automatic Gate Repair Services</h2>
          <p className="text-gray-700 text-lg mb-4">
            At <span className="text-blue-600 font-semibold">SkyAqua</span>, we provide fast and reliable automatic gate repairs to keep your system running smoothly.
            Whether it's a motor issue, sensor malfunction, or structural damage, our expert technicians are ready to assist.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Common Issues We Fix:</h3>
          <ul className="list-disc list-inside text-gray-700 text-lg mb-6">
            <li>Gate not opening or closing properly</li>
            <li>Remote control or keypad failures</li>
            <li>Motor and gearbox malfunctions</li>
            <li>Damaged tracks or misalignment</li>
            <li>Sensor and safety mechanism issues</li>
            <li>Power supply and wiring faults</li>
          </ul>

          {/* Call to Action */}
          <Link 
            to="/contact" 
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md 
            hover:bg-blue-700 transition duration-300"
          >
            Request a Repair
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img 
            src={repairImage} 
            alt="Engineer repairing an automatic gate"
            className="w-full max-h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Repair;
