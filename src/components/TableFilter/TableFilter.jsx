import React from 'react';

const TableFilter = ({ title, property, value, data, updateFilters }) => (
  <th className="p-4 text-left">
    {title}
    {data?.length && (
      <select
        value={value}
        onChange={(e) => updateFilters(property, e.target.value)}
        className="ml-2 bg-gray-900 text-yellow-500 border border-yellow-500 rounded px-2 py-1 text-sm"
      >
        {data.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    )}
  </th>
);

export default TableFilter;