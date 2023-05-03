import React from 'react';

const Features = (props) => {
  const { renderTextWithIcon } = props;

  return (
    <div className="bg-gray-100 border-b border-gray-400 py-4 px-4 block">
      <h3 className="hidden lg:block font-semibold mb-4">Your membership will give you access to:</h3>
      {renderTextWithIcon('Download the latest apps')}
      {renderTextWithIcon('Watch popular movies')}
      {renderTextWithIcon('Learn from eBooks and Courses')}
      {renderTextWithIcon('And more!')}
    </div>
  );
};

export default Features;