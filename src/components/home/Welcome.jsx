import WelcomeImage from "../../assets/heroSectionImages/mm2.webp";

const Welcome = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Grid container for image and content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image section */}
        <div className="h-[400px] md:h-[500px] md:pt-10 md:w-[90%] md:pl-30 md:mt:20 overflow-hidden rounded-lg bg-white">
          <img
            src={WelcomeImage}
            alt="Welcome to Sky Aqua Enterprise"
            className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content section */}
        <div className="h-[500px] flex flex-col justify-center space-y-6 mt-8">
          {/* Typing animation for h1 */}
          <h1 className="text-3xl mt-15 md:text-5xl font-bold text-gray-800">
            Welcome To Sky Aqua <br /> Enterprise
          </h1>

          {/* Styled h4 */}
          <h4 className="text-xl text-gray-600 font-semibold">
            Sustainability, Innovation, and Integrity
          </h4>

          {/* Grid for stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="bg-gray-50 p-6 rounded-lg h-40 w-48 flex flex-col justify-center transition-all duration-300 hover:shadow-lg hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-800">100 +</h3>
              <p className="text-gray-600">Customers all over the country</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg h-40 w-48 flex flex-col justify-center transition-all duration-300 hover:shadow-lg hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-800">150 +</h3>
              <p className="text-gray-600">Projects under our management</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg h-40 w-48 flex flex-col justify-center transition-all duration-300 hover:shadow-lg hover:scale-105">
              <h3 className="text-2xl font-bold text-gray-800">24/7</h3>
              <p className="text-gray-600">Working Policies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Button section */}
      <div className="mt-8 flex justify-center">
        {/* Add a button here if needed */}
      </div>
    </div>
  );
};

export default Welcome;