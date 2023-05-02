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
        <div className="bg-white p-4">
          {/* Timeline Step 1 */}
          <div className="flex items-center">
            <div className="relative">
              <div className="bg-cyan-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                1
              </div>
              {/* Vertical dashed line */}
              <div className="border-l-2 border-solid border-cyan-800 h-8 w-0.5 absolute bottom-0 -mb-8 left-1/2 -ml-0.25" />
            </div>
            <h4 className="ml-4 text-cyan-800 font-semibold">Create your free account</h4>
          </div>

          {/* Timeline Step 2 */}
          <div className="flex items-center">
            <div className="relative">
              <div className="bg-gray-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
                2
              </div>
              {/* Vertical dashed line */}
              <div className="border-l-2 border-solid border-gray-300 h-8 w-0.5 absolute bottom-0 -mb-8 left-1/2 -ml-0.25" />
            </div>
            <h4 className="ml-4 text-gray-600 font-semibold">Verify your account</h4>
          </div>

          {/* Timeline Step 3 */}
          <div className="flex items-center">
            <div className="bg-gray-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">
              3
            </div>
            <h4 className="ml-4 text-gray-600 font-semibold">Get access to your content</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
