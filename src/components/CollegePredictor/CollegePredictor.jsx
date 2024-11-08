import React, { useState, useEffect } from 'react';
import { getByCategory } from '../../utils/getData';
import PredictionTable from '../PredictionTable/PredictionTable';

const CollegePredictor = () => {
  const [colleges, setColleges] = useState([]);
  const [rank, setRank] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [exam, setExam] = useState('Advanced');
  const [filters, setFilters] = useState({ category: 'OPEN' });

  const filterData = (college) => {
    let finalVal = rank <= college.closingRank;
    const dataFilters = {
      ...filters,
      type: exam === 'Advanced' ? 'IIT' : ['IIT'],
    };

    Object.keys(dataFilters).forEach((filter) => {
      if (dataFilters[filter] !== 'All') {
        if (dataFilters[filter] instanceof Array) {
          finalVal &= !dataFilters[filter].includes(college[filter]);
        } else {
          finalVal &= college[filter] === dataFilters[filter];
        }
      }
    });
    return finalVal;
  };

  const getFilteredColleges = () =>
    new Promise((resolve) => {
      const filteredColleges = getByCategory(filters.category).filter(filterData);
      setTimeout(() => {
        resolve(filteredColleges);
      }, 1000);
    });

  const filterColleges = () => {
    setLoading(true);
    getFilteredColleges().then((filteredColleges) => {
      setColleges(filteredColleges);
      setLoading(false);
    });
  };

  useEffect(() => {
    filterColleges();
  }, [exam, filters]);

  return (
    <div className="mt-8">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="text-xl">JEE</span>
          <select
            value={exam}
            onChange={(e) => setExam(e.target.value)}
            className="bg-gray-900 text-yellow-500 border-2 border-yellow-500 rounded px-4 py-2 text-xl"
          >
            <option value="Mains">Mains</option>
            <option value="Advanced">Advanced</option>
          </select>
          <span className="text-xl">Rank</span>
          <input
            type="number"
            className="bg-gray-900 text-yellow-500 border-2 border-yellow-500 rounded px-4 py-2 text-xl"
            placeholder="Enter your rank"
            value={rank}
            onChange={(e) => setRank(parseInt(e.target.value, 10))}
          />
          <button
            type="button"
            onClick={filterColleges}
            className="bg-yellow-500 text-gray-900 px-6 py-2 rounded text-lg font-bold
                     hover:bg-yellow-400 transition-colors"
          >
            Get Predictions
          </button>
        </div>
        <div className="text-center text-sm mt-6 text-gray-400">
          Made in Rajasthan by{' '}
          <a
            href="https://github.com/2AMDevs/no-bs-college-predictor/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-yellow-400"
          >
            2AM Devs
          </a>
        </div>
      </div>
      <PredictionTable
        colleges={colleges}
        filters={filters}
        setFilters={setFilters}
        isLoading={isLoading}
      />
    </div>
  );
};

export default CollegePredictor;