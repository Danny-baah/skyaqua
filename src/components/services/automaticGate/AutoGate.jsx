import Navbar from "../../home/navbar/Navbar"
import AutoGateWelcome from "./AutoGateWelcome"
import Footer from "../../home/Footer"
import AutoGateHeroSection from "./AutoGateHeroSection"
import Repair from "./Repair"
import AutoConclusion from "./AutoConclusion"

const AutoGate = () => {
  return (
    <div>
        <Navbar/>
        <AutoGateWelcome/>
        <AutoGateHeroSection/>
        <Repair/>
        <AutoConclusion/>

        <Footer/>
        
    </div>
  )
}

export default AutoGate