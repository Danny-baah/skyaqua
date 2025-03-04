import plumberManImage from "../../../assets/plumbingImages/m1.webp";
import intergrityIcon from "../../../assets/plumbingImages/intergrity.jpg";

const Promise = () => {
  return (
    <div className="bg-blue-50 py-16"> {/* Very light blue background */}
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16"> {/* Increased grid gap */}
          {/* First Column (Image Section) */}
          <div className="relative">
            {/* Main Image */}
            <img
              src={plumberManImage}
              alt="Plumber Man"
              className="w-full h-96 rounded-lg shadow-lg object-cover" 
            />

            {/* Small Blue Card at Bottom-Left */}
            <div className="absolute -bottom-4 -left-4 bg-blue-600 p-4 rounded-lg shadow-md w-48">
              <p className="text-white text-sm font-semibold">
                Trusted Plumbing Experts
              </p>
              {/* Tip */}
              <div className="absolute -bottom-2 left-6 w-4 h-4 bg-blue-600 transform rotate-45"></div>
            </div>

            {/* Circular Icon at Top-Right */}
            <div className="absolute top-4 -right-4 bg-blue-600 rounded-full p-3 shadow-md"> {/* Adjusted position */}
              <img
                src={intergrityIcon}
                alt="Integrity Icon"
                className="w-16 h-16 rounded-full" 
              />
            </div>
          </div>

          {/* Second Column (Text Section) */}
          <div className="space-y-6">
            <h4 className="text-blue-600 text-lg font-semibold">
              THE SKY AQUA PROMISE
            </h4>
            <h1 className="text-4xl font-bold text-gray-900">
              Excellence in Every Pipe and Joint
            </h1>
            <p className="text-lg text-gray-600">
              Our clients trust us for our unrivaled expertise, on-time service, and comprehensive care.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  <span className="text-white text-sm" aria-hidden="true">✔</span>
                </span>
                Water Heater Expertise
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  <span className="text-white text-sm" aria-hidden="true">✔</span>
                </span>
                Drain and Sewer Services
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  <span className="text-white text-sm" aria-hidden="true">✔</span>
                </span>
                Fixture Installations and Repairs
              </li>
              <li className="flex items-center">
                <span className="bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3">
                  <span className="text-white text-sm" aria-hidden="true">✔</span>
                </span>
                Routine Maintenance Plans
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promise;