
import { Link } from "react-router-dom";

const AutoConclusion = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 lg:px-12">
      <div className="container mx-auto text-center max-w-3xl">
        {/* Title */}
        <h2 className="text-4xl font-bold text-black mb-6">Enhance Security & Convenience with SkyAqua</h2>

        {/* Description */}
        <p className="text-gray-700 text-lg mb-6">
          Investing in an automatic gate is a step toward greater security, convenience, and property value. 
          At <span className="text-blue-600 font-semibold">SkyAqua</span>, we are committed to providing 
          **high-quality gate installation and repair services** that meet your needs.  
          Whether you need a new installation or a repair, we ensure a **smooth, professional experience** from start to finish.
        </p>

        <p className="text-gray-700 text-lg mb-6">
          Don't wait to upgrade your entrance with modern automation. Secure your home or business today!
        </p>

        {/* Call to Action */}
        <Link 
          to="/gallery" 
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md 
          hover:bg-blue-700 transition duration-300"
        >
          View some works
        </Link>
      </div>
    </section>
  );
};

export default AutoConclusion;
