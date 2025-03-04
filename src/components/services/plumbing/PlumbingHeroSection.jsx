import plumberImage from "../../../assets/plumbingImages/m4.webp";

const PlumbingHeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
        {/* Image Section */}
        <div className="relative w-3/4 mx-auto lg:w-full">
          <img
            src={plumberImage}
            alt="Plumber fixing a toilet"
            className="w-full h-auto rounded-lg shadow-lg md:w-[90%]"
          />
          {/* Blue Background Box with Tip */}
          <div className="absolute -bottom-4 -left-4 bg-blue-600 p-4 rounded-lg shadow-md w-48">
            <p className="text-white text-sm font-semibold">
              Trusted Plumbing Experts
            </p>
            {/* Tip */}
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-blue-600 transform rotate-45"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-4">
          <h4 className="text-blue-600 text-lg font-semibold">
            Sky Aqua Enterprise
          </h4>
          <h1 className="text-5xl font-bold text-gray-900">
            Solving Your Plumbing Concerns <br />
            <span className="text-black-600">with Excellence</span>
          </h1>
          <p className="text-lg text-gray-600">
            Adaptable solutions for modern and traditional plumbing systems, designed with your home and business in mind.
          </p>
          {/* Button */}
          <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300 w-fit">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlumbingHeroSection;