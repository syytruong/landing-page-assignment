import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const Header = () => {
  return (
    <div className="flex justify-end items-center py-4 lg:py-8 px-4 bg-gray-200 pr-2 w-full lg:mb-4">
      <BsFillPatchCheckFill className="text-cyan-900 text-xl lg:hidden" />
    </div>
  );
};

export default Header;
