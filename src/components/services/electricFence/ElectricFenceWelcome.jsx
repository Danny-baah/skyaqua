import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";



const ElectricFenceWelcome = () => {
  return (
    <div>
        <div className="text-center p-10 mt-30">
<h5 className="inline-block border border-black px-6 py-3 bg-white text-black font-semibold rounded-full">
  We provide the best
</h5>
<h1 className="text-5xl font-bold text-black mt-8">Electric Fence Installation</h1>
<p className="text-gray-600 mt-6 max-w-2xl mx-auto">
  Whether you need to protect your property, keep livestock within designated areas, or add an extra layer of security to your home or business, a properly installed electric fence is a smart investment.
</p>
<Link to="/contact">
<button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
  Contact Us
</button>
</Link>
<hr className="my-8 border-gray-300" />
<div className="flex justify-center items-center space-x-10 text-gray-700">
  <p className="flex items-center gap-3"><CheckCircle className="text-green-500" size={24} /> Certified Company</p>
  <p className="flex items-center gap-3"><CheckCircle className="text-green-500" size={24} /> Professional Staff</p>
  <p className="flex items-center gap-3"><CheckCircle className="text-green-500" size={24} /> Positive Reviews</p>
</div>
</div>
    </div>
  )
}

export default ElectricFenceWelcome

