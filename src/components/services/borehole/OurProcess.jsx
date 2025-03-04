const OurProcess = () => {
    return (
      <div className="bg-blue-50 py-10 px-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
          Our Drilling Processes
        </h2>
  
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Site Assessment */}
          <div className="relative p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              1
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Site Assessment</h4>
            <p className="text-gray-700">
              We conduct a thorough evaluation to determine the best location for drilling.
            </p>
          </div>
  
          {/* Drilling */}
          <div className="relative p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              2
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Drilling</h4>
            <p className="text-gray-700">
              Using state-of-the-art equipment, we drill to the required depth with precision and
              efficiency.
            </p>
          </div>
  
          {/* Casing Installation */}
          <div className="relative p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              3
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Casing Installation</h4>
            <p className="text-gray-700">
              We install durable casings to protect the borehole and maintain water quality.
            </p>
          </div>
  
          {/* Testing and Development */}
          <div className="relative p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              4
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Testing and Development</h4>
            <p className="text-gray-700">
              We test the borehole to ensure optimal water flow and quality.
            </p>
          </div>
  
          {/* Completion */}
          <div className="relative p-6 hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              5
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Completion</h4>
            <p className="text-gray-700">
              Your borehole is ready for use, and we provide guidance on maintenance and next steps.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default OurProcess;