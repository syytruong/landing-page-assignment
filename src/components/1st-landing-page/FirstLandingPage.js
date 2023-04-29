import React from 'react';
import Header from './Header';
import EmailModal from './EmailModal';
import MainContent from './MainContent';

const FirstLandingPage = () => {
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <MainContent openModal={openModal} />
      <EmailModal showModal={showModal} closeModal={closeModal} />
    </div>
  );
};

export default FirstLandingPage;
