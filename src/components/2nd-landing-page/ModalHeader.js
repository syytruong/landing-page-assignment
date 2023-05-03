import React from 'react';
import { RiShieldCheckLine } from 'react-icons/ri';

const ModalHeader = () => {
  return (
    <div className="flex justify-center items-center py-2 px-4 bg-green-700">
      <RiShieldCheckLine className="text-white mr-2" />
      <span className="text-white font-semibold">Secure & TLS Encrypted Verification</span>
    </div>
  );
};

export default ModalHeader;