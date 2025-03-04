import welcomeImage from "../../../assets/boreholeImages/introImage1.jpg";

const Welcome = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-16 py-12 bg-gray-50 mt-30">
      {/* Left Section (Text) */}
      <div className="relative">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Borehole Drilling Services @ SkyAqua
        </h1>
        <h4 className="text-lg text-gray-600 mt-2">
          We provide reliable and efficient drilling solutions for homes, businesses, and industries.
        </h4>
        <p className="text-gray-700 mt-4">
          Whether you need a sustainable water source for your home, business, or industrial project, 
          our expert team is here to deliver top-quality solutions.
        </p>

        {/* Small Blue Card/Design */}
      </div>

      {/* Right Section (Image) */}
      <div>
        <img
          src={welcomeImage}
          alt="Borehole Drilling"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Welcome;
