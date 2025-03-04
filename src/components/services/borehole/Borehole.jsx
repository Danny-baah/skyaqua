import Navbar from "../../home/navbar/Navbar"
import Welcome from "./Welcome"
import OurProcess from "./OurProcess"
import BoreholeServices from "./BoreholeServices"
import BoreholeConclusion from "./BoreholeConclusion"
import Footer from "../../home/Footer"
const Borehole = () => {
  return (
    <div>
        <Navbar />
        <div>
          <Welcome/>
        </div>
        <div>
          <OurProcess />
        </div>
        <div>
        <BoreholeServices />
        </div>
        <div className="mt-10">
        <BoreholeConclusion />
        </div>
        <div className="mt-20">
        <Footer  />
        </div>
       
    </div>
  )
}

export default Borehole