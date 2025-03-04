import Navbar from "../../home/navbar/Navbar";
import ElectricFenceWelcome from "./ElectricFenceWelcome";
import ElectricFenceHeroSection from "./ElectricFenceHeroSection";
import ElectricServices from "./ElectricServices";
import ElectricConclussion from "./ElectricConclussion";
import Footer from "../../home/Footer";

const ElectricFence = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <ElectricFenceWelcome />
      <ElectricFenceHeroSection />
      <ElectricServices />
      <ElectricConclussion />
     <div className="mt-20">
     <Footer />
     </div>

    </div>
  );
};

export default ElectricFence;