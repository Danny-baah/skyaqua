import Navbar from "../home/navbar/Navbar";
import teamImage from "../../assets/teamImage/istockphoto-543041270-612x612.jpg";
import skyAquaTeam from "../../data";
import Footer from "../home/Footer";

const Team = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-96 flex items-center justify-center">
        {/* Background Image with Overlay */}
        <img
          src={teamImage}
          alt="Team Banner"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        {/* Text Overlay */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Meet Our Team
          </h1>
          <p className="text-xl text-white">
            The passionate individuals behind Sky Aqua
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="container mx-auto px-4 py-12">
        {/* First Team Member (Centered) */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-96 text-center">
            <img
              src={skyAquaTeam[0].image}
              alt={skyAquaTeam[0].name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-900">
                {skyAquaTeam[0].name}
              </h2>
              <p className="text-lg font-semibold text-gray-600">
                {skyAquaTeam[0].position}
              </p>
            </div>
          </div>
        </div>

        {/* Rest of the Team Members (Grid of 3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skyAquaTeam.slice(1).map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-70 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-900">
                  {member.name}
                </h2>
                <p className="text-lg font-semibold text-gray-600">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Team;