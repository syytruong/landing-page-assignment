import React, { useState } from 'react';
import Header from './Header';
import MainContent from './MainContent';
import EmailModal from './EmailModal';
import { useHistory } from 'react-router-dom';

const FirstLandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailSubmit = (email) => {
    history.push(`/2nd-landing-page?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="bg-white min-h-screen">
      <Header openModal={openModal} />
      <MainContent openModal={openModal} />
      {isModalOpen && (
        <EmailModal closeModal={closeModal} onSubmit={handleEmailSubmit} />
      )}
    </div>
  );
};

export default FirstLandingPage;
