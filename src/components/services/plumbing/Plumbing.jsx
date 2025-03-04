import { useState, useEffect } from "react";
import Navbar from "../../home/navbar/Navbar";
import PlumbingHeroSection from "./PlumbingHeroSection";
import Experience from "./Experience";
import Services from "./Services";
import Promise from "./Promise";
import PlumbingImages from "./PlumbingImages";
import Footer from "../../home/Footer";
import Typewriter from "react-typewriter-effect";

const Plumbing = () => {
  const [showTypewriter, setShowTypewriter] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTypewriter(false); // Remove text
      setTimeout(() => {
        setShowTypewriter(true); // Restart typing
      }, 1000); // Small delay before typing starts again
    }, 5000); // Time before erasing starts (5s after full text is typed)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className="flex justify-center items-center h-20 bg-blue-50 mt-40">
        <h1 className="text-4xl font-bold text-blue-600">
          {showTypewriter && (
            <Typewriter
              text="Sky Aqua Plumbing Services"
              cursorColor="blue"
              typeSpeed={80}
              eraseSpeed={50}
              cursorBlinking={true}
            />
          )}
        </h1>
      </div>

      {/* Hero Section */}
      <div>
        <PlumbingHeroSection />
      </div>

      {/* Other Sections */}
      <div>
        <Experience />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Promise />
      </div>
      <div>
        <PlumbingImages />
      </div>

      {/* Footer */}
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Plumbing;
