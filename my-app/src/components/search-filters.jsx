"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export function SearchFilters() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const categories = [
    { id: "productivity", label: "Productivity", count: 45 },
    { id: "voice-agents", label: "Voice Agents", count: 45 },
    { id: "coding-agent", label: "Coding Agent", count: 45 },
    { id: "travel-agent", label: "Travel Agent", count: 45 },
    { id: "payments", label: "Payments", count: 45 },
  ];

  const handleCategoryChange = (categoryId) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categoryId)) {
        return prev.filter((id) => id !== categoryId);
      }
      return [...prev, categoryId];
    });
  };

  const handleInputFocus = () => {
    setIsDropdownOpen(true); // Show all options when the input is focused
  };

  const handleInputBlur = (e) => {
    // Check if the blur is not caused by clicking inside the dropdown
    const relatedTarget = e.relatedTarget;
    if (!relatedTarget || !relatedTarget.closest(".dropdown")) {
      setIsDropdownOpen(false); // Close the dropdown
    }
  };

  return (
    <div className="w-full max-w-sm space-y-6">
      {/* Search Input */}
      <div className="flex-1 min-w-0">
      <input
    type="text"
    placeholder="Search"
    className=" font-medium w-full h-12 pl-4 pr-12 bg-black/40 border border-gray-700 text-gray-300 placeholder:text-gray-500 text-lg rounded-xl focus:outline-none focus:ring-1 focus:ring-white/20"
    onFocus={handleInputFocus}
    onBlur={handleInputBlur}
  />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
      </div>

      {/* Categories Dropdown */}
      {isDropdownOpen && (
        <div className="dropdown space-y-5 mt-4 bg-black/50 p-4 rounded-lg">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryChange(category.id)}
                  className="w-5 h-5 border border-gray-600 rounded bg-transparent appearance-none cursor-pointer checked:bg-white checked:border-white"
                />
                <svg
                  className={`absolute w-3 h-3 pointer-events-none ${
                    selectedCategories.includes(category.id)
                      ? "opacity-100"
                      : "opacity-0"
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
                  className={`text-lg ${
                    selectedCategories.includes(category.id)
                      ? "text-white"
                      : "text-gray-400"
                  } group-hover:text-white transition-colors`}
                >
                  {category.label}
                </span>
                <span className="text-lg text-gray-500">
                  ({category.count})
                </span>
              </div>
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
