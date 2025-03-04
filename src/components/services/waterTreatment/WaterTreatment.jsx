import Navbar from "../../home/navbar/Navbar"
import WaterTreatmentWelcome from "./WaterTreatmentWelcome"
import WaterTreatmentHeroSection from "./WaterTreatmentHeroSection"
import WaterTreatmentServices from "./WaterTreatmentServices"
import WaterServicesConclusion from "./WaterServicesConclusion"
import Footer from "../../home/Footer"
const WaterTreatment = () => {
  return (
    <div>
        <Navbar />
        <div>
           <WaterTreatmentWelcome/>
        </div>
        <div>
          <WaterTreatmentHeroSection/>
        </div>
        <div>
          <WaterTreatmentServices/>
        </div>
        <div>
          <WaterServicesConclusion/>
        </div>
        <div className="mt-20">
          <Footer/>
        </div>
        
    </div>
  )
}

export default WaterTreatment