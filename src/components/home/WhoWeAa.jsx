import BoreholeImage from "../../assets/whoWeAreImages/borehole-drilling.jpeg";
import FenceImage from "../../assets/whoWeAreImages/efence.jpg";
import { MdAddIcCall } from "react-icons/md";
import PlumberImage from "../../assets/whoWeAreImages/Herzing-Image-Red-Seal-Future-Plumbers-and-HVAN-Techs-3.jpg";
import { Link } from "react-router-dom";

const WhoWeAa = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      {/* Text Content */}
      <div className="flex flex-col justify-center space-y-6">
        <h4 className="text-lg font-bold text-blue-600">Quality Assurance</h4>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          We Provide AquaBarrier Solutions
        </h2>
        <h3 className="text-xl font-bold text-gray-600"> {/* Boldened h3 */}
          We provide the best solutions for home and institutions
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          At Sky Aqua, we pride ourselves on being your trusted partner for
          comprehensive and innovative solutions. With years of experience and a
          proven track record, we specialize in delivering reliable and
          sustainable systems tailored to your unique needs. Our expertise ensures
          that your home, business, or community is equipped with the best
          solutions for resource management and security, empowering you to
          thrive in a safe and sustainable environment.
        </p>
        <div className="flex items-center space-x-6"> {/* Increased space */}
          <Link to="contact">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 cursor-pointer"> {/* Added cursor-pointer */}
              Get in Touch
            </button>
          </Link>
          <span className="flex items-center space-x-2 text-gray-700">
            <MdAddIcCall className="w-6 h-6" />
            <p className="text-lg">0592728931</p>
          </span>
        </div>
      </div>

      {/* Images */}
      <div className="grid grid-rows-3 gap-4">
        <img
          src={BoreholeImage}
          alt="Borehole image"
          className="w-full h-48 object-cover rounded-lg shadow-lg"
        />
        <img
          src={FenceImage}
          alt="Electric fence image"
          className="w-full h-48 object-cover rounded-lg shadow-lg"
        />
        <img
          src={PlumberImage}
          alt="Plumber image"
          className="w-full h-48 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default WhoWeAa;