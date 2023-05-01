import React from 'react';
import { BsGlobe } from 'react-icons/bs';
import { FiDownload } from 'react-icons/fi';
import { RiShieldCheckLine } from 'react-icons/ri';

const FeaturesSection = () => {
  return (
    <div>
      {/* Feature area */}
      <div className="bg-gray-300 py-8">
        <div className="w-full">
          {/* Desktop */}
          <div className="hidden lg:flex justify-between">
            {/* First section */}
            <div className="flex flex-col items-center w-1/3">
              <BsGlobe className="text-4xl" />
              <p className="mt-1 text-cyan-800">Global</p>
              <h2 className="font-semibold text-cyan-800">Access</h2>
            </div>

            <div className="border-l border-gray-400 self-center" style={{ borderWidth: '1.5px', height: '100px' }}></div>

            {/* Second section */}
            <div className="flex flex-col items-center w-1/3">
              <FiDownload className="text-4xl" />
              <h2 className="font-semibold mt-1 text-cyan-800">Unlimited Speed</h2>
              <p className="text-cyan-800">5TB of Cloud Space</p>
            </div>

            <div className="border-l border-gray-400 self-center" style={{ borderWidth: '1.5px', height: '100px' }}></div>

            {/* Third section */}
            <div className="flex flex-col items-center w-1/3">
              <RiShieldCheckLine className="text-4xl" />
              <h2 className="font-semibold mt-1 text-cyan-800">100% Secure</h2>
              <p className="text-cyan-800">Connection</p>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex flex-col lg:hidden items-center">
            <div className="flex flex-row justify-between w-full px-4">
              {/* Download section */}
              <div className="flex flex-col items-center">
                <FiDownload className="text-4xl" />
                <h2 className="font-semibold mt-1 text-cyan-800">Unlimited Speed</h2>
                <p className="text-cyan-800">5TB of Cloud Space</p>
              </div>
              {/* Shield section */}
              <div className="flex flex-col items-center">
                <RiShieldCheckLine className="text-4xl" />
                <h2 className="font-semibold mt-1 text-cyan-800">100% Secure</h2>
                <p className="text-cyan-800">Connection</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="hidden lg:block py-8">
        <h3 className="text-center text-cyan-800 text-md font-semibold">Get Access in Less than a Minute</h3>
        <div className="flex justify-center mt-6 items-center">
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full h-6 w-6 flex items-center justify-center">
              <span className="text-gray-400">1</span>
            </div>
            <p className="ml-2 text-gray-400">Create Account</p>
          </div>
          <span className="mx-6 text-xl text-gray-400">————</span>
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full h-6 w-6 flex items-center justify-center">
              <span className="text-gray-400">2</span>
            </div>
            <p className="ml-2 text-gray-400">Verify Account</p>
          </div>
          <span className="mx-6 text-xl text-gray-400">————</span>
          <div className="flex items-center">
            <div className="bg-gray-200 rounded-full h-6 w-6 flex items-center justify-center">
              <span className="text-gray-400">3</span>
            </div>
            <p className="ml-2 text-gray-400">Access Granted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
