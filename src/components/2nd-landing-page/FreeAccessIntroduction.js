import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const FreeAccessIntroduction = () => {
  return (
    <div className="bg-gray-300 border-t border-b border-gray-400 py-4 px-4">
      <div className="flex justify-between items-center">
        <span className="text-black font-semibold">100% FREE MEMBERSHIP</span>
        <span className="text-green-500 font-bold">€ 0.00</span>
      </div>
      <div className="text-black mt-2">
        <span>Verify Your Account and</span>
        <span className="text-green-500 font-bold"> Get Access For Free</span>
      </div>
      <div className="hidden lg:flex items-center mt-2">
        {[...Array(4)].map((_, index) => (
          <BsStarFill key={index} className="text-yellow-500 mr-1" />
        ))}
        <BsStarHalf className="text-yellow-500" />
        <span className="ml-2 text-sm">Based on 194,338 user reviews</span>
      </div>
    </div>
  );
};

export default FreeAccessIntroduction;