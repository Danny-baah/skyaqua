import emergencyIcon from "../../../assets/plumbingImages/emergency.jpg";
import drainIcon from "../../../assets/plumbingImages/drain.jpg";
import leakageIcon from "../../../assets/plumbingImages/leakage.png";
import maintainIcon from "../../../assets/plumbingImages/maintainance.png";

const Services = () => {
  return (
    <div className="bg-white py-16 mt-12"> {/* Added margin top */}
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Centered h2 */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Our Services
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* First Column (Text Section) */}
          <div className="space-y-6">
            <h4 className="text-blue-600 text-lg font-semibold">
              EVERY PROBLEM, PROFESSIONAL SOLUTION
            </h4>
            <h1 className="text-4xl font-bold text-gray-900">
              A Complete Range of Plumbing Services
            </h1>
            <p className="text-lg text-gray-600">
              From leak detection to full-system installation and maintenance, our expert team does it all with precision and care.
            </p>
          </div>

          {/* Second Column (Services Section) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Emergency Plumbing */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                <img
                  src={emergencyIcon}
                  alt="Emergency Plumbing"
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Emergency Plumbing
              </h4>
              <p className="text-gray-600">
                Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec…
              </p>
            </div>

            {/* Drain Cleaning */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                <img
                  src={drainIcon}
                  alt="Drain Cleaning"
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Drain Cleaning
              </h4>
              <p className="text-gray-600">
                Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec…
              </p>
            </div>

            {/* Leakage Repair */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                <img
                  src={leakageIcon}
                  alt="Leakage Repair"
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Leakage Repair
              </h4>
              <p className="text-gray-600">
                Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec…
              </p>
            </div>

            {/* Maintenance */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 group">
              <div className="w-12 h-12 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                <img
                  src={maintainIcon}
                  alt="Maintenance"
                  className="w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Maintenance
              </h4>
              <p className="text-gray-600">
                Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec…
              </p>
            </div>
          </div>
        </div>

        {/* And Many More */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            And Many More...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;