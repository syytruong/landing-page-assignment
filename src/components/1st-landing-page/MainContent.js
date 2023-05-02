import React from 'react';
import ActivationSection from './ActivationSection';
import FeaturesSection from './FeaturesSection';
import WhyUsSection from './WhyUsSection';

const MainContent = ({ openModal }) => {
  return (
    <div className="container mx-auto px-4">
      {/* Top disclaimation text */}
      <div className="text-center py-2 hidden lg:block flex items-center justify-center w-full">
        <p className="text-xs break-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, ipsum lobortis hendrerit lacinia, nisi risus cursus turpis, vitae convallis ex elit id erat
        </p>
      </div>

      <ActivationSection openModal={openModal} />
      <FeaturesSection />
      <WhyUsSection openModal={openModal} />
    </div>
  );
};

export default MainContent;
