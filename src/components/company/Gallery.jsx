import { useState } from "react";
import Navbar from "../home/navbar/Navbar";
import imagesArray from "../../galleryData";
import Footer from "../home/Footer";

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(8);
  const [selectedImage, setSelectedImage] = useState(null); // State to track the selected image

  // Function to load more images
  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 8);
  };

  // Function to open the modal with the clicked image
  const openModal = (image) => {
    setSelectedImage(image);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Navbar />

      {/* Gallery Header */}
      <div className="bg-blue-50 py-12 text-center mt-30">
        <h1 className="text-4xl font-bold text-blue-900">View Some of Our Works</h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore our collection of stunning images and descriptions.
        </p>
      </div>

      {/* Image Gallery */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {imagesArray.slice(0, visibleImages).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(item)} // Open modal on click
            >
              <img
                src={item.image}
                alt={item.description}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-lg text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleImages < imagesArray.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMoreImages}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              View More
            </button>
          </div>
        )}
      </div>

      {/* Modal for Selected Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full">
            <img
              src={selectedImage.image}
              alt={selectedImage.description}
              className="w-full h-auto max-h-[80vh] object-contain rounded-t-lg"
            />
            <div className="p-4">
              <p className="text-lg text-gray-700">{selectedImage.description}</p>
            </div>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      <div className="mt-20">
        <Footer />

      </div>
    </div>
  );
};

export default Gallery;