import React from 'react';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center mt-16">
    <div className="animate-spin rounded-full h-16 w-16 border-4 border-yellow-500 border-t-transparent"></div>
  </div>
);

export default LoadingSpinner;
