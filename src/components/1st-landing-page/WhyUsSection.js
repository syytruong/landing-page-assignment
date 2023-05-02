import React from 'react';
import { RiCheckLine } from 'react-icons/ri';

const WhyUsSection = ({ openModal }) => {
  return (
    <div className="py-8">
      {/* Get Started Now button */}
      <div className="flex justify-center">
        <button
          onClick={openModal}
          className="bg-green-700 hover:bg-green-600 text-white font-bold py-4 px-12 rounded"
        >
          Get Started Now
        </button>
      </div>

      {/* High Speed & Unlimited text */}
      <div className="flex items-center justify-center mt-3">
        <div className="bg-green-500 rounded-full h-2 w-2 mr-2"></div>
        <p className="text-xs">High Speed & Unlimited</p>
      </div>

      {/* Title */}
      <div className="w-full flex justify-center mt-8">
        <h2 className="text-center text-cyan-800 text-4xl lg:w-96">
          Find out why people love our website
        </h2>
      </div>

      {/* Text lines */}
      <div className="mt-6 flex flex-col items-center text-gray-700 w-full">
        <div className="flex items-start lg:space-x-6 w-full px-4 md:justify-center">
          <div className="w-6">
            <RiCheckLine className="text-2xl text-green-700" />
          </div>
          <p className="text-left xl:text-center text-cyan-800">
            Global Access: From anywhere and in any device
          </p>
        </div>
        <div className="flex items-start lg:space-x-6 w-full px-4 md:justify-center">
          <div className="w-6">
            <RiCheckLine className="text-2xl text-green-700" />
          </div>
          <p className="text-left xl:text-center text-cyan-800">
            Your own space in the cloud: 5TB of Cloud Storage space included
          </p>
        </div>
        <div className="flex items-start lg:space-x-6 w-full px-4 md:justify-center">
          <div className="w-6">
            <RiCheckLine className="text-2xl text-green-700" />
          </div>
          <p className="text-left xl:text-center text-cyan-800">
            Unlimited Speed: No speed or transfer limits
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
