import React from 'react';
import { IoPersonCircleOutline, IoSearch } from 'react-icons/io5';

const Header = () => {
  return (
    <header className="bg-gray-200 py-4">
      <div className="container mx-auto px-4 flex justify-end">
        <IoPersonCircleOutline className="text-2xl text-gray-700 mr-4" />
        <IoSearch className="text-2xl text-gray-700" />
      </div>
    </header>
  );
};

export default Header;
