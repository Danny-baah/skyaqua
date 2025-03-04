
import {  Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/support/Contact";
import Borehole from "./components/services/borehole/Borehole";
import Plumbing from "./components/services/plumbing/Plumbing";
import AutoGate from "./components/services/automaticGate/AutoGate";
import ElectricFence from "./components/services/electricFence/ElectricFence";
import Team from "./components/company/Team";
import Gallery  from "./components/company/Gallery";
import WaterTreatment from "./components/services/waterTreatment/WaterTreatment";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/borehole" element={<Borehole />} />
        <Route path="/plumbing" element={<Plumbing />} />
        <Route path="/autogate" element={<AutoGate />} />
        <Route path="/efence" element={<ElectricFence />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/water" element={<WaterTreatment />} />

      </Routes>
  );
};

export default App;
