import React, { useState } from "react";
import WaterAnimiBg from "../../assets/ReasonImages/water animi1.gif";

const Reason = () => {
  // State to manage visibility of each point's content
  const [activeKey, setActiveKey] = useState(null);

  // Function to toggle visibility
  const toggleDetails = (key) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };

  return (
    <div
      className="relative py-12 px-4" // Added px-4 for side spacing
      style={{
        backgroundImage: `url(${WaterAnimiBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Centered Heading */}
      <h1 className="text-center text-4xl font-bold text-white mb-8">
        Why Choose Sky Aqua?
      </h1>

      {/* Left-Aligned Dark Card with Reduced Opacity */}
      <div className="ml-8 bg-black bg-opacity-50 rounded-lg p-8 max-w-lg">
        {/* Increased Font Size for h1 */}
        <h1 className="text-3xl font-bold text-white mb-8">
          What Sets Us Apart
        </h1>

        {/* List of Reasons */}
        <ul className="space-y-6">
          {/* Innovative Water Solutions */}
          <li>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleDetails("innovative")}
            >
              <h4 className="text-xl font-semibold text-white">
                Innovative Water Solutions
              </h4>
              <span className="text-white text-2xl">
                {activeKey === "innovative" ? "-" : "+"}
              </span>
            </div>
            {activeKey === "innovative" && (
              <p className="mt-2 text-gray-200">
                Sky Aqua leverages cutting-edge technology to provide advanced
                and efficient water solutions. From smart water management
                systems to sustainable purification methods, we ensure that our
                clients receive the most innovative and effective solutions
                tailored to their needs.
              </p>
            )}
            <hr className="border-gray-600 my-4" />
          </li>

          {/* Commitment to Sustainability */}
          <li>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleDetails("sustainability")}
            >
              <h4 className="text-xl font-semibold text-white">
                Commitment to Sustainability
              </h4>
              <span className="text-white text-2xl">
                {activeKey === "sustainability" ? "-" : "+"}
              </span>
            </div>
            {activeKey === "sustainability" && (
              <p className="mt-2 text-gray-200">
                We prioritize environmental stewardship in everything we do. Our
                solutions are designed to conserve water, reduce waste, and
                minimize environmental impact, helping clients contribute to a
                greener and more sustainable future.
              </p>
            )}
            <hr className="border-gray-600 my-4" />
          </li>

          {/* Reliable and Safe Water Access */}
          <li>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleDetails("reliable")}
            >
              <h4 className="text-xl font-semibold text-white">
                Reliable and Safe Water Access
              </h4>
              <span className="text-white text-2xl">
                {activeKey === "reliable" ? "-" : "+"}
              </span>
            </div>
            {activeKey === "reliable" && (
              <p className="mt-2 text-gray-200">
                Sky Aqua ensures access to clean, safe, and reliable water for
                communities and industries. Our systems are rigorously tested and
                maintained to deliver high-quality water that meets global safety
                standards.
              </p>
            )}
            <hr className="border-gray-600 my-4" />
          </li>

          {/* Expertise and Experience */}
          <li>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleDetails("expertise")}
            >
              <h4 className="text-xl font-semibold text-white">
                Expertise and Experience
              </h4>
              <span className="text-white text-2xl">
                {activeKey === "expertise" ? "-" : "+"}
              </span>
            </div>
            {activeKey === "expertise" && (
              <p className="mt-2 text-gray-200">
                With years of experience in water resource management, our team
                of experts brings unparalleled knowledge and skills to every
                project. We provide customized solutions that address unique
                challenges and deliver long-term results.
              </p>
            )}
            <hr className="border-gray-600 my-4" />
          </li>

          {/* Cost-Effective Solutions */}
          <li>
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleDetails("costEffective")}
            >
              <h4 className="text-xl font-semibold text-white">
                Cost-Effective Solutions
              </h4>
              <span className="text-white text-2xl">
                {activeKey === "costEffective" ? "-" : "+"}
              </span>
            </div>
            {activeKey === "costEffective" && (
              <p className="mt-2 text-gray-200">
                Sky Aqua offers affordable and efficient water solutions without
                compromising on quality. Our systems are designed to reduce
                operational costs, save energy, and maximize resource
                utilization, providing excellent value for money.
              </p>
            )}
            <hr className="border-gray-600 my-4" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Reason;