import React from 'react';
import TableFilter from '../TableFilter/TableFilter';
import { columns } from '../../utils/constants';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const PredictionTable = ({ colleges, filters, setFilters, isLoading = true }) => {
  const updateFilters = (key, val) => {
    setFilters({
      ...filters,
      [key]: val,
    });
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="mt-8 overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-800">
          <tr>
            {columns.map((col) => (
              <TableFilter
                key={col.property}
                title={col.title}
                data={col.data}
                property={col.property}
                value={filters[col.property]}
                updateFilters={updateFilters}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {colleges?.length ? (
            colleges.map((college, index) => (
              <tr
                key={`${index}-${college.institute}`}
                className="border-b border-gray-800 hover:bg-gray-800"
              >
                {columns.map((col) => (
                  <td
                    key={col.property}
                    className="p-4 truncate"
                    style={col.style}
                    title={college[col.property]}
                  >
                    {college[col.property]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                className="text-center p-4"
                colSpan={columns.length}
              >
                No Colleges found as per filters applied.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PredictionTable;