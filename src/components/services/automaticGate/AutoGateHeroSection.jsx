

const AutoGateHeroSection = () => {
  // Installation steps data
  const steps = [
    { number: 1, title: "Consultation & Site Assessment", description: "We assess your property to determine the best gate type and automation system." },
    { number: 2, title: "Design & Customization", description: "We create a gate design that matches your style, security, and functional needs." },
    { number: 3, title: "Installation & Setup", description: "Our team installs the gate with precision, ensuring smooth operation and durability." },
    { number: 4, title: "Testing & Final Adjustments", description: "We thoroughly test the system, make adjustments, and provide usage guidance." },
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 lg:px-12">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-black mb-10">Our Installation Process</h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="bg-white p-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
            >
              {/* Circle Number */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-600 text-white text-2xl font-bold rounded-full mb-4 transition-colors duration-300 hover:bg-green-600">
                {step.number}
              </div>
              {/* Step Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              {/* Step Description */}
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoGateHeroSection;
