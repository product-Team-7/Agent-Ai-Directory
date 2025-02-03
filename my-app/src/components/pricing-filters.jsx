"use client";

import { useState } from "react";

export function PricingFilter() {
  const [selectedPricing, setSelectedPricing] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const pricingOptions = [
    {
      id: "freemium",
      label: "Freemium",
      count: 45,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#FF9F2F]"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill="currentColor"
          />
        </svg>
      ),
      textColor: "text-[#FF9F2F]",
    },
    {
      id: "paid",
      label: "Paid",
      count: 45,
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#FF4747]"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM9.97 9.47C9.97 10.2 10.54 10.69 12.31 11.14C14.07 11.6 15.96 12.23 15.97 14.21C15.96 15.41 15.11 16.48 13.85 16.82V18H11.13V16.83C9.87 16.5 9 15.42 9 14.21H10.76C10.76 14.93 11.33 15.42 12.5 15.42C13.73 15.42 14.21 14.87 14.21 14.21C14.21 13.48 13.64 13 11.87 12.55C10.1 12.09 8.21 11.46 8.21 9.47C8.21 8.27 9.06 7.21 10.32 6.87V5.69H13.03V6.86C14.29 7.19 15.15 8.27 15.15 9.47H13.39C13.39 8.75 12.82 8.26 11.65 8.26C10.42 8.26 9.97 8.81 9.97 9.47Z"
            fill="currentColor"
          />
        </svg>
      ),
      textColor: "text-[#FF4747]",
    },
    {
      id: "free",
      label: "Free",
      count: 45,
      icon: null,
      textColor: "text-[#84D149]",
    },
  ];

  const handlePricingChange = (pricingId) => {
    setSelectedPricing((prev) => {
      if (prev.includes(pricingId)) {
        return prev.filter((id) => id !== pricingId);
      }
      return [...prev, pricingId];
    });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative">
     <button
  className="w-full flex items-center justify-between bg-black text-white border border-gray-700 py-2 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-300"
  onClick={toggleDropdown}
>
  <span className="text-lg font-medium">Pricing Models</span>
  <span className="ml-5 text-sm transform transition-transform duration-300">
    {isDropdownOpen ? "▲" : "▼"}
  </span>
</button>

      {isDropdownOpen && (
        <div className="absolute w-full mt-2 bg-black shadow-lg rounded-lg z-10">
          <div className="space-y-4 p-4">
            {pricingOptions.map((option) => (
              <label
                key={option.id}
                className="flex items-center space-x-3 cursor-pointer group"
              >
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    id={option.id}
                    checked={selectedPricing.includes(option.id)}
                    onChange={() => handlePricingChange(option.id)}
                    className="w-5 h-5 border border-gray-600 rounded bg-transparent appearance-none cursor-pointer checked:bg-white checked:border-white"
                  />
                  <svg
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none ${
                      selectedPricing.includes(option.id)
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
                  <div className="flex items-center gap-2">
                    {option.icon && (
                      <span className="flex items-center">{option.icon}</span>
                    )}
                    <span
                      className={`text-lg ${option.textColor} group-hover:opacity-80 transition-opacity`}
                    >
                      {option.label}
                    </span>
                  </div>
                  <span className="text-lg text-gray-500">
                    ({option.count})
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
