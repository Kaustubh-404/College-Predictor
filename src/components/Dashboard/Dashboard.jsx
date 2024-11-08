import React from 'react';

const Dashboard = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold text-yellow-500">College Predictor</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Find the best colleges based on your JEE rank. Get accurate predictions
          for IITs and other top engineering institutions.
        </p>
        <button
          onClick={onGetStarted}
          className="px-8 py-4 bg-yellow-500 text-gray-900 text-xl font-bold rounded-lg
                   hover:bg-yellow-400 transform hover:scale-105 transition-all"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Dashboard;