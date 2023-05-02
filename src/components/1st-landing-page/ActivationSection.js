import React from 'react';
import { FiSmartphone, FiDownload } from 'react-icons/fi';
import { BsGlobeEuropeAfrica } from 'react-icons/bs';

const ActivationSection = ({ openModal }) => {
  return (
    <div className="py-8">
      {/* Mobile view */}
      <div className="block lg:hidden text-center">
        <div className="flex items-center justify-center">
          <FiSmartphone className="text-xl" />
          <h2 className="text-xl font-semibold ml-2">Mobile Activation</h2>
        </div>
        <button className="bg-green-700 text-white px-12 py-2 rounded mt-4 flex items-center justify-center mx-auto">
          <FiDownload />
          <span className="ml-2" onClick={openModal}>Continue</span>
        </button>
        <div className="mt-4 flex items-center justify-center">
          <span className="bg-green-500 rounded-full h-2 w-2 mr-2"></span>
          <span className="text-sm">High speed &amp; Unlimited</span>
        </div>
      </div>

      {/* Laptop view */}
      <div className="hidden lg:flex items-center justify-center">
        <div className="text-start flex items-center w-48">
          <BsGlobeEuropeAfrica className="text-5xl text-cyan-600 text-blue" />&nbsp;
          <h2 className="text-xl text-cyan-600 font-semibold">Online<br /><span className="text-cyan-800">Activation</span></h2>
        </div>
        <div className="vertical-separator"></div>
        <div className="flex flex-col items-center w-48">
          <button className="bg-green-700 hover:bg-green-600 text-white px-12 py-2 rounded flex items-center">
            <FiDownload />
            <span className="ml-2" onClick={openModal}>Continue</span>
          </button>
          <div className="mt-2 flex items-center">
            <span className="bg-green-500 rounded-full h-2 w-2 mr-2"></span>
            <span className="text-xs">High speed &amp; Unlimited</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivationSection;
