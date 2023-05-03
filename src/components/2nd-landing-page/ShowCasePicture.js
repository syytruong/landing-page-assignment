import React from 'react';
import showCaseImage from '../../assets/images/show-case.png';

const ShowCasePicture = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <img src={showCaseImage} alt="Show case" className="px-12 pt-8" />
    </div>
  );
};

export default ShowCasePicture;