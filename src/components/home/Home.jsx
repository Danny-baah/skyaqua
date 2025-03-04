
import Navbar from "./navbar/Navbar";
import Welcome from "./Welcome";
import WhoWeAa from "./WhoWeAa";
import Services from "./Services";
import CoreValues from "./CoreValues";
import Statements from "./Statements";
import Reason from "./Reason";
import LinkToContact from "./LinkToContact";
import Footer from "./Footer";

const Home = () => {
  
  

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
      <Navbar />
      <Welcome  />
          <div className="mt-10">
            <WhoWeAa />
          </div>
          <div className="mt-30">
            <Services />
          </div>
          <CoreValues />
          <Statements />
          <Reason />
          <LinkToContact />
          <Footer />
    </div>
  );
};

export default Home;