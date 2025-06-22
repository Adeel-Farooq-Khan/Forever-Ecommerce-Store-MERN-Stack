import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-200">
      {/* Left side with text */}
      <div className="w-full sm:w-1/2 flex items-center justify-center">
        <div className="px-8 py-12 text-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 md:w-11 h-[2px] bg-gray-600"></div>
            <p className="text-sm font-medium md:text-base uppercase tracking-wider">
              Our Bestsellers
            </p>
          </div>

          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl loading-relaxed">
            Latest Arrivals
          </h1>

          <div className="flex items-center gap-3">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <div className="w-8 md:w-11 h-[2px] bg-gray-600"></div>
          </div>
        </div>
      </div>

      {/* Right side with image */}
      <div className="w-full sm:w-1/2 bg-pink-100">
        <img
          src={assets.hero_img}
          alt="Fashion model"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
