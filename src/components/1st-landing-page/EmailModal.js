import React from 'react';
import { RiCloseLine } from 'react-icons/ri';

const EmailModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-60 pt-4 sm:items-center">
      <div className="w-full max-w-lg p-4 rounded shadow-lg relative">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 bg-gray-300 rounded-full p-1 hover:bg-gray-400"
        >
          <RiCloseLine className="text-xl" />
        </button>

        {/* Header */}
        <div className="bg-cyan-800 px-4 py-2 rounded-t">
          <h2 className="text-white text-left text-lg">Get Access to your content</h2>
          <h3 className="text-white text-left font-semibold">3 Easy Steps</h3>
        </div>

        {/* Modal body */}
        <div className="bg-white p-4 relative">
          {/* Steps */}
          <div className="flex flex-col justify-between items-start h-36">
            <div className="flex items-center">
              <div className="w-9 h-9 bg-cyan-800 text-white text-center rounded-full flex items-center justify-center">
                1
              </div>
              <span className="ml-4 text-cyan-800 font-semibold">Create your Free Account</span>
            </div>
            <div className="absolute left-8 top-14 w-0.5 bg-gray-300 h-7"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-800 text-center rounded-full flex items-center justify-center">
                2
              </div>
              <span className="ml-4 text-gray-400">Verify your Account</span>
            </div>
            <div className="absolute left-8 w-0.5 bg-gray-300 h-6" style={{ top: '6.5rem' }}></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 text-gray-800 text-center rounded-full flex items-center justify-center">
                3
              </div>
              <span className="ml-4 text-gray-400">Get Access to your content</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EmailModal;
