import React from 'react';
import ActivationSection from './ActivationSection';
import FeaturesSection from './FeaturesSection';
import WhyUsSection from './WhyUsSection';

const MainContent = ({ openModal }) => {
  return (
    <div className="container mx-auto px-4">
      {/* Top disclaimation text */}
      <div className="text-center py-2 hidden lg:block flex items-center justify-center w-full">
        <p className="text-xs top-disclamation-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent faucibus, ipsum lobortis hendrerit lacinia, nisi risus cursus turpis, vitae convallis ex elit id erat
        </p>
      </div>

      <ActivationSection openModal={openModal} />
      <FeaturesSection />
      <WhyUsSection openModal={openModal} />

      <div className="mt-6 px-4 md:px-0 pb-4">
        <p className="text-xs text-gray-600 leading-snug">
          Offer and Billing Terms: You can try our service for 5 days at 0.00€. If you are not satisfied or you do not want to keep your membership, contact us to cancel. If you do not cancel at the end of the 5 days trial period, the service will automatically continue on a monthly basis and the service will automatically charge the credit card you have provided the applicable monthly 49.95€ fee stated at the beginning of each such period, for as long as you continue the service. You can cancel your membership at anytime.
        </p>
      </div>
    </div>
  );
};

export default MainContent;
