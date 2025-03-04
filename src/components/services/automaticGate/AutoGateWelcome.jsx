
import { Link } from "react-router-dom";
import autoGateImage from "../../..//assets/automaticGateImages/slate-automatic-driveway-gate-opening-1.jpg";

const AutoGateWelcome = () => {
  return (
    <section className="bg-gray-100 py-16 mt-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 lg:px-12">
        
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-black-600 mb-4">
            Automatic Gate Installation by <span className="text-blue-600">SkyAqua</span>
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Secure, stylish, and hassle-free gate automation. SkyAqua specializes in  
            high-quality automatic gate installations that enhance security, convenience,  
            and the overall value of your property.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Whether you need a **sliding**, **swing**, or **overhead gate**, we provide  
            expert solutions tailored to your needs. Enjoy seamless access control with  
            modern automation technology.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg 
            shadow-md hover:bg-blue-700 transition duration-300"
          >
            Get a Free Quote
          </Link>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 ">
          <img
            src={autoGateImage}
            alt="Automatic Gate Installation"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default AutoGateWelcome;
