
const Statements = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Statement Card */}
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto transition-colors duration-300 hover:bg-blue-50">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h1>
            <p className="text-gray-600">
              At Sky Aqua, our mission is to provide innovative and sustainable
              water solutions that ensure access to clean, safe, and reliable
              water for communities and industries. We are committed to
              leveraging cutting-edge technology, ethical practices, and
              environmental stewardship to address global water challenges and
              improve quality of life.
            </p>
          </div>

          {/* Vision Statement Card */}
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto transition-colors duration-300 hover:bg-blue-50">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h1>
            <p className="text-gray-600">
              Our vision is to be a global leader in water resource management,
              pioneering solutions that harmonize human needs with the planet's
              well-being. We aspire to create a future where every drop of
              water is valued, conserved, and utilized efficiently, fostering
              a sustainable and thriving world for generations to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statements;