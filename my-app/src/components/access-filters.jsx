"use client";

import { useState } from "react";

export function AccessFilter() {
  const [selectedSources, setSelectedSources] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sourceOptions = [
    {
      id: "closed-source",
      label: "Closed Source",
      count: 45,
    },
    {
      id: "api",
      label: "API",
      count: 45,
    },
    {
      id: "open-source",
      label: "Open Source",
      count: 45,
    },
  ];

  const handleSourceChange = (sourceId) => {
    setSelectedSources((prev) => {
      if (prev.includes(sourceId)) {
        return prev.filter((id) => id !== sourceId);
      }
      return [...prev, sourceId];
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative w-full max-w-xs">
      {/* Dropdown Button */}
      <button
        className="w-full flex items-center justify-between bg-black text-white border border-gray-700 py-2 px-5 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-300"
        onClick={toggleDropdown}
      >
        <span className="text-lg font-medium">Access Model</span>
        <span className="ml-4 text-sm transform transition-transform duration-300">
          {isDropdownOpen ? "▲" : "▼"}
        </span>
      </button>

      {/* Dropdown Content */}
      {isDropdownOpen && (
        <div className="absolute z-10 mt-2 w-full bg-black border border-gray-700 rounded-lg shadow-lg">
          {sourceOptions.map((option) => (
            <label
              key={option.id}
              className="flex items-center space-x-3 px-5 py-2 cursor-pointer transition-colors"
            >
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  id={option.id}
                  checked={selectedSources.includes(option.id)}
                  onChange={() => handleSourceChange(option.id)}
                  className="w-5 h-5 border border-gray-600 rounded bg-transparent appearance-none cursor-pointer checked:bg-white checked:border-white"
                />
                <svg
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none ${
                    selectedSources.includes(option.id) ? "opacity-100" : "opacity-0"
                  }`}
                  viewBox="0 0 17 12"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 5.5L5.5 10L15 1" />
                </svg>
              </div>
              <div className="flex items-center justify-between flex-1">
                <span
                  className={`text-lg text-gray-300 group-hover:text-white transition-colors ${
                    selectedSources.includes(option.id) ? "text-white" : ""
                  }`}
                >
                  {option.label}
                </span>
                <span className="text-lg text-gray-500">({option.count})</span>
              </div>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
