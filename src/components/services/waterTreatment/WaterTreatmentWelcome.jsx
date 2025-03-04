import watergifImage from "../../../assets/waterTreatmentImage/glass-water-macro-shot_53876-18223.avif";
import qualityIcon from "../../../assets/waterTreatmentImage/pngtree-quality-line-icon-png-image_6615384.png";
import accurateIcon from "../../../assets/waterTreatmentImage/accuracy-of-statistics-1839186-1560618.webp";
import trustIcon from "../../../assets/waterTreatmentImage/trust.png";


const WaterTreatmentWelcome = () => {
  return (
    <div className="bg-gray-100 p-6 flex justify-center mt-35"> {/* Grey background added here */}
      <div className="max-w-4xl w-full">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-[400px]">
          {/* Text Content */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-blue-600">Water Treatment with Accuracy</h4>
            <h1 className="text-4xl font-bold text-gray-900">
              Ready <br /> to <span className="text-blue-600">Help</span>
              <br /> You
            </h1>
            <p className="text-gray-600">
              At SkyAqua, we specialize in advanced water treatment solutions tailored to your needs,
              ensuring clean, safe, and sustainable water for your home or business.
            </p>
          </div>

          {/* Image */}
          <img
            src={watergifImage}
            alt="Water Treatment"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-3 gap-4 mt-8 relative -top-12">
          {/* Quality Icon */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center shadow-lg border border-gray-200 hover:-translate-y-2 transition-transform duration-300"> {/* Increased size */}
              <img src={qualityIcon} alt="Quality" className="w-12 h-12" /> {/* Increased icon size */}
              <h5 className="mt-2 text-sm font-semibold text-gray-700">Quality</h5> {/* Adjusted margin-top */}
            </div>
          </div>

          {/* High Accuracy Icon */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-32 h-32 bg-blue-600 rounded-full flex flex-col items-center justify-center shadow-lg hover:-translate-y-2 transition-transform duration-300"> {/* Increased size */}
              <img src={accurateIcon} alt="High Accuracy" className="w-12 h-12" /> {/* Increased icon size */}
              <h5 className="mt-2 text-sm font-semibold text-white">High Accuracy</h5> {/* Adjusted margin-top */}
            </div>
          </div>

          {/* Trustworthy Icon */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center shadow-lg border border-gray-200 hover:-translate-y-2 transition-transform duration-300"> {/* Increased size */}
              <img src={trustIcon} alt="Trustworthy" className="w-12 h-12" /> {/* Increased icon size */}
              <h5 className="mt-2 text-sm font-semibold text-gray-700">Trustworthy</h5> {/* Adjusted margin-top */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterTreatmentWelcome;