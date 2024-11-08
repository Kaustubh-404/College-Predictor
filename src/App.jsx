import React, { useState } from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import CollegePredictor from './components/CollegePredictor/CollegePredictor';

const App = () => {
  const [showPredictor, setShowPredictor] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {!showPredictor ? (
        <Dashboard onGetStarted={() => setShowPredictor(true)} />
      ) : (
        <div className="container mx-auto px-4">
          <button 
            onClick={() => setShowPredictor(false)}
            className="mt-4 px-4 py-2 bg-yellow-500 text-gray-900 rounded hover:bg-yellow-400 transition-colors"
          >
            Back to Dashboard
          </button>
          <CollegePredictor />
        </div>
      )}
    </div>
  );
};

export default App;