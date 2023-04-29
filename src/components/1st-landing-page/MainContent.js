import React from 'react';

const MainContent = ({ openModal }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center py-2 hidden lg:block flex items-center justify-center w-full">
        <p className="text-xs break-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, ipsum lobortis hendrerit lacinia, nisi risus cursus turpis, vitae convallis ex elit id erat
        </p>
      </div>
      {/* Add more sections here */}
      <button
        className="bg-blue-500 text-white px-6 py-2 rounded mt-4"
        onClick={openModal}
      >
        Open Email Modal
      </button>
    </div>
  );
};

export default MainContent;
