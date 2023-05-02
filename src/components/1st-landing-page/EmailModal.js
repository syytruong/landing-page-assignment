import React, { useState } from 'react';
import { RiCloseLine, RiMailLine } from 'react-icons/ri';

const EmailModal = ({ closeModal, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleContinue = () => {
    if (isValidEmail(email)) {
      setError('');
      onSubmit(email);
    } else {
      setError('Invalid email format');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-60 pt-4 sm:items-center">
      <div className="w-full max-w-lg p-4 rounded shadow-lg relative lg:flex lg:max-w-3xl">
      <div className="lg:flex lg:h-full lg:bg-cyan-800">

        {/* Laptop screen first part */}
        <div className="lg:w-1/2 lg:flex lg:flex-col lg:h-full">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-2 right-2 bg-gray-300 rounded-full p-1 hover:bg-gray-400 lg:fixed lg:top-4 lg:right-4 lg:block"
          >
            <RiCloseLine className="text-xl" />
          </button>

          {/* Header */}
          <div className="bg-cyan-800 px-4 py-2 rounded-t lg:rounded-t-none lg:rounded-l lg:flex lg:items-center lg:justify-center">
            <div>
              <h2 className="text-white text-left text-lg lg:text-center">Get Access to your content</h2>
              <h3 className="text-white text-left font-semibold lg:text-center">3 Easy Steps</h3>
            </div>
          </div>

          {/* Steps */}
          <div className="bg-white p-4 relative lg:bg-cyan-800 flex flex-col h-full">
            <div className="grid grid-rows-3 gap-4 h-full">
              <div className="flex items-center">
                <div className="w-9 h-9 bg-cyan-800 text-white text-center rounded-full flex items-center justify-center lg:text-cyan-800 lg:bg-white">
                  1
                </div>
                <span className="ml-4 text-cyan-800 font-semibold lg:text-white">Create your Free Account</span>
              </div>
              <div
                className="absolute left-8 w-0.5 bg-gray-300 h-4 lg:bg-cyan-700 dash-one"
                style={{ top: '3.3rem' }}
              ></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-300 text-gray-800 text-center rounded-full flex items-center justify-center lg:text-white lg:bg-cyan-700">
                  2
                </div>
                <span className="ml-4 text-gray-400 lg:text-gray-100">Verify your Account</span>
              </div>
              <div
                className="absolute left-8 w-0.5 bg-gray-300 lg:bg-cyan-700 h-6 dash-two"
                style={{ top: '6.5rem' }}
              ></div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-300 text-gray-800 text-center rounded-full flex items-center justify-center lg:text-white lg:bg-cyan-700">
                  3
                </div>
                <span className="ml-4 text-gray-400 lg:text-gray-100">Get Access to your content</span>
              </div>
            </div>
            <div className="flex-grow lg:bg-cyan-800"></div>
          </div>
        </div>

        {/* Laptop screen Second part */}
        <div className="bg-gray-200 p-4 relative lg:w-1/2 lg:bg-white lg:flex lg:flex-col lg:h-full">
          {/* Title */}
          <h2 className="text-cyan-800 hidden text-2xl text-center font-semibold mb-4 lg:block lg:text-cyan-800">
            Create your Free Account
          </h2>

          {/* Register part */}
          <div className="bg-gray-200 p-4 relative lg:bg-white lg:h-full">
            <div className="h-full flex flex-col justify-between">
              <div className="relative h-14 w-full">
                <RiMailLine className="absolute text-cyan-900 text-xl top-4 left-3" />
                <input
                  type="email"
                  className="h-full w-full pl-10 border border-gray-300 rounded"
                  placeholder="Fill in your email"
                  onChange={(e) => handleEmailChange(e)}
                />
              </div>
              {error?.length ? <span className="text-xs text-red-500">{error}</span> : null}
              <button
                className="bg-green-600 text-white font-semibold py-2 w-full rounded mt-4"
                onClick={handleContinue}
              >
                Continue
              </button>
              <p className="text-xs text-gray-400 mt-2 text-center w-full">
                By clicking on "Continue", you agree with the{' '}
                <span className="underline">Terms & Conditions</span> and the{' '}
                <span className="underline">Privacy Policy</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
};

export default EmailModal;