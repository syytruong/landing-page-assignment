import React, { useState } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import EmailModal from './EmailModal';

const FirstLandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white min-h-screen">
      <Header openModal={openModal} />
      <MainContent openModal={openModal} />
      {isModalOpen && <EmailModal closeModal={closeModal} />}
    </div>
  );
};

export default FirstLandingPage;
