import Navbar from "../home/navbar/Navbar";
import contactImage from "../../assets/contactImages/contact.jpg";
import womanImage from "../../assets/contactImages/pngwing.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaLinkedin, FaSquareTwitter } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import Footer from "../home/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      {/* First section with full-width image and overlay text */}
      <div className="relative w-full overflow-hidden mt-10">
        <img
          src={contactImage}
          alt="Contact background"
          className="w-full blur-[2px] object-cover h-[300px]" // Reduced blur
        />
        <h4 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold text-center z-10">
          Contact Us
        </h4>
      </div>

      {/* Second section with centered content and side margins */}
      <div className="max-w-6xl mx-auto px-4 mt-12"> {/* Added margin-top and side padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input form on the left */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Have Questions?</h1>
            <p className="text-gray-600 mb-6">Get in touch!</p>
            <form>
              <div className="flex gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <input
                type="tel"
                placeholder="Telephone Number"
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded-lg mb-4 min-h-[100px]"
              />
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Reach To Us
              </button>
            </form>
          </div>

          {/* Image on the right */}
          <div className="relative">
            <img
              src={womanImage}
              alt="Woman working"
              className="w-full h-auto brightness-75 rounded-lg"
            />
            {/* Email and socials under the image */}
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Gmail</h4>
              <div className="flex items-center gap-2 mb-6">
                <MdOutlineEmail className="text-2xl text-gray-600" />
                <p className="text-gray-600">skyaqua@gmail.com</p>
              </div>

              <h4 className="text-xl font-semibold text-gray-800 mb-2">Socials</h4>
              <div className="flex gap-4">
                <FaFacebookF className="text-2xl text-blue-600 cursor-pointer" />
                <FaLinkedin className="text-2xl text-blue-800 cursor-pointer" />
                <FaSquareTwitter className="text-2xl text-sky-500 cursor-pointer" />
                <RiWhatsappFill className="text-2xl text-green-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
     <div className="mt-40">
     <Footer />
     </div>
    </div>
  );
};

export default Contact;