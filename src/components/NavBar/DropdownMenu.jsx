import { useState } from "react";

const DropdownMenu = ({ label, locations, customRoutes }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prevState) => !prevState);

  return (
    <li className="relative">
      <button
        onClick={toggleDropdown}
        className="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
      >
        {label}
        <svg
          className="w-4 h-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute z-10 mt-2 bg-white rounded-lg shadow-lg w-64`}
      >
        <ul className="py-2 text-sm text-gray-700 divide-y divide-gray-100 dark:bg-gray-700 dark:text-gray-200">
          {locations.map((location) => (
            <li key={location}>
              <a
                href={
                  customRoutes[location]
                    ? customRoutes[location]
                    : `#${location.replace(/\s+/g, "-").toLowerCase()}`
                }
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {location}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default DropdownMenu;
