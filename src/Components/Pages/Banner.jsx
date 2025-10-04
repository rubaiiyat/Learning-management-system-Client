import { Globe, Handshake, School } from "lucide-react";
import banner from "../../../src/assets/banner.jpg";
const Banner = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-start gap-10 w-full py-10">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Best platform for study in Abroad.
          </h1>
          <p className="text-sm md:text-base leading-relaxed">
            Studying abroad opens doors to world-class education, cultural
            immersion, and global networking. To help you navigate this journey,
            here are some of the best platforms for studying abroad:
          </p>
          <button className="bg-blue-200 px-6 py-3 rounded text-blue-600 mt-5 font-bold text-lg hover:bg-blue-600 hover:cursor-pointer hover:text-white transition duration-500">
            Get Inquiry
          </button>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-8">
            <div className="flex gap-3 items-center">
              <div className="bg-[#E7F6F8] p-3 rounded cursor-pointer">
                <School className="stroke-[#0697ad] w-10 h-10" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">400+</h1>
                <p className="text-gray-600">Universities</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="bg-purple-100 p-3 rounded cursor-pointer">
                <Globe className="stroke-purple-500 w-10 h-10" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">25+</h1>
                <p className="text-gray-600">Countries</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="bg-yellow-100 p-3 rounded cursor-pointer">
                <Handshake className="stroke-yellow-500 w-10 h-10" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">12+</h1>
                <p className="text-gray-600">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            className="h-auto object-cover rounded-lg shadow-lg"
            src={banner}
            alt="Study Abroad Banner"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
